import React from "react";
import ServicePack from "./servicePack/ServicePack";
import BlogSection from "./blogSection/BlogSection";
import WeWorkSection from "./weWorkSection/WeWorkSection";
import WhyUsSection from "./whyUsSection/WhyUsSection";
import ServicesSection from "./servicesSection/ServicesSection";
import AboutUs from "./aboutUs/AboutUs";
import handleViewport from 'react-in-viewport';
import Portfolio from './portfolio/Portfolio';

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  return (
    <div ref={forwardedRef}>
      <AboutUs inViewPort={inViewport} />
    </div>
  );
};
const ViewportBlock = handleViewport(Block);
const mainPage = () => {
  return (
    <>
      <ServicesSection />
      <Portfolio />
      <ViewportBlock onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <WeWorkSection />
      <ServicePack />
      <WhyUsSection />
      <BlogSection />
    </>
  );
};

export default mainPage;
