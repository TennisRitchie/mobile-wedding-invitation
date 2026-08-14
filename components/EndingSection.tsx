"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WEDDING_DATA } from "@/data/wedding-data";

const LIGHT_MASK =
  "linear-gradient(transparent, rgba(26,26,26,.26) 6.34%, rgba(26,26,26,.55) 10.74%, rgba(26,26,26,.824) 15.06%, #1a1a1a 20%, #1a1a1a 80%, rgba(26,26,26,.824) 84.94%, rgba(26,26,26,.55) 89.26%, rgba(26,26,26,.26) 93.66%, transparent)";

export default function EndingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="relative w-full aspect-[393/580]"
        style={{
          WebkitMaskImage: LIGHT_MASK,
          maskImage: LIGHT_MASK,
        }}
      >
        <Image
          src={WEDDING_DATA.images.ending}
          alt="Ending photo"
          fill
          className="object-cover object-center"
          sizes="(max-width: 720px) 100vw, 720px"
          quality={90}
        />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.2)]" />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-20%" }}
          className="absolute left-0 right-0 top-1/2 -translate-y-1/2 px-[30px] text-center text-white text-[12px] tracking-[2px] leading-[1.7] whitespace-pre-wrap"
        >
          {WEDDING_DATA.content.ending.ment}
        </motion.p>
      </div>
    </section>
  );
}
