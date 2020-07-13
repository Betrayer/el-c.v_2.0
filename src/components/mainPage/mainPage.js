import React from "react";
import ServicePack from "./servicePack/ServicePack";
import BlogSection from "./blogSection/BlogSection";
import WeWorkSection from "./weWorkSection/WeWorkSection";
import WhyUsSection from "./whyUsSection/WhyUsSection";
import ServicesSection from "./servicesSection/ServicesSection";
import AboutUs from "./aboutUs/AboutUs";
import handleViewport from 'react-in-viewport';
import Portfolio from './portfolio/Portfolio';
import Form from './form/Form'
import { env } from "../../config";

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
      {/* <ServicePack /> */}
      <ServicesSection />
      <Portfolio />
      <ViewportBlock onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <WeWorkSection />
      <WhyUsSection />
      <BlogSection />
      <Form env={env}/>
    </>
  );
};

export default mainPage;
