# PosCare Landing (poscare.id)

Landing page utama **PosCare — Business Operations Platform**, induk dari SpaCare, LaundryCare,
SportCare, dan RetailCare.

- Rencana isi (sitemap, copy, arah visual, CTA): [`docs/LANDING_PLAN.md`](./docs/LANDING_PLAN.md)
- Stack: Astro (output statis, tanpa JS kecuali menu mobile), Tailwind CSS v4, Plus Jakarta Sans
  (self-host via Fontsource), ikon lucide.

## Menjalankan

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # hasil statis di dist/
pnpm preview
pnpm check      # astro check (TypeScript) + prettier --check
```

## Struktur

```
src/
  data/products.ts      # daftar produk vertikal + status (sumber untuk diagram hero, kartu, footer)
  data/site.ts          # URL SpaCare, kontak (WhatsApp, email), helper link WhatsApp
  styles/global.css     # token warna/radius + utilitas bersama (btn, card, eyebrow, …)
  components/
    sections/           # satu file per section landing
    mockups/            # ilustrasi layar SpaCare (data contoh)
    Logo.astro, LogoMark.astro, PlatformDiagram.astro, ProductIcon.astro, Navbar, Footer
  pages/                # index, privasi, syarat, 404
```

## Saat produk baru rilis

Ubah entri di `src/data/products.ts`: `status: 'available'`, isi `href` subdomainnya (mis.
`https://laundry.poscare.id`), dan `cta`. Diagram hero, kartu solusi, dan footer ikut berubah.

## Placeholder

- **Logo** resmi ada di `src/assets/brand/poscare-logo.png` (wordmark) dan `poscare-mark.png`
  (simbol). Favicon, apple-touch-icon, dan OG image di `public/` dibuat dari file yang sama.
- **Logo produk** (simbol `<produk>care-mark.png` dan wordmark `<produk>care-wordmark.png` /
  `spacare-name.png`) diambil dari lembar brand family; dipakai `ProductIcon` dan `ProductWordmark`.
  `spacare-wordmark.png` (dengan daun) tetap dipakai di section SpaCare.
- **Kebijakan privasi & syarat PosCare**: `/privasi` dan `/syarat` masih menautkan dokumen SpaCare.

## Deploy

Output statis (`dist/`), cocok untuk Cloudflare Pages: build command `pnpm build`, output
directory `dist`, Node 22+.
