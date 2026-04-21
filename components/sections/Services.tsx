import React from 'react';
import { Rocket, Building2, ShoppingCart, Layers } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  bestFor: string;
  positioning: string;
  items: string[];
  delivery: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 'launch-page',
      icon: <Rocket className="w-5 h-5" />,
      title: 'Launch Page',
      bestFor: 'New businesses, founders, single-offer products',
      positioning: 'A focused one-page site to launch fast and look legit.',
      items: [
        'Single, high-impact page',
        'Clear structure + conversion flow',
        'SEO-ready content',
        'Contact / inquiry setup',
        'Hosted + deployed'
      ],
      delivery: '~1 week',
    },
    {
      id: 'brand-website',
      icon: <Building2 className="w-5 h-5" />,
      title: 'Brand Website',
      bestFor: 'Growing businesses, service brands, local companies',
      positioning: 'A clean, structured website that builds trust.',
      items: [
        'Multi-page site (core pages)',
        'Design system (type, spacing, components)',
        'SEO-driven content writing',
        'Mobile + performance polish',
        'Hosting + SSL'
      ],
      delivery: '~2 weeks',
    },
    {
      id: 'commerce-lite',
      icon: <ShoppingCart className="w-5 h-5" />,
      title: 'Commerce Lite',
      bestFor: 'Small stores, home businesses, first-time sellers',
      positioning: "A simple store that's easy to manage and easy to use.",
      items: [
        'Product-based site (small catalog)',
        'CMS for products & content',
        'Cart + checkout flow',
        'SEO setup',
        'Hosted & deployed'
      ],
      delivery: '~2–3 weeks',
    },
    {
      id: 'scalable-build',
      icon: <Layers className="w-5 h-5" />,
      title: 'Scalable Build',
      bestFor: 'Startups, platforms, serious businesses',
      positioning: 'A flexible website or web app built to grow with you.',
      items: [
        'Custom structure (pages or app screens)',
        'Advanced CMS / integrations',
        'Design-first UI system',
        'SEO + performance optimization',
        'Optional maintenance'
      ],
      delivery: 'Varies (planned per project)',
    }
  ];

  return (
    <Section className="py-24 bg-white" id="services">
      <Container>
        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Website Packages Built for Real Businesses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clear scope. Honest timelines. Every package designed to help you launch and grow.
          </p>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Reveal key={service.id} delayMs={index * 100}>
              <div className="h-full flex flex-col p-6 rounded-2xl border border-gray-100 transition-all duration-300 hover:shadow-md">
                {/* Header with Icon and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="text-gray-600">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1 text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-500">Best for: {service.bestFor}</p>
                  </div>
                </div>

                {/* Positioning Line */}
                <p className="text-gray-600 text-base leading-relaxed mb-5">
                  {service.positioning}
                </p>

                {/* Includes List */}
                <div className="space-y-2.5 mb-5 flex-grow">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Includes</p>
                  {service.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-3">
                      <div className="bg-[#B9FF66] h-1.5 w-1.5 rounded-full flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Delivery */}
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-900">Delivery: {service.delivery}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
