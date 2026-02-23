# Mohamed Saber Portfolio

Personal portfolio website built with Next.js, React, and TypeScript.

## Overview

This project is a modern, responsive portfolio for Mohamed Saber, featuring:

- Hero/About sections
- Tech stack and skills showcase
- Projects gallery
- Contact form with email delivery via Resend
- Dark theme support

## 🚀 Live Demo

[https://my-public-portfolio-theta.vercel.app/](https://my-public-portfolio-theta.vercel.app/)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- next-themes
- shadcn/ui + Radix UI
- Resend (contact form email sending)

## Project Structure

- `app/` - App Router pages, layout, metadata
- `components/` - UI and page sections
- `actions/` - Server actions
- `lib/` - Shared utilities (email sending, helpers)
- `public/` - Images, resume, and static assets

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add:

```env
RESEND_API_KEY=your_resend_api_key
```

### 3. Run in development

```bash
npm run dev
```

App will be available at `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run build` - Build for production
- `npm run start` - Run production build
- `npm run lint` - Run lint checks

## Contact Form

The contact form uses a server action (`actions/contact.ts`) and Resend integration (`lib/email.ts`) to send messages.

Required variable:

- `RESEND_API_KEY`

## Deployment

This app can be deployed to platforms like Vercel.

Basic flow:

1. Push to GitHub
2. Import repository in your hosting platform
3. Add `RESEND_API_KEY` in environment settings
4. Deploy

## Security Note

If secrets were ever committed to `.env`, rotate them immediately and keep `.env` out of version control.
