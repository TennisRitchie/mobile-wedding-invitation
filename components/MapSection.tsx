"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";

export default function MapSection() {
  const { venue } = WEDDING_DATA;

  useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY || "",
    libraries: ["services", "clusterer"],
  });

  return (
    <div className="w-full overflow-hidden h-[260px]">
      <Map
        center={venue.coordinates}
        level={4} // 기본값 3보다 한 단계 축소 — 주변 지하철역까지 함께 보이도록
        draggable={false} // 모바일에서 페이지 스크롤이 지도에 갇히지 않도록
        zoomable={false}
        style={{ width: "100%", height: "100%" }}
      >
        <MapMarker
          position={venue.coordinates}
          image={{
            src: "/marker-wedding.svg",
            size: { width: 40, height: 52 },
            options: {
              // 핀 끝이 실제 좌표를 가리키도록
              offset: { x: 20, y: 52 },
              alt: `${venue.name} ${venue.hall}`,
            },
          }}
        />
      </Map>
    </div>
  );
}
