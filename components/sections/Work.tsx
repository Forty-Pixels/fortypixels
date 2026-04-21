import React from 'react';
import { ArrowRight } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import ThreeDCarousel, { ThreeDCarouselItem } from '@/src/components/lightswind/3d-carousel';

export default function Work() {
  const portfolioItems: ThreeDCarouselItem[] = [
    {
      id: 1,
      title: 'Custom Delivery Platform',
      brand: 'oyoeats.lk',
      description: 'A comprehensive food delivery platform with real-time tracking, order management, and customer analytics.',
      tags: ['Web Platform', 'Mobile App', 'Delivery System'],
      imageUrl: '/images/oyo-eats.png',
      link: 'https://oyoeats.lk'
    },
    {
      id: 2,
      title: 'Accounting Services Platform',
      brand: 'taanzoutsourcing.com',
      description: 'Professional accounting services website with client portal and document management system.',
      tags: ['Professional Services', 'Client Portal', 'B2B'],
      imageUrl: '/images/taanz.png',
      link: 'https://taanzoutsourcing.com'
    },
    {
      id: 3,
      title: 'E-commerce Clothing Brand',
      brand: 'nuzii.co',
      description: 'Fashion-forward e-commerce platform with inventory management, secure checkout, and brand storytelling.',
      tags: ['E-commerce', 'Fashion', 'Brand Identity'],
      imageUrl: '/api/placeholder/400/300',
      link: 'https://nuzii.co'
    }
  ];

  return (
    <Section className="py-24 bg-white" id="portfolio">
      <Container>
        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Recent Work
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Four industries. Four happy clients.
          </p>
        </Reveal>

        {/* 3D Carousel */}
        <Reveal>
          <ThreeDCarousel
            items={portfolioItems}
            autoRotate={true}
            rotateInterval={5000}
            cardHeight={600}
            isMobileSwipe={true}
          />
        </Reveal>

        {/* CTA */}
        <Reveal className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 bg-[#B9FF66] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#A5E854] hover:cursor-pointer transition-colors">
            Explore Our Portfolio
            <ArrowRight className="w-5 h-5" />
          </button>
        </Reveal>
      </Container>
    </Section>
  );
}
