"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap/register";
import { WEDDING_DATA } from "@/data/wedding-data";

// SSR/클라이언트 렌더 결과가 같도록 시드 기반 의사난수 사용
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function SnowParticles({ count = 36 }: { count?: number }) {
  const flakes = useMemo(() => {
    const rand = seededRandom(20261108);
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      size: 2 + rand() * 4,
      duration: 8 + rand() * 10,
      delay: -rand() * 18,
      drift: (rand() - 0.5) * 80,
      opacity: 0.4 + rand() * 0.6,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
      {flakes.map((f) => (
        <span
          key={f.id}
          className="snow-flake"
          style={{
            left: `${f.left}%`,
            width: `${f.size}px`,
            height: `${f.size}px`,
            opacity: f.opacity,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
            ["--snow-drift" as string]: `${f.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !heroTextRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background effect - slower scroll
      gsap.to(bgRef.current, {
        y: () => window.innerHeight * 0.3,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Fade out hero text on scroll
      gsap.to(heroTextRef.current, {
        opacity: 0,
        y: -50,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom 70%",
          scrub: 1,
        },
      });
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const { hero } = WEDDING_DATA.content;

  return (
    <section
      ref={sectionRef}
      className="relative w-full aspect-[393/590] flex flex-col overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div ref={bgRef} className="absolute inset-0 z-0 scale-110">
        <Image
          src={WEDDING_DATA.images.main}
          alt="Wedding main photo"
          fill
          priority
          quality={90}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAQMDBAMBAAAAAAAAAAAAAQIDBAAFEQYSITETQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEQA/AEJUDHzD/9k="
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/5 to-black/50" />
      </div>

      <SnowParticles />

      <div
        ref={heroTextRef}
        className="relative z-10 flex-1 flex flex-col text-white py-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex-1 flex flex-col justify-center items-center text-center"
        >
          <p className="heading-serif text-[28px] tracking-[0.25em]">
            {hero.dateNumeric}
          </p>
          <p className="mt-2 heading-serif text-[11px] tracking-[0.5em] uppercase text-white/85">
            The Marriage of
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex justify-between items-end px-5 pb-2 text-[15px] font-bold tracking-[1px] leading-[25px]"
        >
          <span>{hero.groom}</span>
          <span className="heading-serif font-normal text-[13px] text-white/80">
            and
          </span>
          <span>{hero.bride}</span>
        </motion.div>
      </div>
    </section>
  );
}

export function HeroInfo() {
  const { hero } = WEDDING_DATA.content;
  return (
    <div className="py-8 px-8 text-center">
      <p className="text-[14px] leading-[25px] text-[var(--color-primary)]">
        {hero.dateLine}
      </p>
      <p className="text-[14px] leading-[25px] text-[var(--color-text)]">
        {hero.location}
      </p>
    </div>
  );
}
