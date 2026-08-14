import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@/lib/gsap/register";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "11월 08일 이지훈 ♥ 박지수 결혼합니다.",
  description: "소중한 분들을 초대합니다",
  openGraph: {
    title: "11월 08일 이지훈 ♥ 박지수 결혼합니다.",
    description: "소중한 분들을 초대합니다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&family=Bona+Nova:ital,wght@0,400;0,700;1,400&family=Bona+Nova+SC&family=Crimson+Pro:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
