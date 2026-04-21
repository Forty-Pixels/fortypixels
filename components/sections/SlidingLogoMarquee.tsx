import React from "react";
import SlidingLogoMarquee from "../lightswind/sliding-logo-marquee";

const companies = [
    'Stripe', 'Notion', 'Linear',
    'Vercel', 'Figma', 'Webflow'
  ];

export const SlidingLogoMarqueeSection = () => {
    return (
        <div className="text-center w-full mx-auto">
            <SlidingLogoMarquee
              items={companies.map((c, i) => ({
                id: `${c}-${i}`,
                content: <div className="text-lg font-medium text-gray-400">{c}</div>,
              }))}
              height="80px"
              gap="2rem"
              speed={15}
              showControls={false}
            />
          </div>
    )
}