# JKKN College of Pharmacy Website

This is the official website for JKKN College of Pharmacy, built with Next.js.

## Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build

Create a production build:

```bash
npm run build
```

### Start Production Server

After building, start the production server:

```bash
npm start
```

## Deployment on Vercel

### Deploy to Vercel

1. Install Vercel CLI (optional):
```bash
npm install -g vercel
```

2. Deploy using Vercel CLI:
```bash
vercel
```

Or deploy directly from GitHub:

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

Your site will be live on Vercel with automatic deployments on every push to your main branch.

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.js       # Header/Navbar component
│   └── Header.module.css # Header styles
├── public/             # Static files
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies
```

## Features

- Responsive header/navbar design
- Mobile-friendly menu
- Dropdown navigation items
- Search functionality
- Optimized for performance with Next.js

## Technologies Used

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel (deployment)
