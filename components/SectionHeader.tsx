"use client";

import ScrollSection from "./gsap/ScrollSection";

export default function SectionHeader({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <ScrollSection animation="fade-up" className={`text-center ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="ko-title mt-2">{title}</h2>
    </ScrollSection>
  );
}
