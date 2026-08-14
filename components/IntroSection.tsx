"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";
import SectionHeader from "./SectionHeader";

export default function IntroSection() {
  const { intro } = WEDDING_DATA.content;

  return (
    <section className="section text-center flex flex-col items-center gap-8">
      <SectionHeader eyebrow="Invitation" title={intro.title} />

      <ScrollSection animation="fade-up" delay={0.2}>
        <p
          className="text-[14px] leading-[25px] text-[var(--color-text)] whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: intro.mainText,
          }}
        />
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.4}>
        <div className="flex flex-col items-center gap-8">
          <div className="section-divider" />
          <div className="text-[14px] leading-[25px] text-[var(--color-text-light)]">
            <p>
              {WEDDING_DATA.groom.parents.father.name} ·{" "}
              {WEDDING_DATA.groom.parents.mother.name}
              <span className="mx-1.5">의 {intro.groomOrder}</span>
              <span className="text-[var(--color-primary)]">
                {WEDDING_DATA.groom.name.slice(1)}
              </span>
            </p>
            <p className="mt-0.5">
              {WEDDING_DATA.bride.parents.father.name} ·{" "}
              {WEDDING_DATA.bride.parents.mother.name}
              <span className="mx-1.5">의 {intro.brideOrder}</span>
              <span className="text-[var(--color-primary)]">
                {WEDDING_DATA.bride.name.slice(1)}
              </span>
            </p>
          </div>
        </div>
      </ScrollSection>
    </section>
  );
}
