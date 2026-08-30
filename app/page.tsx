import MusicPlayer from "@/components/MusicPlayer";
import HeroSection, { HeroInfo } from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import CalendarSection from "@/components/CalendarSection";
import VenueSection from "@/components/VenueSection";
import TransportSection from "@/components/TransportSection";
import GallerySection from "@/components/GallerySection";
import EndingSection from "@/components/EndingSection";
import FooterSection from "@/components/FooterSection";
import KakaoShareButton from "@/components/KakaoShareButton";
import { readGallery } from "@/lib/gallery-store";

// 관리자 페이지에서 갤러리를 바꾸면 다음 요청부터 반영되도록
export const revalidate = 60;

export default async function WeddingInvitation() {
  const gallery = await readGallery();

  return (
    <main className="page-shell">
      <div id="music">
        <MusicPlayer />
      </div>

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
        <GallerySection items={gallery} />
      </div>

      <EndingSection />

      <div id="kakaoshare">
        <KakaoShareButton />
      </div>

      <FooterSection />
    </main>
  );
}
