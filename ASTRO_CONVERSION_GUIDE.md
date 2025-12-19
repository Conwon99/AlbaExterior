# Astro.js Conversion Guide

## Status: In Progress

This document tracks the conversion from React/Vite to Astro.js for server-side rendering.

## Completed:
1. ✅ Updated package.json with Astro dependencies
2. ✅ Created astro.config.mjs with SSR enabled
3. ✅ Created BaseLayout.astro
4. ✅ Converted index.astro (home page)
5. ✅ Converted pressure-washing.astro

## Remaining Tasks:

### Pages to Convert:
- [ ] roof-cleaning.astro
- [ ] soft-washing.astro  
- [ ] driveway-cleaning.astro
- [ ] patio-cleaning.astro
- [ ] patio-driveway-cleaning.astro
- [ ] gutter-cleaning.astro
- [ ] upvc-cleaning.astro
- [ ] conservatory-cleaning.astro

### Components to Update:
- [ ] ProcessGrid.tsx - Replace React Router Link with Astro Link or <a> tags
- [ ] Header components - Check for React Router usage
- [ ] All React components need `client:load` directive in Astro pages

### Configuration:
- [ ] Update tsconfig.json for Astro
- [ ] Remove vite.config.ts (no longer needed)
- [ ] Update tailwind.config.js paths if needed
- [ ] Create .astro/types.d.ts for type definitions

## Key Changes:
1. **Routing**: File-based routing in `src/pages/` instead of React Router
2. **Components**: React components need `client:load`, `client:hydrate`, or `client:idle` directives
3. **Styling**: Use `class` instead of `className` in Astro templates
4. **Imports**: Use Astro's import syntax for layouts and components

## Next Steps:
1. Create all remaining service pages
2. Update ProcessGrid to use Astro links
3. Test build process
4. Verify SSR is working



