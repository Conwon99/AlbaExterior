# Astro.js Conversion - Next Steps

## ✅ Completed

1. **Configuration**
   - ✅ Updated `package.json` with Astro dependencies
   - ✅ Created `astro.config.mjs` with SSR enabled
   - ✅ Created `BaseLayout.astro`

2. **Pages Converted**
   - ✅ `src/pages/index.astro` (Home)
   - ✅ `src/pages/pressure-washing.astro`
   - ✅ `src/pages/roof-cleaning.astro`
   - ✅ `src/pages/soft-washing.astro`
   - ✅ `src/pages/driveway-cleaning.astro`

3. **Components Updated**
   - ✅ `ProcessGrid.tsx` - Removed React Router, using `<a>` tags

## 🔄 Remaining Pages to Create

Create these files in `src/pages/` following the same pattern:

- [ ] `patio-cleaning.astro`
- [ ] `patio-driveway-cleaning.astro`
- [ ] `gutter-cleaning.astro`
- [ ] `upvc-cleaning.astro`
- [ ] `conservatory-cleaning.astro`

**Template Pattern:**
```astro
---
import BaseLayout from '@/layouts/BaseLayout.astro';
import { Header } from '@/sections/Header';
import { Footer } from '@/sections/Footer';
import { CallButton } from '@/components/CallButton';
import { ContactFormSection } from '@/sections/ContactFormSection';
---

<BaseLayout title="[Service Name] | Alba Exteriors">
  <Header client:load />
  <!-- Hero section with background image -->
  <!-- Content section -->
  <ContactFormSection client:load />
  <Footer client:load />
  <CallButton client:load />
</BaseLayout>
```

## 📝 Additional Tasks

1. **Update TypeScript Config**
   - Create/update `tsconfig.json` for Astro compatibility
   - May need to add Astro types

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Test Build**
   ```bash
   npm run build
   ```

4. **Remove Old Files** (after confirming everything works)
   - Delete `src/pages/*.tsx` files (old React pages)
   - Delete `src/App.tsx`
   - Delete `src/index.tsx`
   - Delete `vite.config.ts`
   - Delete `index.html` (Astro generates this)

5. **Update Components**
   - Check all components for React Router usage
   - Replace with regular `<a>` tags or Astro's routing
   - Ensure all React components have proper `client:*` directives

## 🚀 Key Differences

1. **Routing**: File-based in `src/pages/` instead of React Router
2. **Components**: React components need `client:load`, `client:hydrate`, or `client:idle`
3. **Styling**: Use `class` instead of `className` in Astro templates
4. **Imports**: Astro uses standard ES modules

## ⚠️ Important Notes

- All React components used in Astro pages must have a `client:*` directive
- Static content can be written directly in Astro (no client directive needed)
- SSR is enabled in `astro.config.mjs` with `output: 'server'`
- For deployment, you'll need an SSR-compatible host (Netlify, Vercel, etc.)

## 🔍 Verification

After conversion:
1. Run `npm run dev` to test locally
2. Check that all routes work
3. Verify SSR by viewing page source (should have HTML content)
4. Test that Google can crawl the pages



