# Humanbrand AI – Brand OS Website

A modern, responsive website for Humanbrand AI's Brand OS platform, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Inspired by Palantir's clean, professional aesthetic
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized with Next.js 15 App Router
- **Animations**: Smooth animations powered by Framer Motion
- **Type Safety**: Full TypeScript support

## Color Scheme

- **Accent Colors**:
  - Lime Green: `#8FFF00`
  - Celtic Blue: `#3175D4`image.png
  - Jelly Bean: `#DA6E44`

- **Background Colors**:
  - Black: `#222428`
  - Off White: `#FAFAFA`
  - Chinese Silver: `#CCCCCC`
  - Charcoal Grey: `#333333`

## Pages

1. **Homepage** (`/`) - Hero section, problem statement, solution overview, and how it works
2. **Onboarding** (`/onboarding`) - Four-phase journey from chaos to command
3. **Who Benefits** (`/benefits`) - Target audience and their specific challenges
4. **What to Expect** (`/expect`) - Partnership process and expected outcomes
5. **About Us** (`/about`) - Mission, vision, approach, and core values

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Geist Sans** - Modern font family

## Project Structure

```
humanbrand-ai/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx            # Homepage
│   │   ├── onboarding/         # Onboarding page
│   │   ├── benefits/           # Benefits page
│   │   ├── expect/             # What to expect page
│   │   ├── about/              # About page
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   └── components/             # React components
│       ├── Navbar.tsx          # Navigation bar
│       ├── Footer.tsx          # Footer
│       ├── home/               # Homepage components
│       ├── onboarding/         # Onboarding components
│       ├── benefits/           # Benefits components
│       ├── expect/             # Expect components
│       └── about/              # About components
├── public/                     # Static assets
└── tailwind.config.ts          # Tailwind configuration
```

## Development

The development server runs on port 3000 by default. Hot reloading is enabled for fast development.

## License

© 2024 Humanbrand AI. All rights reserved.
