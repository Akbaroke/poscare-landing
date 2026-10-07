# Rencana Landing Page PosCare (poscare.id)

Dokumen ini dibuat **sebelum coding** dan menjadi acuan isi halaman. Bila copy di kode berubah,
perbarui dokumen ini juga.

Prinsip yang dipegang:

- PosCare = **Business Operations Platform** (platform induk), bukan aplikasi kasir.
- Tidak ada angka, testimoni, logo partner, atau klaim yang belum ada datanya.
- Hanya SpaCare yang ditandai **Tersedia**. LaundryCare, SportCare, RetailCare ditandai
  **Segera hadir** dan hanya dijelaskan di level positioning.
- SOAP / rekam treatment hanya muncul di bagian SpaCare.
- QRIS dijelaskan sebagai "pembayaran digital terintegrasi"; PosCare **bukan** bank / payment
  gateway (ada catatan kecil di bagian alur).

---

## 1. Sitemap

Satu halaman utama (`/`) dengan anchor, plus dua halaman legal placeholder.

| #   | Section               | Anchor        | Tujuan                                                        |
| --- | --------------------- | ------------- | ------------------------------------------------------------- |
| 0   | Navbar                | –             | Orientasi + CTA selalu terlihat                               |
| 1   | Hero                  | `#top`        | Pengunjung langsung paham PosCare itu apa                     |
| 2   | Masalah               | `#masalah`    | "Terlalu banyak aplikasi" → relate dengan owner               |
| 3   | Pendekatan            | `#pendekatan` | Bukan satu aplikasi untuk semua; di tengah sederhana–rumit    |
| 4   | Keluarga produk       | `#solusi`     | Arahkan ke vertical sesuai bisnis (konversi utama)            |
| 5   | Kenapa PosCare        | `#fitur`      | 6 alasan                                                      |
| 6   | Alur kerja            | `#cara-kerja` | Pelanggan → Produk/Layanan → Transaksi → Pembayaran → Laporan |
| 7   | SpaCare showcase      | `#spacare`    | Bukti nyata implementasi                                      |
| 8   | Filosofi              | `#tentang`    | Brand belief                                                  |
| 9   | Final CTA             | –             | Ajakan terakhir                                               |
| 10  | Footer                | –             | Produk, perusahaan, legal, domain                             |
| –   | `/privasi`, `/syarat` | –             | Placeholder jujur: kebijakan platform PosCare sedang disusun  |

Navbar: **Solusi** · **Cara kerja** · **SpaCare** · **Tentang** · `Masuk` (→ spa.poscare.id/login,
karena saat ini satu-satunya produk yang bisa dimasuki adalah SpaCare) · CTA `Lihat solusi`.

---

## 2. Copy per section

### Hero

- Eyebrow: `Business Operations Platform`
- H1: **Operasional bisnis, dibuat lebih sederhana.**
- Sub: PosCare menghadirkan solusi bisnis yang dirancang sesuai kebutuhan setiap industri — dari
  pelanggan, transaksi, pembayaran, hingga laporan.
- CTA utama: `Temukan solusi untuk bisnis Anda` → `#solusi`
- CTA sekunder: `Kenali PosCare` → `#pendekatan`
- Baris kecil di bawah CTA: "Mobile-first · Pembayaran QRIS terintegrasi · Dibuat untuk UMKM Indonesia"

### Masalah

- Eyebrow: `Masalahnya`
- H2: **Satu bisnis, terlalu banyak tempat mencatat.**
- Daftar keadaan sehari-hari (dicoret secara visual):
  - Kasir di satu aplikasi
  - Data pelanggan di Excel
  - Catatan pelanggan tersebar di WhatsApp
  - Pembayaran dicek terpisah
  - Laporan dibuat manual di akhir bulan
- Penutup: "Akhirnya, untuk tahu kondisi bisnis hari ini saja harus membuka banyak tempat."
- Jawaban: **Dengan PosCare, semuanya ada di satu alur.**

### Pendekatan

- H2: **Setiap bisnis punya cara kerja yang berbeda. Software-nya juga seharusnya begitu.**
- Sub: Karena itu PosCare tidak membuat satu aplikasi yang dipaksakan untuk semua. Kami membangun
  solusi khusus untuk setiap industri, di atas fondasi yang sama.
- Perbandingan tiga kolom:
  - **Terlalu sederhana** — Hanya mencatat penjualan. Pelanggan, layanan, dan laporan tetap di tempat lain.
  - **Terlalu rumit** — Fiturnya banyak, tapi butuh waktu lama untuk dipelajari dan jarang terpakai.
  - **PosCare** — Cukup lengkap untuk menjalankan bisnis, tetap sederhana dipakai setiap hari.

### Keluarga produk

