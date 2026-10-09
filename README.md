<p align="center">
  <img src="src/assets/brand/poscare-logo.png" alt="PosCare" height="72" />
</p>

<p align="center"><strong>Business Operations Platform</strong><br />Kelola bisnis lebih mudah dalam satu platform.</p>

<p align="center"><a href="https://poscare.id">poscare.id</a></p>

---

## Apa itu PosCare?

PosCare adalah **platform operasional bisnis** yang membantu pemilik usaha menjalankan bisnisnya
dengan lebih sederhana, rapi, dan terhubung, langsung dari HP.

PosCare bukan sekadar aplikasi kasir. Kasir hanyalah satu bagian. PosCare menghubungkan seluruh
alur kerja bisnis menjadi satu:

```
Pelanggan → Produk / Layanan → Transaksi → Pembayaran → Laporan
```

Setiap jenis bisnis bekerja dengan cara yang berbeda. Karena itu PosCare tidak membuat satu aplikasi
yang dipaksakan untuk semua. PosCare adalah **platform induk**: fondasi teknologinya sama, lalu di
atasnya dibangun solusi khusus untuk setiap industri.

```
                         POSCARE
              Business Operations Platform
                            │
      ┌──────────────┬──────┴───────┬──────────────┐
   SpaCare      LaundryCare      SportCare      RetailCare
```

## Tujuan PosCare

Banyak UMKM menjalankan bisnis dengan alat yang terpisah-pisah: kasir di satu aplikasi, data
pelanggan di Excel, catatan di WhatsApp, pembayaran dicek terpisah, dan laporan dibuat manual.
Untuk tahu kondisi bisnis hari ini saja, owner harus membuka banyak tempat.

Di sisi lain, software bisnis yang ada sering kali **terlalu sederhana** (hanya mencatat penjualan)
atau **terlalu rumit** (fitur banyak, sulit dipelajari).

PosCare ingin berada di tengah: **cukup lengkap untuk menjalankan bisnis, tetap sederhana dipakai
setiap hari.** Tujuannya:

1. **Satu alur kerja.** Data pelanggan, transaksi, pembayaran, dan laporan saling terhubung, tanpa
   pindah-pindah aplikasi.
2. **Sesuai industri.** Software mengikuti cara bisnis benar-benar bekerja, bukan bisnis yang
   dipaksa mengikuti software.
3. **Mobile-first.** Owner bisa menjalankan kasir, mencatat pelanggan, dan memantau pendapatan dari
   HP.
4. **Pembayaran jadi bagian dari alur.** QRIS tampil saat checkout, status pembayaran tercatat
   otomatis, dan langsung masuk ke laporan.
5. **Membantu digitalisasi UMKM Indonesia** dengan bahasa yang sederhana dan langkah yang singkat.

### Prinsip produk

**Simple · Focused · Industry-specific · Mobile-first · Useful**

Bukan membuat fitur sebanyak mungkin, tetapi fitur yang memang dibutuhkan bisnis tersebut.

## Keluarga produk

| Produk          | Untuk                                               | Status       | Tautan                                                   |
| --------------- | --------------------------------------------------- | ------------ | -------------------------------------------------------- |
| **SpaCare**     | Baby spa, mom spa, spa dewasa, dan bisnis treatment | Tersedia     | [spa.poscare.id/landing](https://spa.poscare.id/landing) |
| **LaundryCare** | Bisnis laundry                                      | Segera hadir | –                                                        |
| **SportCare**   | Bisnis olahraga: lapangan, gym, sport center        | Segera hadir | –                                                        |
| **RetailCare**  | Bisnis retail                                       | Segera hadir | –                                                        |

Semua produk _Powered by PosCare_: memakai fondasi yang sama (pelanggan, transaksi, pembayaran,
operasional, laporan), dengan alur dan fitur yang disesuaikan untuk industrinya.

### SpaCare, implementasi pertama

SpaCare adalah contoh nyata filosofi PosCare. Alurnya mengikuti cara kerja bisnis spa:

```
Pelanggan → Treatment → Catatan & SOAP → Kasir → QRIS → Laporan
```

Fiturnya antara lain data pelanggan dewasa dan anak, catatan treatment dengan format SOAP, layanan
dan produk beserta stok, kasir dengan cash dan QRIS, laporan harian sampai bulanan, serta katalog
layanan dan reservasi online. Mulai Rp29.000 per bulan, dengan coba gratis 3 hari.

## Yang bukan PosCare

- PosCare **bukan** bank, payment gateway, atau lembaga keuangan. Pembayaran QRIS diproses melalui
  mitra penyedia jasa pembayaran berizin.
- PosCare **bukan** layanan kesehatan. Catatan treatment dan SOAP di SpaCare adalah catatan layanan,
  bukan rekam medis.

## Perusahaan

PosCare dikelola oleh **PT Akbar Teknologi Utama**, Bekasi, Indonesia.

- WhatsApp: [0851-4490-9320](https://wa.me/6285144909320)
- Email: [support@poscare.id](mailto:support@poscare.id)
- [Kebijakan Privasi](https://poscare.id/privasi) · [Syarat & Ketentuan](https://poscare.id/syarat)

---

## Tentang repo ini

Repo ini berisi situs **poscare.id**: landing page PosCare beserta halaman Kebijakan Privasi dan
Syarat & Ketentuan. Rencana isi halaman (sitemap, copy, arah visual, CTA) ada di
[`docs/LANDING_PLAN.md`](./docs/LANDING_PLAN.md).

Stack: Astro (situs statis), Tailwind CSS v4, Plus Jakarta Sans (self-host), ikon lucide.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # hasil statis di dist/
pnpm check      # astro check (TypeScript) + prettier --check
```

<details>
<summary>Struktur dan cara mengubah konten</summary>

```
src/
  data/site.ts          # kontak, perusahaan, harga SpaCare, URL SpaCare
  data/products.ts      # daftar produk + status (diagram hero, kartu, footer)
  data/legal/           # isi Kebijakan Privasi & Syarat & Ketentuan
  assets/brand/         # logo PosCare dan logo tiap produk
  components/sections/  # satu file per section landing
  pages/                # index, privasi, syarat, 404
```

- **Produk baru rilis:** di `src/data/products.ts` ubah `status` menjadi `'available'`, isi `href`
  ke subdomainnya, dan `cta`. Diagram hero, kartu solusi, dan footer ikut berubah.
- **Dokumen legal berubah:** perbarui isi di `src/data/legal/` dan naikkan `LEGAL_EFFECTIVE_DATE`.
  Disarankan ditinjau konsultan hukum sebelum dipakai resmi.

</details>

### Deploy

Situs di-deploy ke **Cloudflare Pages** dari branch `main`: setiap push ke `main` otomatis
ter-deploy.

- Build command `pnpm build`, output `dist`, Node 22 (dari `.node-version`).
- Custom domain `poscare.id`. Header keamanan dan cache aset ada di `public/_headers`.
