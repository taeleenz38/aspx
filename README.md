# ASPX Group Website

A modern, responsive website for ASPX Group, a creative collective based in New York City. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring smooth animations and interactive components.

## About ASPX Group

ASPX Group is a creative collective that works across mediums — from design and film to digital strategy — to build meaningful, culture-forward experiences. Our goal is simple: create work that connects, resonates, and lasts.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: 
  - Carousel components for projects and people
  - Particle animations
  - Hamburger navigation menu
  - Category filtering system
- **Modern UI**: Clean, minimalist design with Tailwind CSS
- **Performance Optimized**: Built with Next.js 15 for optimal performance
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: 
  - Radix UI
  - Lucide React (icons)
  - React Icons
- **Carousel**: Embla Carousel React
- **Particles**: TSParticles
- **Font**: Work Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aspx
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
aspx/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   ├── people/               # People API
│   │   └── projects/             # Projects API
│   ├── components/               # Reusable components
│   │   ├── animations/           # Animation components
│   │   ├── layout/               # Layout components
│   │   │   ├── work/             # Work page sections
│   │   │   └── Navbar.tsx        # Navigation component
│   │   └── ui/                   # UI components
│   ├── contact/                  # Contact page
│   ├── ethos/                    # Ethos page with sections
│   ├── people/                   # People page
│   ├── submit/                   # Submit page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                    # Shared components
├── hooks/                        # Custom React hooks
├── lib/                          # Utility functions
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## Pages

- **Home** (`/`) - Main landing page showcasing work sections
- **About** (`/about`) - Company overview and mission
- **People** (`/people`) - Team members with filtering capabilities
- **Ethos** (`/ethos`) - Company values and philosophy (8 sections)
- **Contact** (`/contact`) - Contact information
- **Submit** (`/submit`) - Submission page (in development)

## Key Components

### Navigation
- Responsive navbar with logo and navigation links
- Hamburger menu for mobile devices
- Active page highlighting

### Work Sections
- Three main sections showcasing different aspects of work
- Interactive elements and animations

### People Section
- Team member carousel
- Category filtering sidebar
- Responsive grid layout

### Ethos Sections
- Eight distinct sections covering company values
- Snap scrolling for smooth navigation
- Rich visual content

## Styling

The project uses Tailwind CSS v4 with:
- Custom color palette
- Responsive design utilities
- Custom animations and transitions
- Work Sans font family

## Development

### Code Style
- TypeScript for type safety
- ESLint for code quality
- Consistent component structure
- Responsive design patterns

### Performance
- Next.js 15 optimizations
- Image optimization with Next.js Image component
- Lazy loading for better performance
- Optimized animations

## Contact

- **Email**: contact@aspxgroup.com
- **Phone**: +1 (212) 555-7890
- **Address**: 45 Howard St, New York, NY 10013

## License

This project is private and proprietary to ASPX Group.

---

Built with ❤️ by ASPX Group
