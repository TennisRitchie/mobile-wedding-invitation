import type { Metadata } from "next";
import { isAuthConfigured, isLoggedIn } from "@/lib/admin-auth";
import { readGallery } from "@/lib/gallery-store";
import GalleryEditor from "./GalleryEditor";
import LoginForm from "./LoginForm";

// 관리자 페이지는 항상 최신 상태를 서버에서 읽어온다.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "갤러리 관리",
  // 검색엔진에 노출되지 않도록
  robots: { index: false, follow: false },
};

export default async function TacocatPage() {
  if (!(await isLoggedIn())) {
    return <LoginForm configured={isAuthConfigured()} />;
  }

  const items = await readGallery();
  return <GalleryEditor initialItems={items} />;
}
