
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  borderEffect?: boolean;
}

const GlassmorphicCard = ({
  children,
  className,
  hoverEffect = false,
  borderEffect = false,
  ...props
}: GlassmorphicCardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6 shadow-sm transition-all duration-300',
        hoverEffect && 'hover:shadow-md hover:translate-y-[-2px]',
        borderEffect && 'border-[1px] border-white/20 dark:border-white/10',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
