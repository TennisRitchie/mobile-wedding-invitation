"use client";

import { useEffect, useRef, useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";
import { Map, MapMarker, ZoomControl, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapSection() {
  const { venue } = WEDDING_DATA;
  const wrapRef = useRef<HTMLDivElement>(null);

  // 지도를 한 번 누르기 전에는 조작을 막아, 페이지를 스크롤하다가
  // 지도 위에서 스크롤이 멈추는 문제를 방지한다. 누르면 이동·확대가 모두 열린다.
  const [active, setActive] = useState(false);

  // 지도가 화면에서 벗어나면 다시 잠가 둔다.
  useEffect(() => {
    if (!active || !wrapRef.current) return;
    const el = wrapRef.current;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setActive(false);
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [active]);

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "",
    libraries: ["services", "clusterer"],
  });

  return (
    <div ref={wrapRef} className="relative w-full overflow-hidden h-[260px]">
      <Map
        center={venue.coordinates}
        level={4}
        draggable={active}
        zoomable={active}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={venue.coordinates}
          image={{
            src: "/marker-wedding.svg",
            size: { width: 40, height: 52 },
            options: {
              offset: { x: 20, y: 52 },
              alt: `${venue.name} ${venue.hall}`,
            },
          }}
        />
        {active && <ZoomControl position="RIGHT" />}
      </Map>

      {!active && (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label="지도 조작하기"
          className="absolute inset-0 z-10 flex items-end justify-center bg-transparent pb-3"
        >
          <span className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] leading-none text-[var(--color-text)] shadow-[0_1px_4px_rgba(0,0,0,0.12)]">
            지도를 눌러 이동·확대
          </span>
        </button>
      )}
    </div>
  );
}
