import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Work - Web Design Portfolio & Case Studies",
  description: "Explore Forty Pixels' web design portfolio. See how we help startups in food delivery, travel, and e-commerce achieve real business growth.",
  alternates: {
    canonical: "https://fortypixels.com/portfolio"
  }
};

export default function PortfolioPage() {
  const projects = [
    {
      id: 'oyoeats',
      title: 'oyoeats.lk',
      description: 'A custom delivery platform built with clean UI, fast load times, and a smooth ordering experience. We created a comprehensive system that connects local restaurants with customers through an intuitive interface.',
      image: '/logos/oyo-eats-logo.png',
      client: 'Local Restaurant Chain',
      results: ['45% Increase in Orders', '3.2x Faster Load Times', '98% Customer Satisfaction']
    },

    {
      id: 'taanzoutsourcing',
      title: 'taanzoutsourcing.com',
      description: 'A clean and professional site for an accounting service company that needed trust and credibility. The design emphasizes expertise and comprehensive financial services.',
      image: '/logos/taanz-logo1.png',
      client: 'Taanz Outsourcing',
      results: ['78% Lead Generation', '5.1x Page Views', '94% Client Trust Score']
    },
    {
      id: 'nuzi',
      title: 'nuzii.co',
      description: 'A modern ecommerce store with a sleek layout, product showcase, and a responsive checkout flow. The platform combines beautiful presentation with seamless shopping experience.',
      image: '/logos/nuzi-logo2.png',
      client: 'Nuzi Fashion Brand',
      results: ['120% Sales Increase', '2.8x Conversion Rate', '91% Customer Retention']
    }
  ];

  return (
    <main className="min-h-screen bg-white max-w-screen-xl mx-auto">
      <Header />

      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="flex flex-col gap-6 text-center">
              <p className="font-medium text-black">4+ Industries Served</p>
              <h2 className="text-4xl font-medium md:text-5xl">
                Projects We Built
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                A quick look at the websites we designed and developed for businesses in different industries.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4">
          <div className="mt-20">
            {projects.map((project, index) => (
              <Reveal key={project.id} delayMs={index * 200}>
                <div className="grid gap-16 lg:grid-cols-3 xl:gap-24">
                  <div className="lg:col-span-2 lg:border-r lg:pr-16 xl:pr-24">
                    <div className="flex h-full flex-col justify-start gap-6">
                      <div>
                        <h3 className="text-2xl font-semibold mb-3 hover:text-gray-800 transition-colors cursor-pointer">
                          <Link href={`/portfolio/${project.id}`}>
                            {project.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-6 mb-6">
                          <div className="flex flex-col gap-1">
                            <p className="text-lg font-semibold text-black">
                              {project.client}
                            </p>
                            <p className="text-gray-500">Client</p>
                          </div>
                        </div>

                        {/* Logo positioned between client text and button */}
                        <Link href={`/portfolio/${project.id}`} className="block mb-6">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="h-10 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                          />
                        </Link>
                      </div>
                      <Link href={`/portfolio/${project.id}`}>
                        <Button className="bg-[#B9FF66] text-black text-sm font-bold shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:bg-[#A5E854] hover:-translate-y-0.5 transition duration-200 hover:cursor-pointer">
                          View Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="flex gap-10 self-center lg:flex-col">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <p className="text-4xl font-medium text-[#B9FF66]">
                          {result.split(' ')[0]}
                        </p>
                        <p className="font-semibold text-gray-900">
                          {result.split(' ').slice(1).join(' ')}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {i === 0 ? 'Business Growth' : i === 1 ? 'Performance' : 'Client Satisfaction'}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {index < projects.length - 1 && <div className="border-gray-200 my-20 border-t" />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
