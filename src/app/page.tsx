import { FaqSection } from "@/components/faq-section";
import FeatureCards from "@/components/feature-cards";
import GridDevingSpace from "@/components/gridDevingSpace";
import Hero from "@/components/hero";
import { MovieCarousel } from "@/components/movie-carousel";
import MovieHero from "@/components/movie-hero";
import Price from "@/components/price";
import StreamingLanding from "@/components/streaming-landing";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <main className=" bg-[#1E1E1E] text-white">
        <GridDevingSpace />
        <FeatureCards />
        <MovieCarousel />
        <Price />
        <MovieHero />
        <StreamingLanding />
        <FaqSection />
      </main>
    </>
  );
};

export default page;
