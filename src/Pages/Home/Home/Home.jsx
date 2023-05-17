import React from 'react';
import Slider from '../Slider/Slider';
import AboutSection from '../AboutSection/AboutSection';
import ServiceSection from '../ServiceSection/ServiceSection';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <AboutSection></AboutSection>
            <ServiceSection></ServiceSection>
        </div>
    );
};

export default Home;