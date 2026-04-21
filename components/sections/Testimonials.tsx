import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { InfiniteMovingCards } from '@/src/components/ui/infinite-moving-cards';

export default function Testimonials() {
  const testimonials = [
    {
      id: "oyo-eats",
      quote: "Forty Pixels took our outdated website and turned it into something clean, fast, and functional. Value-driven, yet premium.",
      name: "Founder",
      title: "Oyo Eats",
      logo: "/logos/oyo-eats-logo.png"
    },

    {
      id: "taanz-outsourcing",
      quote: "Fast delivery, no headaches, and a beautiful result.",
      name: "Owner",
      title: "Taanz Outsourcing",
      logo: "/logos/taanz-logo1.png"
    },
  ];

  return (
    <Section className="py-24 bg-white" id="id">
      <Container>
        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            What Our Clients Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects. Real results.
          </p>
        </Reveal>

        {/* Infinite Moving Cards */}
        <Reveal>
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="normal"
            pauseOnHover={true}
            className="w-full"
          />
        </Reveal>
      </Container>
    </Section>
  );
}
