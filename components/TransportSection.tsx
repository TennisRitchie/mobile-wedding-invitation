"use client";

import ScrollSection from "./gsap/ScrollSection";
import { WEDDING_DATA } from "@/data/wedding-data";

export default function TransportSection() {
  const { traffic } = WEDDING_DATA.content.transport;

  return (
    <section className="pt-5 pb-[60px] px-8">
      <div className="flex flex-col">
        {traffic.map((item, index) => (
          <ScrollSection key={index} animation="fade-up" delay={index * 0.1}>
            <div className="flex flex-col gap-3 py-5 border-t border-dotted border-[#e0e0e0] text-[14px] leading-[25px]">
              <p className="text-[var(--color-primary)] font-semibold">
                {item.label}
              </p>
              <div className="text-[var(--color-text)] break-keep">
                {item.lines.map((line, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <span
                      className="inline-block w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: line.color }}
                    />
                    {line.text}
                  </p>
                ))}
                {item.extra && (
                  <p className={item.lines.length ? "pt-2" : ""}>
                    {item.extra}
                  </p>
                )}
              </div>
            </div>
          </ScrollSection>
        ))}
      </div>
    </section>
  );
}
