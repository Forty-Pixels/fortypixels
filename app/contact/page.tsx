import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Contact from '@/components/sections/Contact';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get in Touch - Book a Free Discovery Call",
  description: "Contact Forty Pixels today. Book a free discovery call or email us to start building your premium startup website. We respond within 24 hours.",
  alternates: {
    canonical: "https://fortypixels.com/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
