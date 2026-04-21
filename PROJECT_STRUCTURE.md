# Dev Agency Landing Page

A modern, mobile-first Next.js landing page built with Tailwind CSS.

## 🏗️ Project Structure

```
dev-agency/
├── app/
│   ├── page.tsx              # Main landing page
│   └── about/
│       └── page.tsx          # About Us page
├── components/
│   ├── layout/
│   │   ├── Container.tsx     # Reusable container wrapper (max-width: 375px mobile)
│   │   └── Section.tsx       # Reusable section wrapper with background options
│   └── sections/
│       ├── Header.tsx        # Navigation header with logo and menu
│       ├── Hero.tsx          # Hero section with CTA, stats, and trusted companies
│       ├── Services.tsx      # Services grid with icons and descriptions
│       ├── Process.tsx       # 4-step process timeline
│       ├── Testimonials.tsx  # Client testimonials with ratings
│       ├── Work.tsx          # Portfolio/case studies showcase
│       ├── FAQ.tsx           # Accordion-style FAQ section
│       ├── Contact.tsx       # Contact form with CTA
│       └── Footer.tsx        # Footer with links and social icons
```

## 🎨 Design System

### Colors
- **Primary Accent**: `#B9FF66` (Lime green)
- **Background**: White & Gray-50
- **Text**: Black, Gray-600, Gray-900

### Typography
- **Headings**: Bold, 2xl-4xl
- **Body**: Regular, sm-base
- **Line Height**: Relaxed for readability

### Spacing
- **Container Padding**: 24px (px-6)
- **Section Padding**: 48px vertical (py-12)
- **Component Gaps**: 12-24px

## 📱 Mobile-First Approach

All components are built mobile-first with:
- Max width of 375px for mobile
- Inline Tailwind utility classes only
- Clean, readable code structure
- Modular, reusable components

## 🧩 Component Features

### Reusable Patterns
- **Container**: Consistent max-width and padding
- **Section**: Background color variants (white/gray)
- **Props & .map()**: Used throughout for data-driven rendering

### Interactive Elements
- FAQ accordion (client component)
- Hover states on buttons and cards
- Form inputs with focus states

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📄 Pages

1. **Home (/)** - Complete landing page with all sections
2. **About (/about)** - Dedicated About Us page with mission, values, and team

## 🎯 Next Steps

- Add desktop responsive breakpoints
- Implement mobile menu functionality
- Add form validation and submission
- Integrate real images for portfolio section
- Add animations and transitions
- Connect contact form to backend/email service

## 💡 Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Language**: TypeScript
