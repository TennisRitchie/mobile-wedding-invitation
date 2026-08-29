"use client";

import ScrollSection from "./gsap/ScrollSection";
import { WEDDING_DATA } from "@/data/wedding-data";

/** "충무로역 | 8번 출구에서 도보로 5분" -> ["충무로역", "8번 출구에서 도보로 5분"] */
function splitLine(text: string): [string, string] {
  const [name, ...rest] = text.split("|");
  return [name.trim(), rest.join("|").trim()];
}

export default function TransportSection() {
  const { traffic } = WEDDING_DATA.content.transport;

  return (
    <section className="pt-5 pb-[60px] px-8">
      <div className="flex flex-col">
        {traffic.map((item, index) => (
          <ScrollSection key={index} animation="fade-up" delay={index * 0.1}>
            <div className="flex flex-col gap-3.5 py-6 border-t border-dotted border-[#e0e0e0]">
              <p className="text-[13px] leading-[20px] tracking-[0.02em] text-[var(--color-primary)] font-semibold">
                {item.label}
              </p>

              {item.lines.length > 0 && (
                <ul className="flex flex-col gap-3">
                  {item.lines.map((line, i) => {
                    const [name, detail] = splitLine(line.text);
                    return (
                      <li key={i} className="flex items-start gap-2.5">
                        <span
                          className="mt-[7px] inline-block w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: line.color }}
                        />
                        <div className="flex flex-col gap-0.5 break-keep">
                          <span className="text-[14px] leading-[22px] text-[var(--color-primary)] font-medium">
                            {name}
                          </span>
                          {detail && (
                            <span className="text-[13px] leading-[21px] text-[var(--color-text)]">
                              {detail}
                            </span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}

              {item.extra && (
                <p
                  className={`break-keep ${
                    item.lines.length
                      ? // 노선이 있으면 보조 설명 -> 옅게, 왼쪽 라인으로 구분
                        "pl-2.5 border-l-2 border-[var(--color-divider)] text-[13px] leading-[21px] text-[var(--color-text-light)]"
                      : // 노선이 없으면 그 자체가 본문
                        "text-[14px] leading-[22px] text-[var(--color-text)]"
                  }`}
                >
                  {item.extra}
                </p>
              )}
            </div>
          </ScrollSection>
        ))}
      </div>
    </section>
  );
}
