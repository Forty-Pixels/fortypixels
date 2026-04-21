import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { About3 } from '@/components/about3';
import { Button } from '@/components/ui/button';
import { DollarSign, Palette, ClipboardList, Zap, RefreshCw, Globe } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us - Our Mission & Values",
  description: "Forty Pixels is a modern web design studio helping startups and small businesses build professional websites. Learn about our mission, process, and team.",
  alternates: {
    canonical: "https://fortypixels.com/about"
  }
};

export default function AboutPage() {
  const companies = [
    {
      src: "/logos/oyo-eats-logo.png",
      alt: "Oyo Eats",
    },
    {
      src: "/logos/taanz-logo1.png",
      alt: "Taanz",
    },
    {
      src: "/logos/nuzi-logo2.png",
      alt: "Nuzi",
    },
  ];

  return (
    <main className="min-h-screen bg-white mx-auto max-w-screen-xl">
      <Header />

      {/* About Section using About3 component */}
      <About3
        title="We Build Websites That Help Your Business Look Sharp"
        description="Forty Pixels is a modern web design and development studio that creates clean, responsive, and value-driven websites for startups, new businesses, and growing brands."
        mainImage={{
          src: "/images/about-secondary.png",
          alt: "Abstract collaboration visualization",
        }}
        secondaryImage={{
          src: "/images/about-main.png",
          alt: "Minimalistic modern workspace",
        }}
        breakout={{
          src: "/40Approved-03.png",
          alt: "Abstract symbol of innovation",
          title: "Small Team, Big Results",
          description: "We have built sites for businesses in food delivery, travel, accounting, software, and ecommerce. No matter the industry, we create clean and functional sites that help brands look professional.",
          buttonText: "Book a Free Discovery Call",
          buttonUrl: "#contact",
        }}
        companiesTitle="Empowering brands we believe in"
        companies={companies}
        achievementsTitle="Let's Build Your New Website"
        achievementsDescription="Great design should be simple. Websites should load fast and work on all devices. Founders deserve a stress-free process. Quality does not need to be expensive."
        achievements={[
          { label: "Affordable Packages", value: "✓" },
          { label: "Minimal Design Style", value: "✓" },
          { label: "Clear Simple Process", value: "✓" },
          { label: "Fast Delivery", value: "✓" },
        ]}
      />

      {/* Additional Content Sections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-xl mx-auto">
            {/* Who We Are */}
            <div className="mb-24">
              <Reveal>
                <div className="text-start mb-4">
                  <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
                  <div className="space-y-4 max-w-screen-xl">
                    <Reveal delayMs={50}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We are Forty Pixels, a modern web design and development studio built for founders, small businesses, and growing brands. Our focus is simple: create clean, minimal, and responsive websites that help businesses look professional and feel confident online.
                      </p>
                    </Reveal>
                    <Reveal delayMs={100}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Many of our clients come to us with the same problem. Their current website looks outdated, feels cluttered, or does not match who they are as a brand. Others are just getting started and need a site that sets the right tone from day one. We help both by making the entire process easy, predictable, and friendly.
                      </p>
                    </Reveal>
                    <Reveal delayMs={150}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We are a small team, which means you get direct communication, quick responses, and a smooth workflow that larger agencies cannot match. No complicated steps. No confusing design language. Just a clear path from idea to final website.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Our Mission */}
            <div className="mb-24">
              <Reveal delayMs={200}>
                <div className="mb-4">
                  <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                  <div className="space-y-4 max-w-screen-xl">
                    <Reveal delayMs={250}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Our mission is to help new and growing businesses build a strong online presence without the usual complexity or high costs. Most founders and small teams struggle with websites because the process feels confusing, slow, or unnecessarily expensive.
                      </p>
                    </Reveal>
                    <Reveal delayMs={300}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        We fix that by offering clean design, fast delivery, and a workflow that feels easy from start to finish. We want every business, no matter the size or industry, to have access to a modern and professional website that builds trust, attracts customers, and supports long term growth.
                      </p>
                    </Reveal>
                    <Reveal delayMs={350}>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Good design should be simple. Good websites should be accessible. Our mission is to make both possible for anyone ready to level up their brand.
                      </p>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="py-4 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-screen-xl mx-auto">
            <div className="mb-24">
              <Reveal delayMs={400}>
                <div className="text-start mb-12">
                  <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                  <p className="text-gray-600 text-lg max-w-4xl">
                    These principles guide everything we create. They're not just beliefs - they're the foundation of how we work with every client.
                  </p>
                </div>
              </Reveal>

              <Reveal delayMs={450}>
                <div className="max-w-screen-xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Reveal delayMs={500} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <Palette className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Effortless Design</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe good design should feel effortless. A website should not confuse people. It should guide them, support their goals, and make a strong first impression.
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delayMs={550} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <Zap className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Speed Matters</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe speed matters. Fast delivery and fast loading times help businesses move quicker and get results sooner.
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delayMs={600} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <ClipboardList className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Clear Communication</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe great work comes from clear communication. When both sides understand the goal, the process becomes smooth and predictable.
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delayMs={650} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <RefreshCw className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Every Device</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe websites should work for every device. Mobile. Tablet. Desktop. No exceptions.
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delayMs={700} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <DollarSign className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Accessible Quality</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe great design should be accessible to everyone. Our streamlined process delivers premium results efficiently — no bloat, no unnecessary complexity.
                          </p>
                        </div>
                      </div>
                    </Reveal>

                    <Reveal delayMs={750} className="h-full">
                      <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300">
                        <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                          <Globe className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-gray-900">Long Term Support</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            We believe in long term support. A website is not just a one time project. It grows with the business, and we are here to help it grow the right way.
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </div>
                </div>
              </Reveal>
            </div>


            {/* Final CTA */}
            <Reveal delayMs={850}>
              <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 mx-4 md:mx-0 text-white text-center overflow-hidden">
                <div className="absolute inset-0 bg-[#B9FF66]/5"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4">Let's Build Your New Website</h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Ready to start your project? Get in touch and let's make something great.
                  </p>
                  <Button className="bg-[#B9FF66] text-black hover:bg-[#A5E854] hover:cursor-pointer px-8 py-4 text-lg font-semibold">
                    Book a Free Discovery Call
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
