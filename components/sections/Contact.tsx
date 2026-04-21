import React from 'react';
import Container from '../layout/Container';
import Section from '../layout/Section';
import Reveal from '../ui/Reveal';
import { Contact7 } from '../contact7';

export default function Contact() {
  return (
    <Section className='max-w-screen-xl mx-auto min-h-screen justify-center pt-0'>
        {/* Direct Contact */}
        <Contact7
          title="Prefer to reach out directly"
          description="Email us or book a quick call and we&apos;ll get back to you with the next steps."
          emailLabel="Email"
          emailDescription="Prefer email? Reach out and we&apos;ll respond quickly."
          email="hello@fortypixels.com"
          chatLabel="Book a Call"
          chatDescription="Schedule a quick call to talk through your project."
          chatLink="Book a Call"
        />
    </Section>
  );
}
