import React, { useState, useEffect } from 'react';
import { RoughNotation } from 'react-rough-notation';
import { SectionId } from '../types';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setTimeout(() => setShowFirstName(true), 500);
    setTimeout(() => setShowLastName(true), 1500);
  }, []);

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 overflow-visible ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]' : 'bg-transparent'}`}>
      <div className={`container mx-auto px-6 flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
        <div className="text-2xl font-display font-bold tracking-tighter cursor-pointer flex items-center h-full overflow-visible" onClick={() => scrollTo(SectionId.HERO)}>
          {showFirstName && (
            <RoughNotation
              type="highlight"
              iterations={20}
              animationDuration={10000}
              show={showFirstName}
              color="#d0261b"
            >
              <span className="text-white inline-block relative z-10 pr-1">DENIZ</span>
            </RoughNotation>
          )}
          <span className={`inline-block duration-1000 transition-all ${showLastName ? "w-0" : "w-4"}`}></span>
          {showLastName && (
            <RoughNotation
              type="highlight"
              iterations={20}
              animationDuration={10000}
              show={showLastName}
              color="#334155"
            >
              <span className="text-white inline-block relative z-10">FIRAT</span>
            </RoughNotation>
          )}
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {[
            { label: 'Experience', id: SectionId.EXPERIENCE },
            { label: 'Skills', id: SectionId.SKILLS },
            { label: 'Education', id: SectionId.EDUCATION },
            { label: 'Contact', id: SectionId.CONTACT },
          ].map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => scrollTo(item.id)}
                className="text-slate-300 hover:text-primary-500 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => scrollTo(SectionId.CONTACT)}
          className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full font-semibold transition-all shadow-[0_0_15px_rgba(208,38,27,0.3)] hover:shadow-[0_0_25px_rgba(208,38,27,0.5)] text-sm"
        >
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;