import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
// import ServicePack from "./servicePack/ServicePack";
import BlogSection from "./blogSection/BlogSection";
import WeWorkSection from "./weWorkSection/WeWorkSection";
import WhyUsSection from "./whyUsSection/WhyUsSection";
import ServicesSection from "./servicesSection/ServicesSection";
import AboutUs from "./aboutUs/AboutUs";
import handleViewport from "react-in-viewport";
import Portfolio from "./portfolio/Portfolio";
import Form from "./form/Form";
import { env } from "../../config";
import styles from "./mainPage.module.css";
import appear from "../transitions/appear.module.css";

const Block = (props) => {
  const { inViewport, forwardedRef } = props;

  return (
    <div ref={forwardedRef}>
      <AboutUs inViewPort={inViewport} />
    </div>
  );
};
const ViewportBlock = handleViewport(Block);

const MainPage = () => {
  const [arrow, setArrow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll >= window.innerHeight - 400) {
        setArrow(true);
        return;
      } else {
        setArrow(false);
      }
    });
  }, [arrow]);

        const scroller = () => {
          document.getElementById("toucan").scrollIntoView({behavior: 'smooth'});
        };
  return (
    <>
      {/* <ServicePack /> */}
      <CSSTransition in={arrow} classNames={appear} timeout={500} unmountOnExit>
        <div onClick={scroller} className={styles.arrowToTop}></div>
      </CSSTransition>
      <ServicesSection />
      <Portfolio />
      <ViewportBlock onEnterViewport={() => {}} onLeaveViewport={() => {}} />
      <WeWorkSection />
      <WhyUsSection />
      <BlogSection />
<<<<<<< HEAD
      <Form env={env} />
=======
      <Form env={env}/>
>>>>>>> 55a8bb9417608894a0ca7aad2a61acd8c1ff5706
    </>
  );
};

export default MainPage;
