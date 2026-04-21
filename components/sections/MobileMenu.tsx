'use client';

import React from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ];

  const socials = [
    { name: 'Twitter', url: '#' },
    { name: 'LinkedIn', url: '#' },
    { name: 'Instagram', url: '#' },
    { name: 'Dribbble', url: '#' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <span className="text-lg font-semibold">Studio</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors hover:cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto py-8 px-6">
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className="transform transition-all duration-300 ease-out"
                  style={{
                    transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 px-4 text-lg font-medium text-gray-900 hover:bg-gray-50 hover:text-black rounded-xl transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              className="mt-8 transform transition-all duration-300 ease-out"
              style={{
                transitionDelay: isOpen ? `${navLinks.length * 50}ms` : '0ms',
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
              }}
            >
              <Link
                href="#contact"
                onClick={onClose}
                className="block w-full bg-black text-white text-center py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors hover:cursor-pointer"
              >
                Start Your Project
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-100">
            {/* Social Links */}
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-3">Follow us</p>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium hover:bg-[#A5E854] transition-all duration-300 ease-out"
                    style={{
                      transitionDelay: isOpen ? `${(navLinks.length + 1 + index) * 50}ms` : '0ms',
                      opacity: isOpen ? 1 : 0,
                      transform: isOpen ? 'scale(1)' : 'scale(0.8)',
                    }}
                    aria-label={social.name}
                  >
                    {social.name[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-xs text-gray-500">
              <a href="mailto:hello@studio.com" className="block hover:text-black transition-colors">
                hello@studio.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
