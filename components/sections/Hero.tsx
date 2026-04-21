'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import SlidingLogoMarquee from '../lightswind/sliding-logo-marquee';
import { AnimatedGridPattern } from '../ui/animated-grids-pattern';
import { cn } from '@/lib/utils';
import { openCalendly } from '@/lib/calendly';

export default function Hero() {
  const stats = [
    { value: '50+', label: 'Projects' },
    { value: '98%', label: 'Satisfaction' },
    { value: '5+', label: 'Years' },
  ];

  const clientLogos = [
    { name: 'Oyo Eats', src: '/logos/oyo-eats-logo.png' },

    { name: 'Taanz', src: '/logos/taanz-logo1.png' },
    { name: 'Nuzi', src: '/logos/nuzi-logo2.png' },
  ];

  return (
    <Section className="relative overflow-hidden min-h-screen flex flex-col justify-center py-0">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.5}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
          "fill-gray-500/30 stroke-gray-500/30"
        )}
      />
      <Container className="relative z-10">
        {/* Mobile Design (Original) */}
        <Reveal className="lg:hidden text-center">


          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight mb-6">
            Clarity over complexity.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-8">
            Modern web design for startups and growing brands. We craft clean, responsive websites that look premium and convert — built with care, delivered with speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-12">
            <button
              onClick={openCalendly}
              className="w-full bg-[#B9FF66] text-black py-4 rounded-xl font-medium hover:bg-[#A5E854] hover:cursor-pointer transition-colors"
            >
              Book a Free Discovery Call
            </button>
            <Link href="/portfolio" className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 hover:cursor-pointer transition-colors text-center block">
              View Our Work
            </Link>
          </div>



          {/* Trusted Companies (Marquee) */}
          <div className="text-center mb-6">
            <SlidingLogoMarquee
              items={clientLogos.map((logo, i) => ({
                id: `${logo.name}-${i}`,
                content: (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={80}
                    height={32}
                    className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ),
              }))}
              height="72px"
              gap="2rem"
              speed={50}
              showControls={false}
            />
          </div>
        </Reveal>

        {/* Desktop Design (Figma) */}
        <Reveal className="hidden lg:block text-center max-w-5xl mx-auto" delayMs={50}>
          {/* Heading */}
          <h1 className="text-6xl xl:text-7xl font-bold leading-tight mb-8">
            Clarity over complexity.
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Modern web design for startups and growing brands. We craft clean, responsive websites that look premium and convert — built with care, delivered with speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 mb-16 justify-center">
            <button
              onClick={openCalendly}
              className="bg-[#B9FF66] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#A5E854] hover:cursor-pointer transition-colors"
            >
              Book a Free Discovery Call
            </button>
            <Link href="/portfolio" className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 hover:cursor-pointer transition-colors inline-block">
              View Our Work
            </Link>
          </div>

          {/* Client Avatars */}
          <div className="flex items-center justify-center gap-3 mb-20">
            <div className="flex -space-x-2">
              {clientLogos.map((logo, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-white border-2 border-gray-100 overflow-hidden flex items-center justify-center p-2 shadow-sm"
                >
                  <Image src={logo.src} alt={logo.name} width={48} height={48} className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">Empowering brands we believe in</p>
          </div>

          {/* Trusted Companies (Marquee) */}
          <div className="text-center">
            <SlidingLogoMarquee
              items={clientLogos.map((logo, i) => ({
                id: `${logo.name}-${i}`,
                content: (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={120}
                    height={48}
                    className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                ),
              }))}
              height="100px"
              gap="4rem"
              speed={35}
              showControls={false}
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
