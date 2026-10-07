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
  data/site.ts          # URL SpaCare, email kontak, helper mailto
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

## Placeholder yang perlu diganti

- **Logo**: `LogoMark.astro`, `public/favicon.svg`, `public/apple-touch-icon.png`, dan
  `public/og-image.png` memakai simbol P sementara. Ganti dengan file logo resmi.
- **Kebijakan privasi & syarat PosCare**: `/privasi` dan `/syarat` masih menautkan dokumen SpaCare.

## Deploy

Output statis (`dist/`), cocok untuk Cloudflare Pages: build command `pnpm build`, output
directory `dist`, Node 22+.
