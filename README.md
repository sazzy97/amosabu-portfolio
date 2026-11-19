# Amos Osaze Abu — Portfolio Website

A minimal, high-craft portfolio for **Amos Osaze Abu** (Digital Product Designer).

Crafted with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**, fusing **Dennis Snellenberg's** editorial typographic scale and fluid micro-interactions with **Olamide Oladehinde's** interactive case studies, floating theme switcher, and draggable showcase rows.

---

## 🎨 Design System & Color Palette

* **Warm Cream (`#f8f6f3`):** Editorial, non-glare canvas (Light Mode background)
* **Stone (`#ebe9e4`):** Tactile surfaces, pill tags, and dividers
* **Deep Teal (`#025f6e`):** Grounded contrast for headings, buttons, and accents
* **Midnight Noir (`#07181c`):** High-contrast background for "Behind the canvas" (>15.8:1 contrast against white typography and polaroids)
* **Electric Orange-Red (`#ff5900`):** Laser focus for status indicators, metric badges, and active highlights
* **Charcoal (`#192021`):** High-contrast, razor-sharp typography

---

## 🚀 Sections & Features

1. **Navbar (`components/Navbar.tsx`):**
   * Minimal brand wordmark
   * Smooth navigation anchors and "Chat with me" CTA
2. **Hero (`components/Hero.tsx`):**
   * Display typography (*"A Digital Product Designer passionate about shaping digital solutions that drive impact, usability, and growth"*)
   * Relaxed line-height and bolder emphasis on **Digital Product Designer**
3. **Floating Theme Switcher (`components/ThemeToggle.tsx`):**
   * Fixed pill switcher (Light / Dark) inspired by Olamide's portfolio
   * Persisted in localStorage and system preference detection
4. **Sneak Peek of My Works (`components/WorksCarousel.tsx`):**
   * **Dual-Row Alternating Stream (Snellenberg Style):**
     * Row 01: Web Applications & SaaS Platforms (7 authentic snapshots)
     * Row 02: Native Mobile Experiences & iOS Flows (9 authentic snapshots)
   * **Hold & Drag Physics:** Continuous seamless wrapping with momentum, mouse drag, and touch swipe
   * Clean minimalist section header (`● SNEAK PEEK OF MY WORKS`)
5. **Featured Works (`components/FeaturedWorks.tsx`):**
   * Olamide-style clean case study cards with mockups only
   * Hover overlay revealing project names and tags
   * Dedicated in-depth case study pages:
     * **Power Management App** (`/works/powermanagement`)
     * **GasHub** (`/works/gashub`)
     * **WhatsApp New Features** (`/works/whatsappfeatures`)
     * **SwiftLog App** (`/works/swiftlog`)
6. **Capabilities (`components/Capabilities.tsx`):**
   * 10 core disciplines in tactile pill badges: *Product Design, UX, UI, Design Systems, User Research, Interaction, Visual, Creativity, Design Thinking*, and **Vibecoding**
7. **Behind The Canvas (`components/BehindTheCanvas.tsx`):**
   * High-contrast Midnight Noir (`#07181c`) surface with authentic perspective grid
   * Personal story and philosophy
   * 3 interactive tilt polaroid cards (*A happy person*, *Enjoy Football*, *Work Mode*)
   * CV download link and contact trigger
8. **Testimonials (`components/Testimonials.tsx`):**
   * 4 client & team-lead recommendations (Chikezie Ekechukwu, Mr. Abubakar Aliyu, Daniel, Sunday)
9. **Brands Marquee (`components/BrandsMarquee.tsx`):**
   * Infinite ticker of collaborated brands: Finflow, Bubetech, Clausecore, Emonie, SwiftLog
10. **Footer (`components/Footer.tsx`):**
    * Dennis Snellenberg oversized CTA (*"Ready to turn ideas into impact?"*)
    * Proper rounded pill button for "Send Email" (`mailto:osazeabuhaymus@gmail.com`)
    * Social channels (LinkedIn, X, TikTok, Instagram)

---

## 📁 Repository Structure

```
.
├── app/
│   ├── globals.css              # Global styles, variables & stream animations
│   ├── layout.tsx               # Root layout with font definitions & theme provider
│   ├── page.tsx                 # Main portfolio page
│   └── works/
│       ├── gashub/page.tsx      # GasHub interactive case study
│       ├── powermanagement/     # Power Management App case study
│       ├── swiftlog/page.tsx    # SwiftLog App case study
│       └── whatsappfeatures/   # WhatsApp New Features case study
├── components/
│   ├── BehindTheCanvas.tsx      # About Me & personal polaroid gallery
│   ├── BrandsMarquee.tsx        # Client/partner marquee ticker
│   ├── Capabilities.tsx         # Disciplines & skill pills (including Vibecoding)
│   ├── FeaturedWorks.tsx        # Case studies grid with hover reveal
│   ├── Footer.tsx               # Snellenberg-inspired contact footer
│   ├── Hero.tsx                 # Typographic display hero
│   ├── LagosClock.tsx           # Real-time WAT digital clock
│   ├── Navbar.tsx               # Minimal navigation header
│   ├── Testimonials.tsx         # Social proof & peer recommendations
│   ├── ThemeToggle.tsx          # Floating Light / Dark mode switcher
│   └── WorksCarousel.tsx        # Draggable dual-row stream showcase
├── html-preview/                # Standalone zero-dependency HTML preview files
│   ├── index.html
│   ├── redesign_concept.html
│   ├── powermanagement.html
│   ├── gashub.html
│   ├── whatsappfeatures.html
│   └── swiftlog.html
├── public/
│   └── snapshots/               # 16 authentic design snapshots (Web & Mobile)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ How to Run Locally

### 1. Prerequisites
Ensure **Node.js** (v18 or v20+) is installed.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📄 License
© 2026 Amos Osaze Abu. All rights reserved.
