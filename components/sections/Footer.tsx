"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../layout/Container';
import { openCalendly } from '@/lib/calendly';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-black transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-black transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-black transition-colors">Our Work</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
              </li>
              <li>
                <button onClick={openCalendly} className="hover:text-black transition-colors cursor-pointer">Book a Call</button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-sm text-gray-600 mb-2">Email</p>
            <a
              href="mailto:hello@fortypixels.com"
              className="text-sm text-gray-900 hover:text-black underline-offset-4 hover:underline block mb-6"
            >
              hello@fortypixels.com
            </a>

            <h3 className="text-sm font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/fortypixelshq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Stay Updated With Forty Pixels</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get design tips, website advice, and updates sent straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#B9FF66] focus:border-transparent"
              />
              <button
                type="submit"
                className="whitespace-nowrap px-4 py-2 rounded-md bg-[#B9FF66] text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">
              No spam. Only useful content for founders and businesses.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 text-center md:text-left pt-6 border-t border-gray-100 flex flex-col items-center md:items-start gap-3">
          <Image src="/logo2.png" alt="Forty Pixels Logo" width={120} height={32} className="h-8 w-auto" />
          &copy; 2026 Forty Pixels. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
