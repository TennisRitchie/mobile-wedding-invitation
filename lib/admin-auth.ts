import "server-only";
import { createHmac, timingSafeEqual, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

/**
 * /tacocat 관리자 인증.
 *
 * 비밀번호는 서버에서만 검증하고, 통과하면 서명된 httpOnly 쿠키를 내려준다.
 * 비밀번호 자체는 브라우저로 나가지 않는다.
 *
 * 필요한 환경변수:
 *   ADMIN_PASSWORD  관리자 비밀번호
 *   ADMIN_SECRET    쿠키 서명용 임의 문자열(32자 이상 권장)
 */

const COOKIE = "tacocat_session";
const MAX_AGE = 60 * 60 * 12; // 12시간

const password = () => process.env.ADMIN_PASSWORD ?? "";
const secret = () => process.env.ADMIN_SECRET ?? "";

export const isAuthConfigured = () =>
  password().length > 0 && secret().length > 0;

const sign = (value: string) =>
  createHmac("sha256", secret()).update(value).digest("hex");

/** 길이가 달라도 타이밍 차이가 새지 않도록 해시를 비교한다 */
function safeEqual(a: string, b: string) {
  const ha = createHmac("sha256", secret()).update(a).digest();
  const hb = createHmac("sha256", secret()).update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function verifyPassword(input: string) {
  if (!isAuthConfigured()) return false;
  return safeEqual(input, password());
}

export function createSessionValue() {
  const issued = `${Date.now()}.${randomBytes(8).toString("hex")}`;
  return `${issued}.${sign(issued)}`;
}

function isValidSession(value: string | undefined) {
  if (!value || !isAuthConfigured()) return false;
  const idx = value.lastIndexOf(".");
  if (idx < 0) return false;

  const payload = value.slice(0, idx);
  const mac = value.slice(idx + 1);
  if (sign(payload) !== mac) return false;

  const issuedAt = Number(payload.split(".")[0]);
  if (!Number.isFinite(issuedAt)) return false;
  return Date.now() - issuedAt < MAX_AGE * 1000;
}

export async function isLoggedIn() {
  const store = await cookies();
  return isValidSession(store.get(COOKIE)?.value);
}

export async function startSession() {
  const store = await cookies();
  store.set(COOKIE, createSessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });
}

export async function endSession() {
  const store = await cookies();
  store.delete(COOKIE);
}
