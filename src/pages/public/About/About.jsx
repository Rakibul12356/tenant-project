import React from "react";
import AboutHeroSection from "./sections/AboutHeroSection";
import OurStorySection from "./sections/OurStorySection";
import CoreValuesSection from "./sections/CoreValuesSection";
import AboutStatsSection from "./sections/AboutStatsSection";
import TeamSection from "./sections/TeamSection";
import AboutCTASection from "./sections/AboutCTASection";

export default function About() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "var(--home-page-bg, #ffffff)" }}>
      <AboutHeroSection />
      <OurStorySection />
      <CoreValuesSection />
      <AboutStatsSection />
      <TeamSection />
      <AboutCTASection />
    </div>
  );
}