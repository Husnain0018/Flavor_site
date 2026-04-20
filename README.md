# Nano Banana - Future of Freshness

## 🚀 Introduction

**Nano Banana** is a premium cold-pressed juice brand featuring cutting-edge nano-processing technology that retains **99.9% of nutrients**. This Next.js landing page showcases three signature flavors through immersive, scroll-controlled animations using high-fidelity frame sequences.

Experience the evolution of freshness: **Pure sunshine. Midnight velvet. Liquid jewelry.**

## ✨ Key Features

- **Scroll-Synced Video Animation**: Canvas-based rendering of 120+ JPEG frames per flavor (10-20MB preload)
- **Flavor Switching**: Seamless transitions between Cream Mango, Dutch Chocolate, and Ruby Pomegranate
- **Framer Motion Magic**: Hero text slides, transforms, and micro-interactions synced to scroll progress
- **Mobile-First Responsive**: Optimized canvas scaling, touch-friendly controls
- **Product Sections**: Dynamic pricing, features, purchase flow matching current flavor
- **Performance Optimized**: DPR-aware canvas, lazy frame drawing, progressive loading indicators

## 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js 14 (App Router) |
| Animation | Framer Motion 11, Canvas API |
| Styling | Tailwind CSS 3, PostCSS, Custom Gradients |
| Language | TypeScript |
| Images | 360+ high-res frame sequences (~20MB/flavor) |

## 📁 Project Structure

```
NanoBanana/
├── app/
│   ├── globals.css
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Renders <CarScroll />
│   └── components/
│       └── CarScroll.tsx   # Main component (500+ lines)
├── public/
│   └── frames/             # Animation assets
│       ├── frame_*.jpg     # Mango (119 frames)
│       ├── chocolate/      # Dutch Chocolate frames
│       └── pomegranate/    # Ruby Pomegranate frames
├── package.json            # lamborgini (v0.1.0)
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

## 🎨 Flavors & Animation Details

| Flavor | Price | Animation Frames | Color Theme | Tagline |
|--------|-------|------------------|-------------|---------|
| **Cream Mango** | ₹120 | `/frames/frame_3_delay-0.04s.jpg` (3-119) | `#FFB74D` | Pure sunshine |
| **Dutch Chocolate** | ₹150 | `/frames/chocolate/frame_*_delay-0.04s.jpg` (0-119) | `#795548` | Midnight velvet |
| **Ruby Pomegranate** | ₹140 | `/frames/pomegranate/frame_*_delay-0.04s.jpg` (0-119) | `#DC143C` | Liquid jewelry |

**How it works:**
1. **Preload**: Loads all frames for current flavor (~120 images)
2. **Scroll Mapping**: `scrollYProgress` → frame index (0-119)
3. **Canvas Render**: `requestAnimationFrame` draws exact frame
4. **Text Choreography**: 5-stage hero sequence (intro → 3 slides → outro)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build
npm start
```

**Live Demo**: [http://localhost:3000](http://localhost:3000)

**Pro Tip**: Use Chrome DevTools → Network tab to watch frame preloading (shows ~100% progress bar in UI).

## 🎬 Scroll Experience Breakdown

| Scroll Progress | Visual | Text Content |
|-----------------|--------|--------------|
| 0-15% | Hero Title | `Cream Mango. Pure sunshine.` |
| 15-35% | Slide 1 | `Bursting with fresh mango.` |
| 35-55% | Slide 2 | `Vitamin-packed refreshment.` |
| 55-75% | Slide 3 | `Made from fruit, not concentrate.` + Nutrition stats |
| 75-100% | Outro CTA | `Be You. Be Raw.` + Buy button |

## 📱 Responsive Features

- **Portrait Mobile**: Height-focused canvas scaling
- **Landscape**: Width-focused with letterboxing
- **DPR Support**: Sharp rendering on Retina/High-DPI screens
- **Touch Controls**: Flavor switcher persists across orientations

## ⚡ Performance Optimizations

```
✅ Frame-by-frame canvas clearing + drawing (60fps)
✅ DevicePixelRatio scaling 
✅ Scroll event debouncing via Framer Motion
✅ Conditional re-renders (only on flavor change)
✅ Backdrop blur + glassmorphism nav
✅ Lazy footer sections (below viewport)
```

## 🔮 Future Enhancements

- [ ] WebP/AVIF frame optimization (50% size reduction)
- [ ] Video fallback for low-end devices
- [ ] E-commerce integration (Stripe/Shopify)
- [ ] Additional pages (Shop, About, Contact)
- [ ] PWA + offline support
- [ ] SEO improvements (structured data, sitemap)



## 🙌 Credits

- **Animation Concept**: Frame-by-frame storytelling
- **Design System**: Custom Tailwind + gradient theming
- **Motion Library**: [Framer Motion](https://framer.com/motion/)
- **Built with**: ❤️ for pixel-perfect experiences

---

⭐ **Star this repo if you found the scroll animation inspiring!**

**Be You. Be Raw.**

