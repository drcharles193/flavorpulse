
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number; // in milliseconds
}

const FadeInSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 500,
}: FadeInSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionStyles = () => {
    const baseStyles = 'opacity-0 transition-all';
    
    const directionMap = {
      up: 'translate-y-8',
      down: 'translate-y-[-8px]',
      left: 'translate-x-8',
      right: 'translate-x-[-8px]',
      none: '',
    };
    
    return `${baseStyles} ${directionMap[direction]}`;
  };

  const getVisibleStyles = () => {
    return 'opacity-100 translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={domRef}
      className={cn(
        getDirectionStyles(),
        isVisible && getVisibleStyles(),
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
