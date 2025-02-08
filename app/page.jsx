import Head from "next/head";
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

export const generateMetadata = () => {
  return {
    title: "Best Tour & Travel Packages | Explore the World",
    description: "Discover amazing travel deals and destinations.",
    openGraph: {
      title: "Best Tour & Travel Packages | Explore the World",
      description: "Discover amazing travel deals and destinations.",
      images: ["https://example.com/featured-image.jpg"],
      url: "https://yourwebsite.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Best Tour & Travel Packages | Explore the World",
      description: "Discover amazing travel deals and destinations.",
      images: ["https://example.com/featured-image.jpg"],
    },
  };
};

export default function Home() {
  const title = "Best Tour & Travel Packages | Explore the World";
  const description = "Discover amazing travel deals and destinations.";
  const image = "https://example.com/featured-image.jpg";
  const url = "https://yourwebsite.com";

  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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
