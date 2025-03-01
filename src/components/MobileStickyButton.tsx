
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileStickyButtonProps {
  onClick: () => void;
}

const MobileStickyButton: React.FC<MobileStickyButtonProps> = ({ onClick }) => {
  const isMobile = useIsMobile();
  const [showButton, setShowButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after user has scrolled a bit
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isMobile || !showButton) return null;
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 bg-nebulizer-purple text-white rounded-full shadow-lg btn-glow animate-bounce-slow"
      aria-label="Scroll to Double Pack option"
    >
      <ShoppingCart size={16} />
      <span>Buy Double Pack</span>
    </button>
  );
};

export default MobileStickyButton;
