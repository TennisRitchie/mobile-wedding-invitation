"use client";

import { useActionState } from "react";
import { login, type ActionResult } from "./actions";

export default function LoginForm({ configured }: { configured: boolean }) {
  const [state, formAction, pending] = useActionState<
    ActionResult | null,
    FormData
  >(login, null);

  return (
    <main className="flex min-h-screen items-center justify-center bg-neutral-50 px-6">
      <form
        action={formAction}
        className="w-full max-w-[320px] rounded-xl border border-neutral-200 bg-white p-6"
      >
        <h1 className="text-[15px] font-semibold text-neutral-900">
          청첩장 갤러리 관리
        </h1>
        <p className="mt-1 text-[12px] text-neutral-500">
          관리자 비밀번호를 입력하세요.
        </p>

        <input
          type="password"
          name="password"
          autoFocus
          autoComplete="current-password"
          disabled={!configured}
          className="mt-4 w-full rounded-md border border-neutral-300 px-3 py-2 text-[14px] outline-none focus:border-neutral-900"
        />

        <button
          type="submit"
          disabled={pending || !configured}
          className="mt-3 w-full rounded-md bg-neutral-900 py-2 text-[13px] text-white hover:bg-neutral-700 disabled:opacity-40"
        >
          {pending ? "확인 중…" : "로그인"}
        </button>

        {state && !state.ok && (
          <p className="mt-3 text-[12px] text-red-600">{state.error}</p>
        )}

        {!configured && (
          <p className="mt-3 rounded-md bg-amber-50 p-2 text-[11px] leading-relaxed text-amber-800">
            <code className="font-mono">ADMIN_PASSWORD</code> 와{" "}
            <code className="font-mono">ADMIN_SECRET</code> 환경변수를 설정해야
            로그인할 수 있습니다.
          </p>
        )}
      </form>
    </main>
  );
}
