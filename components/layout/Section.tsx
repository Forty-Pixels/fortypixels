import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'white',
  id
}: SectionProps) {
  const bgClass = background === 'gray' ? 'bg-gray-50' : 'bg-white';
  
  return (
    <section id={id} className={`w-full py-12 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
