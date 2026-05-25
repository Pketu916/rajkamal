import React, { useEffect } from 'react';
import Lenis from 'lenis';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import SolutionsSection from './components/sections/SolutionsSection';
import PackagesSection from './components/sections/PackagesSection';
import DestinationsSection from './components/sections/DestinationsSection';
import PopularPackagesSection from './components/sections/PopularPackagesSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactFormSection from './components/sections/ContactFormSection';
import Header from './components/layout/Header';
import FooterSection from './components/sections/FooterSection';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-main relative">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <PackagesSection />
      <DestinationsSection />
      <PopularPackagesSection />
      <TestimonialsSection />
      <ContactFormSection />
      <FooterSection />
    </div>
  );
}

export default App;
