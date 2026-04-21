import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`w-full max-w-[375px] md:max-w-3xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 md:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}
