"use client";

import { useEffect } from "react";
import ScrollSection from "./gsap/ScrollSection";
import { WEDDING_DATA } from "@/data/wedding-data";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShareButton() {
  const { share } = WEDDING_DATA.content;

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
        imageUrl: "https://jihoons2jisu.vercel.app/gallery/thumbpic.jpg",
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
    <section className="section text-center flex flex-col items-center gap-7">
      <ScrollSection animation="fade-up">
        <p className="eyebrow">{share.eyebrow}</p>
        <h2 className="ko-title mt-2">{share.title}</h2>
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.1}>
        <p
          className="text-[14px] leading-[25px] text-[var(--color-text)] break-keep"
          dangerouslySetInnerHTML={{ __html: share.description }}
        />
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.2}>
        <button
          onClick={handleShare}
          className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full border border-[var(--color-divider)] bg-[var(--color-surface)] text-[13px] leading-[20px] tracking-[0.02em] text-[var(--color-primary)] transition-colors hover:border-[var(--color-divider-strong)]"
        >
          <svg
            className="w-[15px] h-[15px] text-[var(--color-text-light)] transition-colors group-hover:text-[var(--color-text)]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 3C6.48 3 2 6.48 2 11c0 2.87 1.94 5.4 4.85 6.85-.21.78-.77 2.88-.88 3.33-.14.56.2.55.43.4.18-.12 2.86-1.94 4.02-2.73.51.07 1.04.11 1.58.11 5.52 0 10-3.48 10-8s-4.48-8-10-8z" />
          </svg>
          {share.button}
        </button>
      </ScrollSection>
    </section>
  );
}
