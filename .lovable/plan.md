

## Plan: 3D Cosmic Transformation

Transform the entire site into an immersive cosmic/space aesthetic while preserving all existing content, functionality, and the existing color system (purple/violet/pink gradients already lend themselves perfectly to a cosmic theme).

### What Changes

**1. Cosmic Starfield Background (replace ParticleBackground)**
Replace the simple particle dots with a multi-layer starfield canvas effect:
- Layer 1: Tiny static stars (200+ points, varying opacity/size)
- Layer 2: Slow-drifting medium stars with subtle twinkle animation
- Layer 3: Faint colored nebula clouds using radial gradients (purple/pink/blue at ~5% opacity)
- Mouse parallax: layers shift at different rates for depth
- Maintains all existing performance guards (reduced motion, mobile optimization, visibility pause)

**2. Enhanced Hero 3D Scene**
Upgrade `Hero3DBackground.tsx` from simple wireframe shapes to a cosmic scene:
- Central rotating nebula/galaxy cluster made of point clouds (Three.js Points with BufferGeometry)
- Orbiting glowing orbs with trails (small spheres on orbital paths)
- Distant star field layer using Points (thousands of tiny dots in a sphere)
- Slow auto-rotation + mouse parallax (already implemented, just enhance)
- Keep performance: low-power GL, reduced shapes on mobile, IntersectionObserver gating

**3. Cosmic Section Dividers**
Add a new `CosmicDivider` component used between major sections:
- SVG-based: a thin horizontal line with a glowing orb in the center
- Subtle pulse animation on the orb
- Uses existing `--primary` and `--accent` colors

**4. Floating Cosmic Elements on Sections**
Add subtle CSS-only cosmic accents to section backgrounds:
- Radial gradient "nebula" spots positioned at section edges (already partially done, extend to all sections)
- Add a faint CSS star-dot pattern overlay (repeating radial-gradient) to the body/main background
- Each section gets a unique subtle nebula positioning for visual variety

**5. Enhanced Glass Cards with Cosmic Glow**
Update the `.glass-card` CSS to feel more cosmic:
- Add a faint outer glow on hover (box-shadow with primary color)
- Subtle inner radial gradient shimmer on hover
- Keep existing gradient border animation

**6. 3D Tilt on All Card Sections**
The TiltCard component exists but is only used on ServicesGrid. Extend it to:
- Testimonials cards
- OperationalProblems cards
- SecuritySection cards
- CaseStudiesPreview cards

**7. Cosmic CTA Sections**
Enhance FinalCTA with:
- Animated ring/orbit SVG element behind the card
- Pulsing glow effect on the primary button

**8. Animated Gradient Orbs**
Add 2-3 large, slow-moving CSS gradient orbs (absolutely positioned, blurred) to the Layout:
- Using existing accent colors at very low opacity (~5-8%)
- CSS `@keyframes` for slow drift movement
- `pointer-events: none`, behind content

### Files Modified
- `src/components/effects/ParticleBackground.tsx` — full rewrite to cosmic starfield
- `src/components/effects/Hero3DBackground.tsx` — upgrade to nebula/galaxy scene
- `src/index.css` — add cosmic utility classes, star pattern, enhanced glass-card glow
- `src/components/Layout.tsx` — add floating gradient orbs
- `src/sections/OperationalProblems.tsx` — wrap cards with TiltCard
- `src/sections/Testimonials.tsx` — wrap cards with TiltCard
- `src/sections/SecuritySection.tsx` — wrap cards with TiltCard
- `src/sections/CaseStudiesPreview.tsx` — wrap cards with TiltCard
- `src/sections/FinalCTA.tsx` — add cosmic ring decoration

### New Files
- `src/components/effects/CosmicDivider.tsx` — glowing orb section divider
- Updated `src/pages/Index.tsx` — insert CosmicDividers between sections

### Technical Details
- No new npm packages (uses existing Three.js, framer-motion, CSS)
- All animations respect `prefers-reduced-motion`
- Mobile: reduced particle counts, no 3D tilt, simplified effects
- Performance: IntersectionObserver gating on all canvas/3D elements, `will-change` only when needed
- All existing colors, fonts, spacing, content preserved exactly

