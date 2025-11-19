// app/page.tsx
"use client"

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import OurWork from './components/Works';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (e: any) => {
      setIsScrolled(e.scroll > 50);
    };

    // @ts-ignore - Lenis adds this event
    window.lenis?.on('scroll', handleScroll);

    return () => {
      // @ts-ignore - Remove listener
      window.lenis?.off('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <OurWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}