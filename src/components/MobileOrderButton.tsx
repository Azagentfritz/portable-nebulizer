
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface MobileOrderButtonProps {
  onClick: () => void;
}

const MobileOrderButton: React.FC<MobileOrderButtonProps> = ({ onClick }) => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isMobile || !isVisible) return null;

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-nebulizer-purple text-white rounded-full px-4 py-3 flex items-center space-x-2 shadow-lg z-50 btn-glow"
    >
      <ShoppingCart size={20} />
      <span className="font-medium">Order Now</span>
    </button>
  );
};

export default MobileOrderButton;