- Eyebrow: `Solusi PosCare`
- H2: **Satu platform. Solusi yang dibuat sesuai bisnis Anda.**
- Sub: Pilih solusi sesuai jenis usaha. Semuanya dibangun di atas fondasi PosCare.
- Kartu:
  - **SpaCare** — Solusi untuk bisnis spa. Baby spa, mom spa, spa dewasa, dan bisnis treatment.
    Badge `Tersedia` · CTA `Buka SpaCare` → spa.poscare.id
  - **LaundryCare** — Solusi operasional untuk bisnis laundry. Badge `Segera hadir` ·
    CTA `Kabari saya` (chat WhatsApp 0851-4490-9320 dengan pesan terisi)
  - **SportCare** — Solusi operasional untuk bisnis olahraga. Badge `Segera hadir` · `Kabari saya`
  - **RetailCare** — Solusi operasional untuk bisnis retail. Badge `Segera hadir` · `Kabari saya`
  - Kartu terbuka (garis putus-putus): **Bisnis Anda belum ada di sini?** Ceritakan cara kerja
    bisnis Anda. Solusi berikutnya kami bangun dari kebutuhan nyata. → `Ceritakan ke kami`
- Footnote: "Setiap solusi: Powered by PosCare."

### Kenapa PosCare

- H2: **Lengkap secukupnya. Sederhana setiap hari.**
- 6 poin:
  1. **Satu ekosistem** — Pelanggan, transaksi, pembayaran, dan laporan saling terhubung. Tidak perlu pindah-pindah aplikasi.
  2. **Mobile-first** — Jalankan kasir, cek pendapatan, dan pantau bisnis langsung dari HP. Desktop tetap bisa.
  3. **Sesuai industri** — Alur kerjanya mengikuti jenis usaha Anda, bukan template umum.
  4. **Pembayaran terintegrasi** — QRIS muncul saat checkout, status pembayaran ikut tercatat di transaksi.
  5. **Laporan yang langsung jadi** — Pendapatan dan transaksi harian–bulanan tersusun otomatis dari kegiatan sehari-hari.
  6. **Mudah dipakai** — Bahasa sederhana, langkah singkat. Bisa dipakai tanpa pelatihan panjang.

### Alur kerja

- Eyebrow: `Cara kerja`
- H2: **Dari pelanggan datang sampai laporan, satu alur.**
- Langkah: Pelanggan → Produk / Layanan → Transaksi → Pembayaran → Laporan, masing-masing satu kalimat.
- Sub-blok pembayaran: Checkout → QRIS tampil → Pelanggan membayar → Status diperbarui → Tercatat di laporan.
- Catatan kecil: "Pembayaran QRIS diproses melalui mitra penyedia jasa pembayaran. PosCare adalah
  software operasional bisnis, bukan bank atau payment gateway."
- Catatan kecil 2: "Fondasinya sama di setiap solusi. Langkah di antaranya menyesuaikan industri."

### SpaCare showcase

- Eyebrow: logo SpaCare · `Powered by PosCare`
- H2: **Dimulai dari SpaCare.**
- Sub: Lihat bagaimana PosCare bekerja melalui SpaCare, aplikasi untuk baby spa, mom spa, dan spa
  dewasa. Dari data pelanggan sampai rekam SOAP, semuanya di HP.
- Alur spa: Pelanggan → Treatment → Catatan & SOAP → Kasir → QRIS → Laporan
- Fitur (semua sudah ada di SpaCare 1.7):
  - **Pelanggan** — Profil dewasa & anak, riwayat kunjungan.
  - **Catatan treatment & SOAP** — Subjective, Objective, Assessment, Plan di setiap kunjungan.
  - **Layanan & produk** — Daftar treatment, harga, dan stok produk.
  - **Kasir** — Cash atau QRIS, diskon dan biaya tambahan.
  - **Laporan** — Pendapatan dan transaksi harian hingga bulanan.
  - **Katalog & reservasi** — Katalog layanan yang bisa dibagikan; pelanggan bisa memesan jadwal.
- Visual: tiga mockup HP (Pelanggan + SOAP, Checkout QRIS, Laporan) — caption "Ilustrasi tampilan
  SpaCare. Data contoh."
- CTA: `Explore SpaCare` → spa.poscare.id · sekunder `Daftar dan coba gratis` → spa.poscare.id/register

### Filosofi

- H2: **Software seharusnya mengikuti bisnis Anda.**
- Copy: Setiap industri mempunyai workflow yang berbeda. PosCare membangun solusi berdasarkan cara
  bisnis benar-benar bekerja, bukan memaksa bisnis menyesuaikan diri dengan software.
- Lima prinsip: Simple · Focused · Industry-specific · Mobile-first · Useful

### Final CTA

- H2: **Kelola bisnis tanpa dibuat rumit.**
- Sub: Temukan solusi PosCare yang sesuai dengan bisnis Anda.
- CTA: `Lihat semua solusi` → `#solusi` · sekunder `Hubungi kami` (WhatsApp)

### Footer

