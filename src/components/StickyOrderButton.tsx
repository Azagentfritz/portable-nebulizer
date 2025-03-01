
import React, { useState, useEffect } from 'react';

const StickyOrderButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDoublePack = () => {
    const doublePack = document.querySelector('.popular-plan');
    if (doublePack) {
      doublePack.scrollIntoView({ behavior: 'smooth' });
      // Add highlight animation to the popular plan
      doublePack.classList.add('highlight-plan');
      setTimeout(() => {
        doublePack.classList.remove('highlight-plan');
      }, 1500);
    }
  };

  return (
    <button
      onClick={scrollToDoublePack}
      className={`fixed bottom-6 right-6 z-50 bg-nebulizer-purple text-white px-4 py-3 rounded-full shadow-lg font-medium transition-all duration-300 btn-glow ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      Order Now
    </button>
  );
};

export default StickyOrderButton;
