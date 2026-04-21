# 🚀 Studio - Digital Agency Landing Page

A modern, mobile-first Next.js landing page built with Tailwind CSS, designed for digital agencies and studios.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## ✨ Features

- 📱💻 **Fully Responsive** - Mobile-first design that scales beautifully to desktop (375px - 1920px+)
- 🎨 **Modern UI** - Clean, professional design with lime green accents
- 🧩 **Modular Components** - Reusable, well-organized component structure
- ⚡ **Performance** - Built with Next.js 15 and optimized for speed
- 🎯 **SEO Ready** - Semantic HTML and proper heading hierarchy
- 💅 **Tailwind CSS** - Utility-first styling with inline classes only
- 🔧 **TypeScript** - Type-safe code throughout
- 🎭 **Smooth Animations** - Modern mobile menu with staggered animations
- 🖥️ **Desktop Navigation** - Horizontal nav with CTA button

## 📄 Pages

- **Home** (`/`) - Complete landing page with all sections
- **About** (`/about`) - Dedicated About Us page

## 🧩 Sections Included

1. **Header** - Sticky navigation with logo and menu
2. **Hero** - Eye-catching hero with CTAs and stats
3. **Services** - Service offerings showcase
4. **Process** - 4-step workflow timeline
5. **Testimonials** - Client reviews with ratings
6. **Work** - Portfolio/case studies
7. **FAQ** - Interactive accordion
8. **Contact** - Contact form with CTA
9. **Footer** - Links and social media

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📚 Documentation

📖 **[View Complete Documentation Index](./DOCS_INDEX.md)**

Quick links:
- **[QUICKSTART.md](./QUICKSTART.md)** - Getting started and customization
- **[RESPONSIVE_DESIGN.md](./RESPONSIVE_DESIGN.md)** - Responsive design guide ⭐ NEW
- **[MOBILE_MENU.md](./MOBILE_MENU.md)** - Mobile menu documentation ⭐ NEW
- **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** - Project architecture
- **[COMPONENTS_GUIDE.md](./COMPONENTS_GUIDE.md)** - Component documentation
- **[COMPONENT_TREE.md](./COMPONENT_TREE.md)** - Visual component hierarchy
- **[DESIGN_TOKENS.md](./DESIGN_TOKENS.md)** - Design system and tokens
- **[BUILD_SUMMARY.md](./BUILD_SUMMARY.md)** - Complete build overview
- **[CHECKLIST.md](./CHECKLIST.md)** - Feature completion checklist

## 🎨 Design System

### Colors
- Primary: `#B9FF66` (Lime green)
- Background: White & Gray-50
- Text: Black, Gray-600

### Components
All components use:
- Inline Tailwind CSS classes
- Props and `.map()` for reusability
- TypeScript for type safety

## 📁 Project Structure

```
dev-agency/
├── app/
│   ├── page.tsx              # Home page
│   └── about/page.tsx        # About page
├── components/
│   ├── layout/
│   │   ├── Container.tsx     # Layout wrapper
│   │   └── Section.tsx       # Section wrapper
│   └── sections/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Process.tsx
│       ├── Testimonials.tsx
│       ├── Work.tsx
│       ├── FAQ.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── lib/
    └── data.ts               # Content configuration
```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## 🎯 Next Steps

- [x] Add desktop responsive breakpoints ✅
- [x] Implement mobile menu ✅
- [ ] Add form validation
- [ ] Integrate real images
- [ ] Add scroll animations
- [ ] Connect contact form to backend

## 📝 License

This project is open source and available under the MIT License.

---

Built with ❤️ using Next.js and Tailwind CSS
