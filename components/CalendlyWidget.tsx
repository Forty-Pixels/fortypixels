'use client';

import Script from 'next/script';

export default function CalendlyWidget() {
  return (
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      strategy="lazyOnload"
    />
  );
}

