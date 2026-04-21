'use client';

import React, { useState } from 'react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from '@/src/components/ui/resizable-navbar';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const items = [
    
    { name: 'Services', link: '/#services' },
    { name: 'Enterprise', link: '/enterprise' },
    { name: 'Portfolio', link: '/portfolio' },
    { name: 'About', link: '/about' },
    
  ];

  return (
    <>
      <Navbar className='mb-20'>
        <NavBody>
          <div className="flex items-center gap-2">
            <NavbarLogo /> 
          </div>
          <NavItems items={items} />
          <div className="relative z-20 flex items-center gap-2 ">
            <NavbarButton href="/contact" variant="primary" className='bg-[#B9FF66]'>
             Launch Your Brand
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen((v) => !v)} />
          </MobileNavHeader>
          <MobileNavMenu isOpen={isOpen}>
            {items.map((item) => (
              <a
                key={item.link}
                href={item.link}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md px-3 py-2 text-left text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 w-full">
              <NavbarButton href="/contact" className="w-full bg-[#B9FF66]" variant="primary">
                Launch Your Project
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </>
  );
}
