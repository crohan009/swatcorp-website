# SWAT Corp Website Redesign - PRD

## Original Problem Statement
Redesign the SWAT Corp business website (https://swatcorp.tech/) with:
- Design Style: Dark, Classy, Deep-Tech, Modern
- Multi-page site with About Us, Team, News pages
- Interactive hover cards with animations for ventures
- Contact form dialog wired to email crohan@swat-corp.com
- Particle/matrix effects in background
- Smooth scroll animations and micro-interactions
- Use existing logo at logos/swat_logo-no-background.png

## User Personas
- **Investors**: Looking for innovative ventures to fund
- **Partners**: Seeking collaboration opportunities
- **Tech Enthusiasts**: Interested in cutting-edge technology
- **Potential Collaborators**: Wanting to connect with SWAT Corp

## Core Requirements (Static)
- Multi-page React application
- FastAPI backend for contact form
- MongoDB for storing contact submissions
- Particle background effects
- Responsive design
- Dark theme with deep-tech aesthetic

## Architecture
- **Frontend**: React 18 + React Router + Framer Motion + TSParticles
- **Backend**: FastAPI + Motor (async MongoDB driver)
- **Database**: MongoDB
- **Styling**: Tailwind CSS + Custom CSS animations
- **Fonts**: Syne (headings) + Inter (body)

## What's Been Implemented ✅
### Date: 2026-03-17
- [x] Complete redesign from static HTML to React + FastAPI stack
- [x] Home page with hero, ventures section, features, CTA
- [x] About page with mission, vision, values sections
- [x] Team page with leadership cards
- [x] News page with articles and newsletter signup
- [x] Header with navigation and mobile menu
- [x] Footer with company links and social icons
- [x] Contact modal with form (name, email, message)
- [x] Particle background (TSParticles)
- [x] Venture cards with hover animations
- [x] Backend API endpoints (/api/health, /api/contact, /api/contacts)
- [x] Nginx reverse proxy for port 80
- [x] Dark theme with glassmorphism effects
- [x] Responsive design
- [x] All interactive elements have data-testid attributes

## Ventures Showcased
1. **IVY** - Intelligent Version of You (AI)
2. **Calyx** - Training gear manufacturing
3. **CalPal** - Mobile calisthenics app
4. **TouchBase** - Personal cognitive assistant (Coming Soon)

## Prioritized Backlog

### P0 (Critical)
- [x] ~~Preview URL availability~~ (Infrastructure issue - app works locally)

### P1 (High)
- [ ] Newsletter signup backend integration
- [ ] Email notification for contact form submissions (SendGrid/Resend)
- [ ] Individual venture detail pages

### P2 (Medium)
- [ ] Blog/News CMS integration
- [ ] Team member individual pages
- [ ] SEO optimization (meta tags, sitemap)
- [ ] Performance optimization (lazy loading, code splitting)

### P3 (Future)
- [ ] Analytics integration (Google Analytics/Plausible)
- [ ] Multi-language support
- [ ] Dark/Light theme toggle
- [ ] Investment/Partnership portal

## Technical Notes
- Contact form saves to MongoDB with status tracking
- Nginx proxy routes /api/* to backend (8001) and /* to frontend (3000)
- All environment variables properly configured in .env files

## Testing Status
- Backend API: ✅ All endpoints working (verified via curl)
- Frontend Components: ✅ All pages and components rendering
- Contact Form: ✅ Submission and storage working
- Mobile Responsiveness: ✅ Verified

## Next Tasks
1. Wait for preview infrastructure to stabilize
2. Add email notifications for contact submissions
3. Implement newsletter signup functionality
4. Add individual venture detail pages
