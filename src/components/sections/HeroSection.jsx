import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import bgImg from '../../assets/images/home bg.png';
import girlImg from '../../assets/images/Home girl.png';
import planeImg from '../../assets/images/Hero plane.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const girlRef = useRef(null);
  const textRef = useRef(null);
  const planeRef = useRef(null);

  useEffect(() => {
    // We use gsap.context to make cleanup easy
    const ctx = gsap.context(() => {
      // 1. Background scales up on scroll
      gsap.to(bgRef.current, {
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // 2. Girl translates "top" some percentage (moves up faster for parallax)
      gsap.fromTo(girlRef.current, 
        { yPercent: 30 },
        {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );

      // 3. Optional: Fade out text as we scroll down
      gsap.to(textRef.current, {
        yPercent: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // 4. Plane moves right and top on scroll
      gsap.to(planeRef.current, {
        x: 500,
        y: -300,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full min-h-[1000px] sm:min-h-[1200px] md:min-h-[1400px] overflow-hidden bg-white flex justify-center">
      {/* Background Layer */}
      <img 
        ref={bgRef}
        src={bgImg} 
        alt="Snowy Mountains" 
        className="absolute inset-0 w-full h-full object-cover object-bottom origin-bottom"
      />
      
      {/* Foreground Girl Layer */}
      <img 
        ref={girlRef}
        src={girlImg} 
        alt="Traveler looking at mountains" 
        className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[800px] h-auto object-contain z-10"
      />

      {/* Plane Layer */}
      <img 
        ref={planeRef}
        src={planeImg} 
        alt="Airplane flying" 
        className="absolute top-[45%] right-[35%] md:top-[35%] md:right-[35%] w-full max-w-[90px] h-auto object-contain z-15 pointer-events-none"
      />

      {/* Text Content */}
      <div ref={textRef} className="relative z-20 text-center px-4 mt-32 md:mt-48 max-w-5xl mx-auto">
        <h1 className=" text-3xl md:text-6xl lg:text-7xl font-bold text-text-main mb-2 md:mb-6 tracking-tight leading-tight">
          Curated Holidays. Seamless Experiences.
        </h1>
        <p className="text-sm md:text-lg text-text-main max-w-3xl mx-auto leading-relaxed">
          At Rajkamal Holidays, We personalized holidays packages, luxury cruises, Flight Booking, visa assistance, and complete travel planning crafted for stress-free journeys worldwide.
        </p>
      </div>
    </section>
  );
  
};

export default HeroSection;
