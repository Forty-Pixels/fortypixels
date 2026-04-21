import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import CalendlyWidget from "@/components/CalendlyWidget";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fortypixels.com'),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Forty Pixels | Premium web design & development agency",
    template: "%s | Forty Pixels"
  },
  description: "Premium web design and development for ambitious brands. We build clean, responsive websites that help your business look sharp and convert better.",
  keywords: ["web design agency", "value-driven web design", "startup website", "responsive web development", "small business website"],
  authors: [{ name: "Forty Pixels" }],
  creator: "Forty Pixels",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Forty Pixels",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Forty Pixels - Web Design Agency" }]
  },
  twitter: {
    card: "summary_large_image",
    creator: "@fortypixels"
  },
  robots: {
    index: true,
    follow: true
  },
  verification: {
    google: 'W3IX3VR2MKk5WGa4NApU13CQvi_eQl0l_cfkzoA420Q',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}

