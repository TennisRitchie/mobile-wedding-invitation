import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SSG: 빌드 시 out/ 폴더에 순수 정적 파일(HTML/JS/CSS)로 내보내기
  output: "export",
  images: {
    // 정적 내보내기에서는 이미지 최적화 서버를 사용할 수 없음
    unoptimized: true,
  },
};

export default nextConfig;
