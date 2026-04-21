import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/ui/Reveal';
import Link from 'next/link';
import { Metadata } from 'next';
import { Smartphone, LayoutDashboard, Globe, Database, Layers, Code2, ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: "Enterprise Solutions - Custom Software & Mobile Apps",
  description: "We build custom software, mobile apps, and internal tools for businesses. From design to deployment, we deliver polished, production-ready solutions.",
  alternates: {
    canonical: "https://fortypixels.com/enterprise"
  }
};

export default function EnterprisePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-black">
                Need Something <br className="hidden md:block" />
                Built From Scratch?
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                From mobile apps to internal platforms, we turn your ideas into polished, production-ready software.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="https://calendly.com/fortypixels" 
                  target="_blank"
                  className="bg-[#B9FF66] text-black px-8 py-4 rounded-xl font-medium hover:bg-[#A5E854] hover:cursor-pointer transition-colors text-base"
                >
                  Book a Free Discovery Call
                </Link>
                <Link 
                  href="#process"
                  className="bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 hover:cursor-pointer transition-colors text-base"
                >
                  See How We Work
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">What We Build</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether it's a client portal, an admin dashboard, a mobile app, or a tool your team uses every day. We design and build it.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Smartphone className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "Mobile Apps",
                desc: "Native iOS and Android applications built with React Native. Smooth performance, offline capabilities, and perfect UX."
              },
              {
                icon: <LayoutDashboard className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "Dashboards & Panels",
                desc: "Admin panels and data visualization tools that help you manage your business, track metrics, and make better decisions."
              },
              {
                icon: <Globe className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "Client Portals",
                desc: "Secure portals for your customers to log in, view data, make bookings, or manage their accounts."
              },
              {
                icon: <Layers className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "SaaS Platforms",
                desc: "Multi-tenant applications with subscription management, user roles, and scalable architecture."
              },
              {
                icon: <Database className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "Internal Tools",
                desc: "Custom workflow automation tools that replace spreadsheets and manual processes for your team."
              },
              {
                icon: <Code2 className="w-5 h-5 text-gray-600 group-hover:text-[#B9FF66] transition-colors" />,
                title: "API Integrations",
                desc: "Connect your existing systems. We build and integrate APIs to unify your data and automate workflows."
              }
            ].map((item, i) => (
              <Reveal key={i} delayMs={i * 100} className="h-full">
                <div className="h-full group flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:border-[#B9FF66]/30 transition-all duration-300 bg-white">
                  <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center group-hover:border-[#B9FF66] transition-colors flex-shrink-0 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section id="process" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Work</h2>
              <p className="text-xl text-gray-600">
                Transparent, collaborative, and focused on shipping.
              </p>
            </div>
          </Reveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  desc: "We dive deep into your goals, user needs, and technical constraints. No code is written until we understand exactly what we're solving."
                },
                {
                  step: "02",
                  title: "Design",
                  desc: "We create interactive prototypes you can click through. You'll see exactly how the app looks and feels before development begins."
                },
                {
                  step: "03",
                  title: "Build",
                  desc: "We develop in sprints, giving you regular updates and demos. You're never in the dark about progress."
                },
                {
                  step: "04",
                  title: "Launch",
                  desc: "We handle deployment, testing, and handoff. We ensure everything runs smoothly and provide documentation for your team."
                }
              ].map((phase, i) => (
                <Reveal key={i} delayMs={i * 100}>
                  <div className="group">
                    <div className="text-5xl font-bold text-[#B9FF66] mb-6">
                      {phase.step}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {phase.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Enterprise Section (formerly What You Get) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Enterprise Quality.<br />
                  Agency Speed.
                </h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We bring the same design-first approach to software that we do to websites. No clunky admin panels or confusing interfaces. Just clean, powerful software that your team will actually enjoy using.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
                <ul className="space-y-6">
                  {[
                    "Clean, minimal interfaces (our signature style)",
                    "Full source code ownership",
                    "Scalable architecture ready for growth",
                    "Comprehensive documentation",
                    "Ongoing support & maintenance options",
                    "Mobile-first responsive design"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-[#B9FF66]" />
                      </div>
                      <span className="text-lg font-medium text-gray-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="relative bg-gradient-to-r from-gray-900 to-black rounded-3xl p-12 mx-auto text-white text-center overflow-hidden max-w-5xl">
              <div className="absolute inset-0 bg-[#B9FF66]/5"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Let's Build Your Custom Solution</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                  Ready to turn your idea into reality? Get in touch and let's discuss your project.
                </p>
                <Link 
                  href="https://calendly.com/fortypixels" 
                  target="_blank"
                  className="inline-block bg-[#B9FF66] text-black hover:bg-[#A5E854] hover:cursor-pointer px-8 py-4 text-lg font-semibold rounded-xl transition-colors"
                >
                  Book a Free Discovery Call
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