- Logo POSCARE + "Business Operations Platform" + "poscare.id"
- Produk: SpaCare · LaundryCare · SportCare · RetailCare (yang belum tersedia diberi label kecil)
- Perusahaan: Tentang · WhatsApp 0851-4490-9320 · support@poscare.id
- Legal: Kebijakan Privasi · Syarat & Ketentuan
- © {tahun} PosCare

---

## 3. Arah visual

Umum

- Latar dominan off-white `#FAF9F6`, kartu putih dengan border 1px; whitespace lebar.
- Navy `#070F33` untuk teks utama & blok filosofi. Orange gradient (`#FFA800 → #FE3D01`, diambil dari logo) **hanya**
  untuk aksen: simbol logo, tombol utama, garis penghubung pada diagram platform.
- Font: Plus Jakarta Sans (typeface buatan Jakarta, di-self-host), angka tabular untuk mockup.
- Radius: 10–16px pada kartu, 999px dihindari kecuali badge kecil. Shadow sangat tipis.
- Ikon lucide (stroke 1.75) — satu ikon per konsep, tidak dekoratif.
- Animasi: hanya transisi hover/focus. Menghormati `prefers-reduced-motion`.

Per section

| Section         | Visual                                                                                                                                                                                                                 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Hero            | Kiri: copy. Kanan (bawah di mobile): **diagram platform** — node PosCare dengan fondasi (Pelanggan, Transaksi, Pembayaran, Laporan), garis cabang ke 4 vertical berwarna. Ini visual inti brand, bukan floating cards. |
| Masalah         | Dua kolom: daftar alat yang tercerai-berai (teks dicoret halus, ikon abu-abu) ↔ satu kartu "satu alur".                                                                                                                |
| Pendekatan      | Tiga kolom perbandingan; kolom PosCare diberi border navy & latar putih, dua lainnya redup.                                                                                                                            |
| Keluarga produk | Grid kartu besar, tiap vertical punya warna identitas (hijau/biru/orange/ungu) pada ikon & strip atas; SpaCare paling menonjol (lebar 2 kolom di desktop). Seluruh kartu adalah link, hover menaikkan border.          |
| Kenapa          | Grid 3×2 tanpa kartu — ikon kecil + judul + teks, dipisah garis tipis.                                                                                                                                                 |
| Alur kerja      | 5 langkah bernomor dengan garis penghubung (horizontal di desktop, vertikal di mobile).                                                                                                                                |
| SpaCare         | Latar hijau sangat muda (`#EEF6F1`), logo SpaCare asli, tiga mockup HP yang meniru UI SpaCare (flat, primary `#12372A`).                                                                                               |
| Filosofi        | Blok navy penuh, teks putih besar, lima prinsip sebagai daftar.                                                                                                                                                        |
| Final CTA       | Kartu putih lebar dengan aksen garis gradient tipis di atas.                                                                                                                                                           |
| Footer          | Empat kolom, sederhana.                                                                                                                                                                                                |

---

## 4. CTA

| Lokasi        | CTA utama                        | Tujuan                  | CTA sekunder           | Tujuan                  |
| ------------- | -------------------------------- | ----------------------- | ---------------------- | ----------------------- |
| Navbar        | Lihat solusi                     | `#solusi`               | Masuk                  | spa.poscare.id/login    |
| Hero          | Temukan solusi untuk bisnis Anda | `#solusi`               | Kenali PosCare         | `#pendekatan`           |
| Kartu SpaCare | Buka SpaCare                     | https://spa.poscare.id  | –                      | –                       |
| Kartu lain    | Kabari saya                      | WhatsApp (pesan terisi) | –                      | –                       |
| Kartu terbuka | Ceritakan ke kami                | WhatsApp (pesan terisi) | –                      | –                       |
| SpaCare       | Explore SpaCare                  | https://spa.poscare.id  | Daftar dan coba gratis | spa.poscare.id/register |
| Final CTA     | Lihat semua solusi               | `#solusi`               | Hubungi kami           | WhatsApp (pesan terisi) |

Saat vertical lain rilis: ubah `status` di `src/data/products.ts` menjadi `available` dan isi `href`
subdomainnya. Kartu, footer, dan diagram hero ikut berubah.

---

## 5. Placeholder / yang perlu dikonfirmasi

- **Logo**: sudah memakai logo resmi (`src/assets/brand/poscare-logo.png`, simbol di
  `poscare-mark.png`; favicon, apple-touch-icon, dan OG image dibuat dari file yang sama).
- **Logo produk**: simbol dan wordmark SpaCare, LaundryCare, SportCare, RetailCare memakai aset resmi
  dari lembar brand family (bukan ikon generik).
- **Kebijakan privasi & syarat PosCare**: halaman `/privasi` dan `/syarat` menyatakan dokumen sedang
  disusun dan menautkan dokumen SpaCare yang berlaku.
- **Kontak**: WhatsApp 0851-4490-9320 (kanal utama untuk CTA) dan `support@poscare.id`. Belum ada alamat.
- Tidak ada angka pengguna, testimoni, atau logo partner.
