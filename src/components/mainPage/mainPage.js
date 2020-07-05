import React from 'react'
import ServicesSection from './servicesSection/ServicesSection';
import BlogSection from './blogSection/BlogSection';
import WeWorkSection from './weWorkSection/WeWorkSection';
import WhyUsSection from './whyUsSection/WhyUsSection';

const mainPage = () => {

    return (
        <>
            <ServicesSection />
            <WeWorkSection />
            <WhyUsSection />
            <BlogSection />
        </>
    );
}

export default mainPage;