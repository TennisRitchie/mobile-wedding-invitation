"use client";

import { useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";
import ScrollSection from "./gsap/ScrollSection";
import SectionHeader from "./SectionHeader";

interface AccountCard {
  label: string;
  name: string;
  bank: string;
  accountNumber: string;
  depositor: string;
}

function buildCards(side: "groom" | "bride"): AccountCard[] {
  const person = side === "groom" ? WEDDING_DATA.groom : WEDDING_DATA.bride;
  const label =
    side === "groom"
      ? WEDDING_DATA.content.intro.groomLabel
      : WEDDING_DATA.content.intro.brideLabel;
  const cards: AccountCard[] = [
    {
      label,
      name: person.name,
      ...person.account,
    },
  ];
  const parents = person.parents as Record<
    string,
    {
      name: string;
      account?: { bank: string; accountNumber: string; depositor: string };
    }
  >;
  for (const [key, p] of Object.entries(parents)) {
    if (p.account) {
      cards.push({
        label:
          key === "father"
            ? WEDDING_DATA.content.contact.father
            : WEDDING_DATA.content.contact.mother,
        name: p.name,
        bank: p.account.bank,
        accountNumber: p.account.accountNumber,
        depositor: p.account.depositor,
      });
    }
  }
  return cards;
}

export default function ContactSection() {
  const [side, setSide] = useState<"groom" | "bride">("groom");
  const cards = buildCards(side);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(WEDDING_DATA.content.contact.copied);
  };

  return (
    <section className="section text-center flex flex-col items-center gap-8">
      <SectionHeader
        eyebrow="Account"
        title={WEDDING_DATA.content.contact.title}
      />

      <ScrollSection animation="fade-up">
        <p
          className="text-[14px] leading-[25px] text-[var(--color-text)] whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: WEDDING_DATA.content.contact.description,
          }}
        />
      </ScrollSection>

      <ScrollSection animation="fade-up" delay={0.1} className="w-full">
        <div className="flex justify-center w-full px-4">
          <div className="grid grid-cols-2 items-center rounded-full bg-[rgba(0,0,0,0.08)] p-[2px]">
            {(
              [
                ["groom", WEDDING_DATA.content.contact.groomSide],
                ["bride", WEDDING_DATA.content.contact.brideSide],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSide(key)}
                className={`min-w-[92px] max-w-[160px] px-4 py-4 rounded-full text-[14px] leading-[12px] whitespace-nowrap transition-colors duration-300 ${
                  side === key
                    ? "bg-white text-[var(--color-primary)]"
                    : "text-[var(--color-text-light)]"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </ScrollSection>

      <div className="w-full pb-0.5 overflow-x-auto snap-x snap-mandatory scrollbar-none">
        <div className="flex gap-3 px-[15%]">
          {cards.map((card, i) => (
            <div
              key={`${side}-${i}`}
              className="w-[70%] max-w-[280px] shrink-0 snap-center"
            >
              <div className="grid gap-4 rounded-2xl bg-white p-3 shadow-[0_1px_1.5px_rgba(26,26,26,0.1)] text-[14px] leading-[25px]">
                <p className="flex items-center justify-center text-[var(--color-primary)]">
                  {card.label} {card.name}
                </p>
                <button
                  onClick={() => copyToClipboard(card.accountNumber)}
                  className="flex items-center justify-center gap-2 px-2 text-[var(--color-text)]"
                >
                  <span className="flex flex-wrap justify-center gap-2">
                    {card.bank} {card.accountNumber}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 * [기존 방식] 아코디언형 계좌 안내 (신랑측/신부측 접기·펼치기)
 * 스와이프 대신 이 방식을 쓰려면:
 *   1) 아래 주석을 해제
 *   2) 위 ContactSection의 세그먼트 토글 + 카드 스와이프 부분을
 *      <AccountGroupAccordion title={...} side="groom" /> 형태로 교체
 * ============================================================

import { motion, AnimatePresence } from "framer-motion";

function AccountGroupAccordion({
  title,
  side,
  delay = 0,
}: {
  title: string;
  side: "groom" | "bride";
  delay?: number;
}) {
  const [isOpen, setIsOpen] = useState(true);
  const cards = buildCards(side);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(WEDDING_DATA.content.contact.copied);
  };

  return (
    <ScrollSection animation="fade-up" delay={delay} className="w-full">
      <div className="rounded-lg overflow-hidden w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-full flex items-center justify-center py-[14px] bg-[#f3f3f3] rounded-t-lg text-[14px] leading-[25px] text-[var(--color-primary)]"
        >
          {title}
          <motion.svg
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="absolute right-[15px] top-1/2 w-4 h-4 text-[var(--color-text-light)]"
            style={{ translateY: "-50%" }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-b-lg"
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-white p-4 border-b border-[rgba(26,26,26,0.12)] last:border-b-0"
                >
                  <div className="flex flex-col items-start gap-1 text-[14px] leading-[22px] text-left">
                    <p className="text-[var(--color-primary)]">
                      {card.label} {card.name}
                    </p>
                    <button
                      onClick={() => copyToClipboard(card.accountNumber)}
                      className="flex flex-wrap items-center gap-1 text-[var(--color-text)]"
                    >
                      {card.bank} {card.accountNumber}
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.8}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollSection>
  );
}

============================================================ */
