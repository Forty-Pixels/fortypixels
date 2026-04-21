"use client";

import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";

export interface SlidingLogoMarqueeItem {
  id: string;
  content: React.ReactNode;
  href?: string;
}

export interface SlidingLogoMarqueeProps {
  items: SlidingLogoMarqueeItem[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string; // Add className prop support
  // Retaining original props to prevent breaking changes, even if unused
  enableBlur?: boolean;
  blurIntensity?: number;
  height?: string;
  width?: string;
  gap?: string;
  scale?: number;
  direction?: "horizontal" | "vertical";
  autoPlay?: boolean;
  backgroundColor?: string;
  showGridBackground?: boolean;
  onItemClick?: (item: SlidingLogoMarqueeItem) => void;
  enableSpillEffect?: boolean;
  animationSteps?: number;
  showControls?: boolean;
}

export function SlidingLogoMarquee({
  items,
  speed = 40,
  pauseOnHover = true,
  className,
  onItemClick,
  height = "100px",
  gap = "2rem",
}: SlidingLogoMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone items 3 times to create 4 sets total
      // This ensures we have enough content to fill wide screens and 
      // allows for a mathematically perfect loop with translateX(-50%)
      // (shifting by 50% of 4 sets = shifting by 2 sets, which returns to the start of the pattern)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  }

  const handleItemClick = (item: SlidingLogoMarqueeItem) => {
    if (item.href) {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
    onItemClick?.(item);
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      style={{
        // Map the speed prop to the animation duration variable expected by globals.css
        // Lower speed prop = faster (deprecated logic) vs Higher speed prop = Faster?
        // Let's assume the 'speed' prop passed in is roughly seconds for a full rotation or similar.
        // The original component had default speed=60. The hero uses speed=40.
        // Lets map it: 40s duration looks good for a gentle scroll.
        "--animation-duration": `${speed}s`,
        alignItems: 'center', // Vertically center the scroller track itself
        display: 'flex',
      } as React.CSSProperties}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          gap: gap,
          alignItems: 'center', // Vertically align items
          height: height, // Enforce height
          paddingRight: gap, // Ensure total width accounts for the last gap for perfect looping
        }}
      >
        {items.map((item) => (
          <li
            className="flex items-center justify-center flex-shrink-0"
            key={item.id}
            onClick={() => handleItemClick(item)}
          >
            {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlidingLogoMarquee;
