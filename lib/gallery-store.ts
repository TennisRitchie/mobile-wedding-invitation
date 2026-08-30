import "server-only";
import { head, put } from "@vercel/blob";
import { galleryItems, type GalleryItem } from "@/data/wedding-data";

/**
 * 갤러리 노출 순서 / 숨김 설정 저장소.
 *
 * - BLOB_READ_WRITE_TOKEN 이 있으면 Vercel Blob 을 사용한다(배포 환경).
 * - 토큰이 없으면 저장소에 커밋된 data/gallery.json 을 그대로 쓴다(로컬 기본값).
 *   따라서 Blob 을 붙이기 전에도 사이트는 정상 동작한다.
 */

const BLOB_PATH = "gallery.json";
const hasBlob = () => Boolean(process.env.BLOB_READ_WRITE_TOKEN);

/** 저장소에 커밋된 기본값 (Blob 이 비었을 때의 시작점) */
export const fallbackItems: GalleryItem[] = galleryItems;

function isValid(items: unknown): items is GalleryItem[] {
  return (
    Array.isArray(items) &&
    items.length > 0 &&
    items.every(
      (i) =>
        i &&
        typeof i === "object" &&
        typeof (i as GalleryItem).src === "string" &&
        (i as GalleryItem).src.startsWith("/gallery/")
    )
  );
}

/**
 * 화면에 그릴 갤러리 목록을 읽는다.
 * Blob 이 없거나 읽기에 실패하면 커밋된 기본값으로 조용히 넘어간다 —
 * 청첩장이 빈 갤러리로 보이는 일은 없어야 하기 때문.
 */
export async function readGallery(): Promise<GalleryItem[]> {
  if (!hasBlob()) return fallbackItems;

  try {
    // head() 로 URL 을 얻은 뒤 직접 받아야 CDN 캐시를 우회할 수 있다.
    const meta = await head(BLOB_PATH).catch(() => null);
    if (!meta) return fallbackItems;

    const res = await fetch(meta.url, { cache: "no-store" });
    if (!res.ok) return fallbackItems;

    const data = await res.json();
    return isValid(data) ? data : fallbackItems;
  } catch (e) {
    console.error("[gallery] Blob 읽기 실패, 기본값 사용:", e);
    return fallbackItems;
  }
}

/** 관리자 페이지에서 저장할 때 사용 */
export async function writeGallery(items: GalleryItem[]) {
  if (!isValid(items)) throw new Error("갤러리 형식이 올바르지 않습니다");
  if (!hasBlob()) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN 이 설정되지 않았습니다. Vercel 대시보드에서 Blob 스토어를 연결하세요."
    );
  }

  await put(BLOB_PATH, JSON.stringify(items, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });

  return items.length;
}
