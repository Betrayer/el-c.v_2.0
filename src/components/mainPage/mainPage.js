import React from 'react'
import ServicesSection from './servicesSection/ServicesSection';
import BlogSection from './blogSection/BlogSection';
import WhyUsSection from './whyUsSection/WhyUsSection';
import WeWorkSection from './weWorkSection/WeWorkSection';

const mainPage = () => {
    return (
        <>
            <ServicesSection />
            <WhyUsSection />
            <WeWorkSection />
            <BlogSection />
        </>
    );
}

export default mainPage;