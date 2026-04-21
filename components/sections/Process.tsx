import React from 'react';
import { Phone, Users, Palette, MessageSquare, Code, Rocket, Wrench } from 'lucide-react';
import Container from '../layout/Container';
import Section from '../layout/Section';

interface ProcessStep {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Process() {
  const steps: ProcessStep[] = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: 'Discovery Call',
      description: 'We learn about your goals, audience, and vision.',
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: 'Business Deep Dive',
      description: 'Understand your brand, tone, and what makes you unique.',
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: 'Design Phase',
      description: 'We build wireframes and designs tailored to your brand.',
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: 'Feedback Rounds',
      description: 'You review, we refine, and finalize the design.',
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: 'Development',
      description: 'We turn your approved designs into a responsive, functional site.',
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: 'Delivery & Invoice',
      description: 'Your new site goes live.',
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: 'Maintenance Plan',
      description: 'Keep your site updated and secure with optional monthly support.',
    }
  ];

  return (
    <Section className="py-24 bg-white" id="process">
      <Container>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-6 lg:gap-20">
          {/* Left Column - Header */}
          <div className="top-10 col-span-2 h-fit w-fit gap-3 space-y-7 py-8 lg:sticky">
            <div className="relative w-fit text-5xl font-semibold tracking-tight lg:text-7xl">
              <h2 className="w-fit text-black">Your Website Journey, Simplified</h2>
              
            </div>
            <p className="text-gray-600 text-base">
              We keep things easy, clear, and collaborative from start to finish.
            </p>
          </div>

          {/* Right Column - Steps */}
          <ul className="relative col-span-4 w-full lg:pl-22">
            {steps.map((step, index) => (
              <li
                key={index}
                className="relative flex flex-col justify-between gap-10 border-t border-gray-200 py-8 md:flex-row lg:py-10"
              >
                {/* Step Number/Icon */}
                <div className=" flex size-12 items-center justify-center px-4 py-1 text-black font-bold">
                  {step.icon}
                </div>

                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-black lg:text-3xl">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                {/* Corner decoration */}
                <div className="absolute right-0 top-4">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="0.607422"
                      y1="2.57422"
                      x2="21.5762"
                      y2="2.57422"
                      stroke="#B9FF66"
                      strokeWidth="4"
                    />
                    <line
                      x1="19.5762"
                      y1="19.624"
                      x2="19.5762"
                      y2="4.57422"
                      stroke="#B9FF66"
                      strokeWidth="4"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
