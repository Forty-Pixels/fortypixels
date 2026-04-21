'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';

interface FAQItem {
  question: string;
  answer: string;
}

import { FAQSchema } from '../seo/schema';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long will it take to build my website?",
      answer: "Depending on the package, delivery ranges from 5 days to 6 weeks.",
    },
    {
      question: "Can you handle e-commerce sites?",
      answer: "Yes. We specialize in headless e-commerce and scalable solutions.",
    },
    {
      question: "What if I don't know what design I want?",
      answer: "No problem. We guide you through moodboards and mockups until you love the direction.",
    },
    {
      question: "Are revisions included?",
      answer: "Absolutely. We refine until your design is approved.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="py-24 bg-white" id="faq">
      <FAQSchema faqs={faqs} />
      <Container>
        {/* Section Header */}
        <Reveal className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-black">
            Questions? We&apos;ve Got You.
          </h2>
        </Reveal>

        {/* FAQ Items - larger accordion with brand colors */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={index} delayMs={index * 100}>
                <div className={`rounded-2xl border-2 transition-all duration-300 ${
                  isOpen 
                    ? 'bg-[#B9FF66] border-[#B9FF66] shadow-lg' 
                    : 'bg-white border-gray-200 hover:border-[#B9FF66] hover:shadow-md'
                }`}>
                  <button
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className={`w-full flex items-center justify-between p-6 text-left transition-colors hover:cursor-pointer ${
                      isOpen ? 'text-black' : 'text-gray-900 hover:text-black'
                    }`}
                  >
                    <span className="font-semibold text-lg pr-4">{faq.question}</span>
                    <Plus
                      className={`w-6 h-6 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-black' : 'text-gray-500'
                      }`}
                    />
                  </button>

                  {/* Animated content: max-height + opacity + translate */}
                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-out ${
                      isOpen ? 'max-h-40 opacity-100 translate-y-0 pb-6' : 'max-h-0 opacity-0 -translate-y-1'
                    }`}
                  >
                    <p className={`text-base leading-relaxed ${
                      isOpen ? 'text-gray-800' : 'text-gray-600'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
