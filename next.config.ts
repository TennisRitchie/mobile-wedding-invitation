import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 내보내기(output: "export")는 쓰지 않는다.
  // 관리자 페이지(/tacocat)가 서버에서 비밀번호를 검증하고
  // Vercel Blob 에 갤러리 설정을 저장해야 하므로 서버 런타임이 필요하다.
  images: {
    // 갤러리 이미지는 미리 1000px / 400px 두 벌로 만들어 두었고
    // 정적 파일로 CDN 캐시되므로 별도 최적화 서버를 쓰지 않는다.
    unoptimized: true,
  },
};

export default nextConfig;
