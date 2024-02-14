"use client";
import React from "react";
import BannerSection from "../sections/banner-section";
import AboutSection from "../sections/about-section";
import ServicesSection from "../sections/services-section";
import CTASection from "../sections/cta-section";
import FAQSection from "../sections/faq-section";
import SkillsSection from "../sections/skills-section";

const Home = () => {
  return (
    <>
      <BannerSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <CTASection />
      <FAQSection />
    </>
  );
};

export default Home;
