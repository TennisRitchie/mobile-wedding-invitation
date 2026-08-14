"use client";

import AnimatedSection from "./AnimatedSection";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function FooterSection() {
  return (
    <footer className="py-14 px-6 text-center bg-[var(--color-secondary)]">
      <AnimatedSection>
        <p className="heading-serif text-xs tracking-[0.4em] uppercase text-[var(--color-text-light)]">
          {WEDDING_DATA.groom.name} · {WEDDING_DATA.bride.name}
        </p>
        <p className="text-xs text-[var(--color-text-light)] mt-4 opacity-70">
          {WEDDING_DATA.content.footer.copyright}
        </p>
      </AnimatedSection>
    </footer>
  );
}
