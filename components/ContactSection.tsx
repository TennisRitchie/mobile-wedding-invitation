"use client";

import { WEDDING_DATA } from "@/data/wedding-data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ScrollSection from "./gsap/ScrollSection";
import SectionHeader from "./SectionHeader";

interface AccountCard {
  label: string;
  name: string;
  bank: string;
  accountNumber: string;
  depositor: string;
}

interface ParentInfo {
  name: string;
  account?: { bank: string; accountNumber: string; depositor: string };
}

function buildCards(side: "groom" | "bride"): AccountCard[] {
  const person = side === "groom" ? WEDDING_DATA.groom : WEDDING_DATA.bride;
  const label =
    side === "groom"
      ? WEDDING_DATA.content.intro.groomLabel
      : WEDDING_DATA.content.intro.brideLabel;

  const cards: AccountCard[] = [];

  const parents = person.parents as Record<string, ParentInfo>;

  if (parents.father?.account) {
    cards.push({
      label: WEDDING_DATA.content.contact.father,
      name: parents.father.name,
      bank: parents.father.account.bank,
      accountNumber: parents.father.account.accountNumber,
      depositor: parents.father.account.depositor,
    });
  }

  if (parents.mother?.account) {
    cards.push({
      label: WEDDING_DATA.content.contact.mother,
      name: parents.mother.name,
      bank: parents.mother.account.bank,
      accountNumber: parents.mother.account.accountNumber,
      depositor: parents.mother.account.depositor,
    });
  }

  cards.push({
    label,
    name: person.name,
    ...person.account,
  });

  return cards;
}

function AccountGroupAccordion({
  title,
  side,
  delay = 0,
}: {
  title: string;
  side: "groom" | "bride";
  delay?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
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

export default function ContactSection() {
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

      <div className="w-full flex flex-col gap-3 px-4">
        <AccountGroupAccordion
          title={WEDDING_DATA.content.contact.groomSide}
          side="groom"
          delay={0.1}
        />
        <AccountGroupAccordion
          title={WEDDING_DATA.content.contact.brideSide}
          side="bride"
          delay={0.2}
        />
      </div>
    </section>
  );
}
