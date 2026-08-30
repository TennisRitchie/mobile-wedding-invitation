"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryItem } from "@/data/wedding-data";
import { logout, saveGallery } from "./actions";

type Status =
  | { kind: "idle" }
  | { kind: "saving" }
  | { kind: "saved"; at: string }
  | { kind: "error"; message: string };

export default function GalleryEditor({
  initialItems,
}: {
  initialItems: GalleryItem[];
}) {
  const [items, setItems] = useState<GalleryItem[]>(() =>
    initialItems.map((i) => ({ ...i }))
  );
  // 마지막으로 저장된 상태 (되돌리기 / 변경 여부 판단 기준)
  const [saved, setSaved] = useState<GalleryItem[]>(() =>
    initialItems.map((i) => ({ ...i }))
  );
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [filter, setFilter] = useState<"all" | "shown" | "hidden">("all");
  const dragFrom = useRef<number | null>(null);
  const [dragOver, setDragOver] = useState<number | null>(null);

  const dirty = useMemo(
    () => JSON.stringify(items) !== JSON.stringify(saved),
    [items, saved]
  );

  // 변경사항이 있으면 실수로 창을 닫지 않도록
  useEffect(() => {
    if (!dirty) return;
    const h = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", h);
    return () => window.removeEventListener("beforeunload", h);
  }, [dirty]);

  const shownCount = items.filter((i) => !i.hidden).length;

  const move = useCallback((from: number, to: number) => {
    setItems((prev) => {
      if (to < 0 || to >= prev.length || from === to) return prev;
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved);
      return next;
    });
  }, []);

  const toggleHidden = (index: number) =>
    setItems((prev) =>
      prev.map((it, i) => (i === index ? { ...it, hidden: !it.hidden } : it))
    );

  const setAllHidden = (hidden: boolean) =>
    setItems((prev) => prev.map((it) => ({ ...it, hidden })));

  const save = async () => {
    setStatus({ kind: "saving" });
    const snapshot = items.map((i) => ({ ...i }));
    const res = await saveGallery(snapshot).catch((e) => ({
      ok: false as const,
      error: String((e as Error).message),
    }));

    if (res.ok) {
      setSaved(snapshot);
      setStatus({ kind: "saved", at: new Date().toLocaleTimeString("ko-KR") });
    } else {
      setStatus({ kind: "error", message: res.error });
    }
  };

  const download = () => {
    const blob = new Blob([JSON.stringify(items, null, 2) + "\n"], {
      type: "application/json",
    });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "gallery.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const visible = items
    .map((it, i) => ({ it, i }))
    .filter(({ it }) =>
      filter === "all" ? true : filter === "hidden" ? it.hidden : !it.hidden
    );

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-5 py-3">
          <div className="mr-auto">
            <h1 className="text-[15px] font-semibold tracking-tight">
              청첩장 갤러리 관리
            </h1>
            <p className="mt-0.5 text-[12px] text-neutral-500">
              전체 {items.length}장 · 노출 {shownCount}장 · 숨김{" "}
              {items.length - shownCount}장
              {dirty && (
                <span className="ml-2 text-amber-600">저장 안 된 변경사항</span>
              )}
            </p>
          </div>

          <div className="flex overflow-hidden rounded-md border border-neutral-300 text-[12px]">
            {(
              [
                ["all", "전체"],
                ["shown", "노출"],
                ["hidden", "숨김"],
              ] as const
            ).map(([k, label]) => (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className={`px-3 py-1.5 ${
                  filter === k
                    ? "bg-neutral-900 text-white"
                    : "bg-white hover:bg-neutral-100"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setAllHidden(false)}
            className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-[12px] hover:bg-neutral-100"
          >
            전체 노출
          </button>
          <button
            onClick={() => setItems(saved.map((i) => ({ ...i })))}
            disabled={!dirty}
            className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-[12px] hover:bg-neutral-100 disabled:opacity-40"
          >
            되돌리기
          </button>
          <button
            onClick={download}
            className="rounded-md border border-neutral-300 bg-white px-3 py-1.5 text-[12px] hover:bg-neutral-100"
          >
            JSON 내려받기
          </button>
          <button
            onClick={save}
            disabled={!dirty || status.kind === "saving"}
            className="rounded-md bg-neutral-900 px-4 py-1.5 text-[12px] text-white hover:bg-neutral-700 disabled:opacity-40"
          >
            {status.kind === "saving" ? "저장 중…" : "저장"}
          </button>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-md px-2 py-1.5 text-[12px] text-neutral-500 hover:text-neutral-900"
            >
              로그아웃
            </button>
          </form>
        </div>

        {status.kind === "saved" && (
          <p className="border-t border-emerald-200 bg-emerald-50 px-5 py-2 text-[12px] text-emerald-800">
            저장했습니다 ({status.at}). 청첩장 화면에 바로 반영됩니다.
          </p>
        )}
        {status.kind === "error" && (
          <p className="border-t border-red-200 bg-red-50 px-5 py-2 text-[12px] text-red-700">
            저장 실패: {status.message}
          </p>
        )}
      </header>

      <p className="mx-auto max-w-6xl px-5 pt-4 text-[12px] text-neutral-500">
        카드를 드래그해 순서를 바꾸고, 사진을 눌러 노출/숨김을 전환하세요.
        숨긴 사진은 청첩장에 나타나지 않습니다.
      </p>

      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 p-5 sm:grid-cols-4 lg:grid-cols-6">
        {visible.map(({ it, i }) => (
          <div
            key={it.src}
            draggable
            onDragStart={() => (dragFrom.current = i)}
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(i);
            }}
            onDragLeave={() => setDragOver((d) => (d === i ? null : d))}
            onDrop={(e) => {
              e.preventDefault();
              if (dragFrom.current !== null) move(dragFrom.current, i);
              dragFrom.current = null;
              setDragOver(null);
            }}
            onDragEnd={() => {
              dragFrom.current = null;
              setDragOver(null);
            }}
            className={`group relative overflow-hidden rounded-lg border bg-white transition ${
              dragOver === i
                ? "border-neutral-900 ring-2 ring-neutral-900"
                : "border-neutral-200"
            }`}
          >
            <button
              onClick={() => toggleHidden(i)}
              className="block w-full cursor-pointer"
              title={it.hidden ? "노출하기" : "숨기기"}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={it.thumb ?? it.src}
                alt={it.alt ?? ""}
                loading="lazy"
                className={`aspect-[10/13] w-full object-cover transition ${
                  it.hidden ? "opacity-25 grayscale" : ""
                }`}
              />
            </button>

            <span className="pointer-events-none absolute left-1.5 top-1.5 rounded bg-black/60 px-1.5 py-0.5 text-[10px] font-medium text-white">
              {i + 1}
            </span>
            {it.hidden && (
              <span className="pointer-events-none absolute right-1.5 top-1.5 rounded bg-red-600/90 px-1.5 py-0.5 text-[10px] text-white">
                숨김
              </span>
            )}

            <div className="flex items-center justify-between border-t border-neutral-100 px-1.5 py-1">
              <div className="flex gap-0.5">
                <IconBtn label="맨 앞으로" onClick={() => move(i, 0)}>
                  ⇤
                </IconBtn>
                <IconBtn label="앞으로" onClick={() => move(i, i - 1)}>
                  ←
                </IconBtn>
                <IconBtn label="뒤로" onClick={() => move(i, i + 1)}>
                  →
                </IconBtn>
                <IconBtn
                  label="맨 뒤로"
                  onClick={() => move(i, items.length - 1)}
                >
                  ⇥
                </IconBtn>
              </div>
              <span className="truncate pl-1 font-mono text-[9px] text-neutral-400">
                {it.src.split("/").pop()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function IconBtn({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      aria-label={label}
      className="rounded px-1 py-0.5 text-[11px] leading-none text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
    >
      {children}
    </button>
  );
}
