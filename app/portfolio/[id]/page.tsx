import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Button } from '@/components/ui/button';
import { MoveUpRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Project data
const projects = {
  oyoeats: {
    title: 'oyoeats.lk',
    subtitle: 'Food Delivery Platform',
    description: 'A custom delivery platform built with clean UI, fast load times, and a smooth ordering experience.',
    longDescription: 'We created OyoEats.lk as a comprehensive food delivery platform that connects local restaurants with hungry customers. The platform features real-time order tracking, multiple payment options, and an intuitive admin dashboard for restaurant owners.',
    heroImage: '/logos/oyo-eats-logo.png',
    gridImages: [
      '/website-images/oyo-eats/oyo-eats-image-1.png',
      '/website-images/oyo-eats/oyo-eats-image-2.png'
    ],
    gridImages2: [
      '/website-images/oyo-eats/oyo-eats-image-3.png',
      '/website-images/oyo-eats/oyo-eats-image-4.png'
    ],
    projectDetails: [
      { label: 'Client', value: 'Local Restaurant Chain' },
      { label: 'Focus', value: 'Food Delivery Platform' },
      { label: 'Year', value: '2024' },
      { label: 'Technologies', value: 'React, Node.js, MongoDB, Stripe' }
    ],
    features: [
      'Real-time order tracking',
      'Multiple payment integration',
      'Restaurant admin dashboard',
      'Customer review system',
      'Mobile-responsive design',
      'SEO optimization'
    ]
  },

  taanzoutsourcing: {
    title: 'taanzoutsourcing.com',
    subtitle: 'Professional Services Website',
    description: 'A clean and professional site for an accounting service company that needed trust and credibility.',
    longDescription: 'TaanzOutsourcing.com was built to convey professionalism and trust in the accounting services industry. The clean design emphasizes credibility, expertise, and the comprehensive range of financial services offered.',
    heroImage: '/logos/taanz-logo1.png',
    gridImages: [
      '/website-images/taanz-outsourcing/taanz-outsourcing-image-1.png',
      '/website-images/taanz-outsourcing/taanz-outsourcing-image-2.png'
    ],
    gridImages2: [
      '/website-images/taanz-outsourcing/taanz-outsourcing-image-3.png',
      '/website-images/taanz-outsourcing/taanz-outsourcing-image-4.png'
    ],
    projectDetails: [
      { label: 'Client', value: 'Taanz Outsourcing' },
      { label: 'Focus', value: 'Accounting Services' },
      { label: 'Year', value: '2024' },
      { label: 'Technologies', value: 'WordPress, Custom PHP, MySQL' }
    ],
    features: [
      'Service showcase',
      'Client testimonials',
      'Contact forms',
      'Document upload system',
      'Secure client portal',
      'Professional design'
    ]
  },
  nuzi: {
    title: 'nuzii.co',
    subtitle: 'E-commerce Store',
    description: 'A modern ecommerce store with a sleek layout, product showcase, and a responsive checkout flow.',
    longDescription: 'Nuzii.co is a modern ecommerce platform that combines beautiful product presentation with a seamless shopping experience. The site features advanced filtering, wishlist functionality, and a streamlined checkout process.',
    heroImage: '/logos/nuzi-logo2.png',
    gridImages: [
      '/website-images/nuzi/nuzi-image-1.png',
      '/website-images/nuzi/nuzi-image-2.png'
    ],
    gridImages2: [
      '/website-images/nuzi/nuzi-image-3.png',
      '/website-images/nuzi/nuzi-image-4.png'
    ],
    projectDetails: [
      { label: 'Client', value: 'Nuzi Fashion Brand' },
      { label: 'Focus', value: 'E-commerce Platform' },
      { label: 'Year', value: '2024' },
      { label: 'Technologies', value: 'Shopify, Liquid, JavaScript, React' }
    ],
    features: [
      'Product catalog',
      'Advanced filtering',
      'Shopping cart',
      'Secure payments',
      'Order tracking',
      'Mobile app integration'
    ]
  }
};

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = projects[resolvedParams.id as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white max-w-screen-xl mx-auto">
      <Header />

      <section className="lg:py-32">
        <div className="container space-y-6">
          {/* Back Button */}
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B9FF66] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>

          {/* Header */}
          <header className="border-b pb-6 md:pb-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl font-bold md:text-2xl lg:text-5xl mb-2">
                  {project.title}
                </h1>
                <p className="text-[#B9FF66] font-medium">{project.subtitle}</p>
              </div>
              <p className="text-gray-600 max-w-3xl text-base font-medium leading-relaxed md:text-lg">
                {project.description}
              </p>
            </div>
          </header>

          {/* Hero Image */}
          <div className="overflow-hidden rounded-2xl border">
            <img
              src={project.heroImage}
              alt={project.title}
              className="aspect-[16/7] w-full object-contain p-8"
            />
          </div>

          {/* Project Description */}
          <div className="flex flex-col items-end justify-end">
            <div className="space-y-6 lg:w-1/2">
              <p className="text-gray-600 text-sm leading-relaxed md:text-base lg:text-lg">
                {project.longDescription}
              </p>

              <div className="space-y-4">
                {project.projectDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="flex flex-col border-b-2 py-3 text-sm sm:flex-row sm:items-center sm:justify-between md:text-base"
                  >
                    <span className="text-gray-600 text-xs font-medium uppercase tracking-wide md:text-sm">
                      {detail.label}
                    </span>
                    <span className="font-semibold">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Grid Images */}
          <div className="grid grid-cols-1 gap-6">
            {project.gridImages.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border"
              >
                <img
                  src={src}
                  alt={`${project.title} - Project view ${i + 1}`}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#B9FF66] rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Grid Images */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {project.gridImages2.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border"
              >
                <img
                  src={src}
                  alt={`${project.title} - Detail view ${i + 1}`}
                  className="aspect-video w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold mb-4">Want a Project Like This?</h3>
            <p className="text-gray-600 mb-6">Let's build something amazing together</p>
            <Button className="bg-[#B9FF66] text-black hover:bg-[#A5E854] hover:cursor-pointer px-8 py-4 text-lg font-semibold">
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
