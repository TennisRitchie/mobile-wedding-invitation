"use client";

import { useEffect, useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";

interface Remaining {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

function getRemaining(target: Date): Remaining {
  const diff = Math.max(target.getTime() - Date.now(), 0);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

export default function CalendarSection() {
  const { calendar } = WEDDING_DATA.content;
  const [year, month, day] = WEDDING_DATA.date.split("-").map(Number);
  const { hour, minute } = WEDDING_DATA.time;
  const weddingDateTime = new Date(year, month - 1, day, hour, minute);

  // 카운트다운/디데이는 클라이언트에서만 계산 (SSR 불일치 방지)
  const [remaining, setRemaining] = useState<Remaining | null>(null);

  useEffect(() => {
    const update = () => setRemaining(getRemaining(weddingDateTime));
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 자정 기준 남은 일수 (문구용)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const weddingDay = new Date(year, month - 1, day);
  const dday = Math.round((weddingDay.getTime() - today.getTime()) / 86400000);

  const ddayText =
    dday === 0
      ? calendar.ddayToday
      : dday > 0
        ? calendar.ddayText.replace("{dday}", String(dday))
        : calendar.ddayPast.replace("{dday}", String(Math.abs(dday)));

  // 해당 월 달력 그리드 생성
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells: (number | null)[] = [
    ...Array.from({ length: firstDay }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const countdownTiles = [
    { label: "DAYS", value: remaining?.days },
    { label: "HOUR", value: remaining?.hours },
    { label: "MIN", value: remaining?.mins },
    { label: "SEC", value: remaining?.secs },
  ];

  return (
    <section className="section text-center">
      <div className="mx-auto w-[280px] max-w-[90%] flex flex-col gap-8">
        <ScrollSection animation="fade-up">
          <div className="flex flex-col items-center gap-2">
            <p className="text-[20px] leading-[28px] tracking-[1px] text-[var(--color-primary)]">
              {year}.{String(month).padStart(2, "0")}.
              {String(day).padStart(2, "0")}
            </p>
            <p className="text-[14px] leading-[22px] text-[var(--color-text)]">
              {calendar.weekdays[weddingDay.getDay()]}요일{" "}
              {hour < 12 ? "오전" : "오후"} {hour % 12 === 0 ? 12 : hour % 12}시
              {minute ? ` ${minute}분` : ""}
            </p>
          </div>
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.15}>
          <div className="w-full border-y border-[var(--color-divider)] py-3">
            <div className="grid grid-cols-7 justify-items-center items-center text-[14px] leading-[25px]">
              {calendar.weekdays.map((w, i) => (
                <span
                  key={w}
                  className={`pt-1.5 pb-3 ${
                    i === 0
                      ? "text-[var(--color-sunday)]"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  {w}
                </span>
              ))}
              {cells.map((d, i) => {
                const isWeddingDay = d === day;
                const isSunday = i % 7 === 0;
                return (
                  <span
                    key={i}
                    className="flex items-center justify-center h-10 w-10"
                  >
                    {d !== null && (
                      <span
                        className={
                          isWeddingDay
                            ? "flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-dday)] text-white"
                            : isSunday
                              ? "text-[var(--color-sunday)]"
                              : "text-[var(--color-text)]"
                        }
                      >
                        {d}
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </div>
        </ScrollSection>

        <ScrollSection animation="fade-up" delay={0.25}>
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-center items-start gap-2 font-[family-name:var(--font-eng)]">
              {countdownTiles.map((tile, i) => (
                <div key={tile.label} className="flex items-start">
                  <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-[12px] text-[var(--color-text-light)]">
                      {tile.label}
                    </p>
                    <p className="text-[24px] leading-[32px] px-0.5 text-[var(--color-text)] tabular-nums min-h-[32px]">
                      {tile.value === undefined
                        ? ""
                        : String(tile.value).padStart(2, "0")}
                    </p>
                  </div>
                  {i < countdownTiles.length - 1 && (
                    <span className="text-[24px] leading-[32px] px-0.5 text-[var(--color-text)] pt-[24px]">
                      :
                    </span>
                  )}
                </div>
              ))}
            </div>
            <p className="text-[14px] leading-[25px] text-[var(--color-text)] min-h-[25px]">
              {remaining !== null &&
                ddayText.split(/(\d+)/).map((part, i) =>
                  /^\d+$/.test(part) ? (
                    <strong
                      key={i}
                      className="font-normal text-[var(--color-primary)]"
                    >
                      {part}
                    </strong>
                  ) : (
                    <span key={i}>{part}</span>
                  ),
                )}
            </p>
          </div>
        </ScrollSection>
      </div>
    </section>
  );
}
