import React from 'react';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Work from '@/components/sections/Work';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';


import { Metadata } from 'next';
import { OrganizationSchema } from '@/components/seo/schema';

export const metadata: Metadata = {
  description: "Forty Pixels provides value-driven, premium web design for startups and founders. Get a stunning, responsive website without the agency markup.",
  alternates: {
    canonical: "https://fortypixels.com"
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <OrganizationSchema />
      <Header />
      <Hero />
      <Services />
      <Process />
      <Testimonials />
      <Work />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}