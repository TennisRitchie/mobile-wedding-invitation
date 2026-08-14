"use client";

import HeroSection, { HeroInfo } from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CalendarSection from "@/components/CalendarSection";
import VenueSection from "@/components/VenueSection";
import TransportSection from "@/components/TransportSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import EndingSection from "@/components/EndingSection";
import FooterSection from "@/components/FooterSection";

export default function WeddingInvitation() {
  return (
    <main className="page-shell">
      <div id="hero">
        <HeroSection />
        <HeroInfo />
      </div>

      <div id="intro">
        <IntroSection />
      </div>

      <div id="calendar">
        <CalendarSection />
      </div>

      <div id="venue">
        <VenueSection />
        <TransportSection />
      </div>

      <div id="gallery">
        <GallerySection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <EndingSection />
      <FooterSection />
    </main>
  );
}
