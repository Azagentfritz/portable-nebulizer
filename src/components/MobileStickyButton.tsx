
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
      // Show button after user has scrolled a bit (reduced from 300px to 100px)
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Check scroll position immediately in case page loads already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  if (!isMobile || !showButton) return null;
  
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-4 z-50 flex items-center gap-2 px-4 py-3 bg-nebulizer-purple text-white rounded-full shadow-lg btn-glow"
      aria-label="Scroll to Double Pack option"
    >
      <ShoppingCart size={20} />
      <span className="font-bold">Buy Double Pack</span>
    </button>
  );
};

export default MobileStickyButton;
