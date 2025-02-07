import AboutSection from "@/components/AboutSection";
import BannerSection from "@/components/BannerSection";
import DealsSection from "@/components/DealsSection";
import FeatureSection from "@/components/FeatureSection";
import FunfactSection from "@/components/FunfactSection";
import MapSection from "@/components/MapSection";
import NewsSection from "@/components/NewsSection";
import PlaceSection from "@/components/PlaceSection";
import TourSection from "@/components/TourSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  
  return (
    <>
      <BannerSection />
      <FeatureSection />
      <AboutSection />
      <TourSection />
      <DealsSection />
      <PlaceSection />
      <MapSection />
      <FunfactSection />
      <VideoSection />
      <NewsSection />
    </>
  );
}
