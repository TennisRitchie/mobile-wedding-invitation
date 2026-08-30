"use server";

import { revalidatePath } from "next/cache";
import type { GalleryItem } from "@/data/wedding-data";
import {
  endSession,
  isAuthConfigured,
  isLoggedIn,
  startSession,
  verifyPassword,
} from "@/lib/admin-auth";
import { writeGallery } from "@/lib/gallery-store";

export type ActionResult = { ok: true } | { ok: false; error: string };

export async function login(
  _prev: ActionResult | null,
  formData: FormData
): Promise<ActionResult> {
  if (!isAuthConfigured()) {
    return {
      ok: false,
      error:
        "ADMIN_PASSWORD / ADMIN_SECRET 환경변수가 설정되지 않았습니다.",
    };
  }

  const input = String(formData.get("password") ?? "");
  // 무차별 대입을 조금이나마 늦추기 위한 지연
  await new Promise((r) => setTimeout(r, 400));

  if (!verifyPassword(input)) {
    return { ok: false, error: "비밀번호가 올바르지 않습니다." };
  }

  await startSession();
  return { ok: true };
}

export async function logout() {
  await endSession();
}

export async function saveGallery(items: GalleryItem[]): Promise<ActionResult> {
  // 저장은 반드시 서버에서 세션을 다시 확인한다.
  if (!(await isLoggedIn())) {
    return { ok: false, error: "로그인이 필요합니다. 새로고침 후 다시 시도하세요." };
  }

  try {
    await writeGallery(items);
    revalidatePath("/");
    revalidatePath("/tacocat");
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
