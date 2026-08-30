"use client";

import { useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";
import MapSection from "./MapSection";
import SectionHeader from "./SectionHeader";

export default function VenueSection() {
  const { venue } = WEDDING_DATA;
  const [showSketch, setShowSketch] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(venue.address);
    } catch {
      // 클립보드 API를 못 쓰는 환경(비-HTTPS 등) 대비
      const el = document.createElement("textarea");
      el.value = venue.address;
      el.setAttribute("readonly", "");
      el.style.position = "fixed";
      el.style.opacity = "0";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openNaverMap = () => {
    // Keep using the original Korean address for robust map search in Korea
    const url = `https://map.naver.com/v5/search/${encodeURIComponent(venue.address)}`;
    window.open(url, "_blank");
  };

  const openKakaoMap = () => {
    // Keep using the original Korean address for robust map search in Korea
    const url = `https://map.kakao.com/link/search/${encodeURIComponent(venue.address)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="section pb-0!">
      <SectionHeader eyebrow="Location" title={WEDDING_DATA.content.venue.title} />

      <ScrollSection animation="fade-up" delay={0.1}>
        <div className="mt-8 text-center">
          <h3 className="text-[18px] leading-[28px] text-[var(--color-primary)] break-keep">
            {venue.name} {venue.hall}
          </h3>
          <p className="mt-2 text-[16px] leading-[24px] text-[var(--color-text-light)] break-keep">
            {venue.address}
          </p>
          <a
            href={`tel:${venue.phone}`}
            className="inline-block mt-4 text-[14px] leading-[22px] text-[var(--color-text)]"
          >
            Tel. {venue.phone}
          </a>
        </div>
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.2}>
        <div className="-mx-8 pt-8 pb-5">
          <MapSection />
        </div>
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.3}>
        <div className="grid grid-cols-3 gap-1.5">
          <button
            onClick={openNaverMap}
            className="flex items-center justify-center gap-1 h-10 rounded-lg bg-white border border-[var(--color-divider)] text-[12px] leading-[18px] text-[var(--color-primary)]"
          >
            <svg
              className="w-[17px] h-[17px] p-0.5 text-[#03C75A]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M16.273 12.845L7.376 0H0v24h7.726V11.156L16.624 24H24V0h-7.727z" />
            </svg>
            {WEDDING_DATA.content.venue.naverMap}
          </button>
          <button
            onClick={openKakaoMap}
            className="flex items-center justify-center gap-1 h-10 rounded-lg bg-white border border-[var(--color-divider)] text-[12px] leading-[18px] text-[var(--color-primary)]"
          >
            <svg
              className="w-[17px] h-[17px] text-[#e0a800]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 3C6.477 3 2 6.477 2 10.5c0 2.47 1.607 4.647 4.035 5.906l-.857 3.17a.375.375 0 00.577.412l3.725-2.482c.818.106 1.661.161 2.52.161 5.523 0 10-3.477 10-7.667S17.523 3 12 3z" />
            </svg>
            {WEDDING_DATA.content.venue.kakaoMap}
          </button>
          <button
            onClick={() => setShowSketch(!showSketch)}
            className="flex items-center justify-center gap-1 h-10 rounded-lg bg-white border border-[var(--color-divider)] text-[12px] leading-[18px] text-[var(--color-primary)]"
          >
            <svg
              className="w-[17px] h-[17px] text-[var(--color-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            {WEDDING_DATA.content.venue.sketchMap}
          </button>
        </div>

        <button
          onClick={copyAddress}
          className="mt-1.5 flex items-center justify-center gap-1.5 w-full h-10 rounded-lg bg-white border border-[var(--color-divider)] text-[12px] leading-[18px] text-[var(--color-primary)]"
        >
          {copied ? (
            <svg
              className="w-[15px] h-[15px] text-[var(--color-primary)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="w-[15px] h-[15px] text-[var(--color-text)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
          {copied
            ? WEDDING_DATA.content.venue.addressCopied
            : WEDDING_DATA.content.venue.copyAddress}
        </button>
      </ScrollSection>

      {showSketch && (
        <div className="flex justify-center mt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={venue.sketchImage}
            alt="예식장 약도"
            className="w-full max-w-[326px]"
          />
        </div>
      )}
    </section>
  );
}
