import { SITE, SPACARE_PRICING } from '../site';
import { EMAIL, link, OPERATOR, SPACARE_TERMS, WHATSAPP, type LegalSection } from '.';

export const TERMS_INTRO = `<p>Syarat &amp; Ketentuan ini mengatur pemakaian situs poscare.id dan produk PosCare. PosCare dikelola oleh ${OPERATOR} ("kami"). Mohon dibaca sebelum mendaftar.</p>`;

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: 'layanan',
    title: 'Tentang PosCare',
    html: `<p>PosCare adalah platform operasional bisnis. Di atas fondasi yang sama (pelanggan, transaksi, pembayaran, dan laporan), PosCare menyediakan produk khusus untuk tiap jenis usaha. Saat ini yang tersedia adalah SpaCare (spa.poscare.id); LaundryCare, SportCare, dan RetailCare segera hadir.</p>
<p>PosCare adalah penyedia perangkat lunak. PosCare bukan bank, bukan payment gateway, dan bukan lembaga keuangan.</p>
<p>Dengan mendaftar atau memakai produk PosCare, Anda menyetujui Syarat &amp; Ketentuan ini dan ${link('/privasi', 'Kebijakan Privasi')}. Bila tidak setuju, mohon tidak memakai layanan ini.</p>`,
  },
  {
    id: 'produk',
    title: 'Ketentuan khusus produk',
    html: `<p>Setiap produk dapat memiliki ketentuan tambahan yang mengatur fitur khususnya. Untuk SpaCare, baca ${SPACARE_TERMS}. Bila ada perbedaan, ketentuan produk yang berlaku untuk pemakaian produk itu.</p>`,
  },
  {
    id: 'situs',
    title: 'Situs poscare.id',
    html: `<ul>
  <li>Informasi di situs ini disediakan untuk menjelaskan PosCare dan solusinya. Kami berupaya menjaganya tetap akurat, tetapi fitur, paket, dan harga yang berlaku adalah yang ditampilkan di dalam aplikasi masing-masing produk.</li>
  <li>Produk berlabel <em>Segera hadir</em> belum dapat dipakai. Waktu peluncuran dan fiturnya dapat berubah, dan pendaftaran minat lewat tombol <em>Kabari saya</em> tidak menimbulkan kewajiban bagi Anda maupun kami.</li>
  <li>Tampilan aplikasi di situs ini adalah ilustrasi dengan data contoh.</li>
</ul>`,
  },
  {
    id: 'akun',
    title: 'Akun',
    html: `<ul>
  <li>Anda berusia minimal 18 tahun dan berwenang mewakili usaha yang didaftarkan.</li>
  <li>Data pendaftaran harus benar dan diperbarui bila berubah.</li>
  <li>Anda bertanggung jawab menjaga kerahasiaan password dan kode verifikasi, serta atas semua aktivitas di akun Anda. Segera hubungi kami bila akun dipakai tanpa izin.</li>
  <li>Satu akun untuk satu usaha. Akun tidak boleh dipindahtangankan tanpa persetujuan kami.</li>
</ul>`,
  },
  {
    id: 'langganan',
    title: 'Masa coba, langganan, dan pembayaran',
    html: `<ul>
  <li>Produk PosCare dipakai dengan langganan. Paket, harga, dan masa aktif ditampilkan di aplikasi sebelum Anda membayar. Sebagai contoh, SpaCare tersedia mulai ${SPACARE_PRICING.fromMonthly} per bulan.</li>
  <li>Owner baru dapat memakai masa coba gratis sesuai yang ditawarkan di produk (untuk SpaCare, ${SPACARE_PRICING.trialDays} hari) tanpa perlu membayar di awal. Setelah masa coba berakhir, pemakaian memerlukan langganan aktif.</li>
  <li>Langganan tidak diperpanjang otomatis; Anda memperpanjang sendiri sebelum masa aktif habis. Setelah masa aktif dan masa tenggang yang ditampilkan di aplikasi habis, aplikasi terkunci sampai langganan diperpanjang. Data Anda tetap tersimpan.</li>
  <li>Kami dapat mengubah harga paket. Perubahan tidak berlaku untuk masa aktif yang sudah dibayar.</li>
  <li>Pembayaran langganan tidak dapat dikembalikan, kecuali terjadi pembayaran ganda atau kesalahan sistem dari pihak kami. Ajukan lewat ${EMAIL}.</li>
  <li>Voucher dan program referal, bila ada, berlaku sesuai ketentuan yang ditampilkan di aplikasi dan tidak dapat ditukar dengan uang.</li>
</ul>`,
  },
  {
    id: 'pembayaran-pelanggan',
    title: 'Pembayaran pelanggan, saldo, dan penarikan',
    html: `<ul>
  <li>Pembayaran QRIS dari pelanggan Anda diproses oleh mitra penyedia jasa pembayaran berizin. Biaya transaksi dan biaya penarikan ditampilkan di aplikasi.</li>
  <li>Dana QRIS dapat ditarik setelah masa settlement yang ditampilkan di aplikasi, hanya ke rekening atau e-wallet yang Anda daftarkan. Pastikan data rekening benar; kesalahan data rekening menjadi tanggung jawab Anda.</li>
  <li>Kami dapat menunda atau menolak transaksi atau penarikan yang mencurigakan, atau bila diminta oleh mitra pembayaran atau aturan hukum.</li>
  <li>Pembayaran tunai dicatat oleh Anda sendiri dan tidak melalui PosCare.</li>
</ul>`,
  },
  {
    id: 'data-pelanggan',
    title: 'Data usaha dan data pelanggan Anda',
    html: `<p>Data usaha dan data pelanggan yang Anda masukkan adalah milik dan tanggung jawab Anda. Kami memprosesnya hanya untuk menjalankan layanan, sesuai ${link('/privasi', 'Kebijakan Privasi')}.</p>
<ul>
  <li>Anda wajib memperoleh persetujuan pelanggan (untuk anak, dari orang tua atau walinya) sebelum menyimpan datanya, dan memakainya hanya untuk keperluan usaha Anda.</li>
  <li>Fitur khusus industri, seperti catatan treatment di SpaCare, adalah catatan layanan. PosCare dan produknya bukan layanan kesehatan dan tidak memberi diagnosis atau saran medis.</li>
</ul>`,
  },
  {
    id: 'larangan',
    title: 'Penggunaan yang dilarang',
    html: `<ul>
  <li>Transaksi fiktif, pencucian uang, atau kegiatan lain yang melanggar hukum.</li>
  <li>Menjual barang atau jasa terlarang melalui katalog atau QRIS.</li>
  <li>Mencoba mengakses data usaha lain, mengganggu, atau membebani sistem.</li>
  <li>Menyalin, menjual kembali, atau merekayasa balik situs atau aplikasi.</li>
</ul>`,
  },
  {
    id: 'hki',
    title: 'Hak kekayaan intelektual',
    html: `<p>Nama, logo, dan tampilan PosCare, SpaCare, LaundryCare, SportCare, dan RetailCare, serta perangkat lunaknya, adalah milik ${SITE.company}. Anda tidak boleh memakainya tanpa izin tertulis, kecuali untuk menyebut bahwa usaha Anda memakai produk PosCare.</p>`,
  },
  {
    id: 'penghentian',
    title: 'Penangguhan dan penutupan akun',
    html: `<p>Kami dapat menangguhkan atau menutup akun yang melanggar ketentuan ini, dengan pemberitahuan bila memungkinkan. Saldo yang sah tetap dapat ditarik, kecuali ditahan karena kewajiban hukum.</p>
<p>Anda dapat meminta penutupan akun lewat ${EMAIL}. Catatan keuangan tetap kami simpan selama diwajibkan hukum.</p>`,
  },
  {
    id: 'tanggung-jawab',
    title: 'Ketersediaan layanan dan batasan tanggung jawab',
    html: `<ul>
  <li>Kami berupaya menjaga layanan tetap berjalan dan data aman, termasuk cadangan berkala, tetapi layanan dapat terganggu karena pemeliharaan, gangguan internet, atau gangguan pada mitra seperti penyedia pembayaran.</li>
  <li>Sejauh diizinkan hukum, kami tidak bertanggung jawab atas kerugian tidak langsung, kehilangan keuntungan, atau kerugian karena penggunaan yang tidak sesuai ketentuan ini.</li>
  <li>Total tanggung jawab kami paling banyak sebesar biaya langganan yang Anda bayar dalam 3 bulan terakhir untuk produk terkait.</li>
</ul>`,
  },
  {
    id: 'perubahan',
    title: 'Perubahan ketentuan',
    html: `<p>Kami dapat memperbarui ketentuan ini. Perubahan penting akan diberitahukan lewat situs, aplikasi, atau email sebelum berlaku. Memakai produk PosCare setelah perubahan berlaku berarti Anda menyetujuinya.</p>`,
  },
  {
    id: 'hukum',
    title: 'Hukum yang berlaku',
    html: `<p>Ketentuan ini tunduk pada hukum Republik Indonesia. Perselisihan diselesaikan lebih dulu secara musyawarah; bila tidak tercapai, melalui pengadilan negeri yang berwenang di Indonesia.</p>`,
  },
  {
    id: 'kontak',
    title: 'Kontak',
    html: `<p>Pertanyaan, keluhan, atau permintaan terkait ketentuan ini dapat dikirim ke ${EMAIL} atau ${WHATSAPP}.</p>
<p>${OPERATOR}.</p>`,
  },
];
