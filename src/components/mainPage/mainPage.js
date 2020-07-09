import React from "react";
import ServicePack from "./servicePack/ServicePack";
import BlogSection from "./blogSection/BlogSection";
import WeWorkSection from "./weWorkSection/WeWorkSection";
import WhyUsSection from "./whyUsSection/WhyUsSection";
import ServicesSection from "./servicesSection/ServicesSection";
import AboutUs from "./aboutUs/AboutUs";

const mainPage = () => {
  return (
    <>
      {/* <ServicePack /> */}
      <ServicesSection />
      <AboutUs />
      <WeWorkSection />
      <WhyUsSection />
      <BlogSection />
    </>
  );
};

export default mainPage;
