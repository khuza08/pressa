'use client';

import { useState, useEffect, useCallback } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface NavigationProps {
  isScrolled: boolean;
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  // Body scroll lock w cleanup 
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.touchAction = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.touchAction = '';
    };
  }, [isOpen]);

  // Prevent scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      const preventDefault = (e: TouchEvent) => {
        if (e.target instanceof Element && !e.target.closest('.mobile-menu')) {
          e.preventDefault();
        }
      };
      
      document.addEventListener('touchmove', preventDefault, { passive: false });
      
      return () => {
        document.removeEventListener('touchmove', preventDefault);
      };
    }
  }, [isOpen]);

  const handleLinkClick = useCallback((id: string) => {
    setIsOpen(false);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  return (
    <>
      {/* Load Bebas Neue Font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
      `}</style>

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-lg py-4' : 'py-6'
        }`}
        role="navigation"
        aria-label="Main navigation"
        data-aos="fade-down"
        data-aos-duration="600"
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="text-2xl text-white/80 tracking-widest"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            data-aos="fade-right"
            data-aos-delay="100"
          >
            PRESSA
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-white/50 hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('about');
              }}
              data-aos="fade-down"
              data-aos-delay="200"
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white/50 hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('services');
              }}
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-white/50 hover:text-white/80 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('testimonials');
              }}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Testimonial
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              className="bg-white/80 text-black/80 px-6 py-2 pb-1 rounded-full font-bold hover:bg-white transition-colors hidden md:block"
              onClick={() => handleLinkClick('contact')}
              aria-label="Contact us"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              Contact
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white/80 p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 backdrop-blur-xl z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <aside
        id="mobile-menu"
        className={`mobile-menu fixed top-0 right-0 h-full w-64 z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } overflow-y-auto`}
        aria-label="Mobile menu"
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full">
          <div className="p-6 flex justify-end">
            <button 
              className="text-white/80 p-2 hover:bg-white/10 rounded-lg transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
          </div>
          
          <nav className="flex-grow flex flex-col justify-center items-center space-y-8 pb-8">
            <a 
              href="#about" 
              className="text-white/50 hover:text-white/80 transition-colors text-xl w-full text-center py-3 hover:bg-white/5"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('about');
              }}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-white/50 hover:text-white/80 transition-colors text-xl w-full text-center py-3 hover:bg-white/5"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('services');
              }}
            >
              Services
            </a>
            <a 
              href="#testimonials" 
              className="text-white/50 hover:text-white/80 transition-colors text-xl w-full text-center py-3 hover:bg-white/5"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('testimonials');
              }}
            >
              Testimonial
            </a>
            <button 
              className="bg-white/80 text-black/80 px-6 py-2 rounded-full font-medium hover:bg-white transition-colors mt-4 w-full max-w-[200px]"
              onClick={() => handleLinkClick('contact')}
              aria-label="Contact us"
            >
              Contact
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
}