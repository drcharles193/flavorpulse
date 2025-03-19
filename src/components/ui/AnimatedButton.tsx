
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
  animationType?: 'scale' | 'pulse' | 'none';
  icon?: React.ReactNode;
}

const AnimatedButton = ({
  children,
  variant = 'default',
  size = 'default',
  className,
  animationType = 'scale',
  icon,
  ...props
}: AnimatedButtonProps) => {
  const getAnimationClass = () => {
    switch (animationType) {
      case 'scale':
        return 'hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200';
      case 'pulse':
        return 'hover:animate-pulse-soft';
      default:
        return '';
    }
  };

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        'font-medium rounded-full shadow-sm transition-all duration-300',
        getAnimationClass(),
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Button>
  );
};

export default AnimatedButton;
