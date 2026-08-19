"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init("64a75ee8b3620eb10039fb755c76ab75");
    }
  }, []);

  const handleShare = () => {
    if (!window.Kakao) return;

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "이지훈 ♥ 박지수 결혼합니다",
        description: "11월 08일 일요일 오전 11시",
        imageUrl: "https://jihoons2jisu.vercel.app/gallery/main.jpg",
        link: {
          mobileWebUrl: "https://jihoons2jisu.vercel.app/",
          webUrl: "https://jihoons2jisu.vercel.app/",
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: "https://jihoons2jisu.vercel.app/",
            webUrl: "https://jihoons2jisu.vercel.app/",
          },
        },
      ],
    });
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center justify-center gap-2 w-full max-w-[280px] mx-auto py-3 rounded-full bg-[#FEE500] text-[14px] font-medium text-[#191919]"
    >
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3C6.48 3 2 6.48 2 11c0 2.87 1.94 5.4 4.85 6.85-.21.78-.77 2.88-.88 3.33-.14.56.2.55.43.4.18-.12 2.86-1.94 4.02-2.73.51.07 1.04.11 1.58.11 5.52 0 10-3.48 10-8s-4.48-8-10-8z" />
      </svg>
      카카오톡으로 공유하기
    </button>
  );
}