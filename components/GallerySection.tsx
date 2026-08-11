"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { WEDDING_DATA } from "@/data/wedding-data";

const slideVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : direction < 0 ? -1000 : 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : direction > 0 ? -1000 : 0,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function GallerySection() {
  const galleryImages = WEDDING_DATA.images.gallery;

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    if (selectedImage === null) return;
    setDirection(newDirection);

    let nextIndex = selectedImage + newDirection;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    if (nextIndex >= galleryImages.length) nextIndex = 0;

    setSelectedImage(nextIndex);
  };  

  if (!galleryImages || galleryImages.length === 0) {
    return null;
  }

  return (
    <section className="relative bg-white pb-20 pt-10 px-0 min-h-screen">
      {/* Strict 3-column grid on ALL screens (roughly 3 x 11), all photos same aspect ratio */}
      <div className="grid grid-cols-3 gap-2 md:gap-4 px-2 md:px-4">
        {galleryImages.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-10%" }}
            className="relative cursor-pointer group overflow-hidden rounded-lg bg-gray-100 col-span-1 aspect-square"
            onClick={() => {
              setDirection(0);
              setSelectedImage(index);
            }}
          >
            <Image
              src={item.src}
              alt={
                item.alt ||
                `${WEDDING_DATA.content.gallery.photoAlt} ${index + 1}`
              }
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
              sizes="33vw"
              quality={85}
            />

            {/* Hover Text Reveal */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-white font-serif tracking-widest text-lg uppercase translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {WEDDING_DATA.content.gallery.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/95 backdrop-blur-sm flex items-center justify-center touch-none"
            onClick={() => {
              setDirection(0);
              setSelectedImage(null);
            }}
          >
            {/* Close Button */}
            <button className="absolute top-6 right-6 text-white p-2 z-50 hover:opacity-70 transition-opacity">
              <span className="text-xs tracking-widest uppercase">
                {WEDDING_DATA.content.gallery.close}
              </span>
            </button>

            {/* Inner AnimatePresence for Image Transitions */}
            <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={selectedImage}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute w-full h-full flex items-center justify-center p-4 md:p-10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={galleryImages[selectedImage].src}
                      alt={
                        galleryImages[selectedImage].alt ||
                        `${WEDDING_DATA.content.gallery.photoAlt} ${selectedImage + 1}`
                      }
                      fill
                      className="object-contain select-none pointer-events-none"
                      quality={100}
                      priority
                      draggable={false}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                paginate(-1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 hover:bg-white/10 rounded-full transition-colors z-50 hidden md:block"
              onClick={(e) => {
                e.stopPropagation();
                paginate(1);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}