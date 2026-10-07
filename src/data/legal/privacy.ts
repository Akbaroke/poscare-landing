import { EMAIL, link, OPERATOR, SPACARE_PRIVACY, WHATSAPP, type LegalSection } from '.';

export const PRIVACY_INTRO = `<p>Kebijakan ini menjelaskan data apa yang dikumpulkan PosCare, untuk apa dipakai, siapa yang menerimanya, dan hak Anda atas data tersebut. PosCare dikelola oleh ${OPERATOR} ("kami").</p>`;

/** Plain-language highlights shown above the full text; the sections below are what applies. */
export const PRIVACY_SUMMARY: string[] = [
  'Kami tidak menjual data dan tidak memakai data pelanggan Anda untuk iklan.',
  'Situs poscare.id tidak memakai cookie atau pelacak pihak ketiga.',
  'Data pelanggan yang Anda masukkan adalah milik Anda; kami hanya memprosesnya untuk menjalankan layanan.',
  'Anda bisa meminta salinan, perbaikan, atau penghapusan data kapan saja.',
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: 'cakupan',
    title: 'Cakupan',
    html: `<p>Kebijakan ini berlaku untuk:</p>
<ul>
  <li><strong>Situs poscare.id</strong>, halaman informasi tentang PosCare dan solusinya.</li>
  <li><strong>Produk PosCare</strong>, yaitu aplikasi untuk tiap jenis usaha yang dibangun di atas platform PosCare. Saat ini yang tersedia adalah SpaCare (spa.poscare.id); LaundryCare, SportCare, dan RetailCare segera hadir.</li>
</ul>
<p>Setiap produk dapat memiliki kebijakan privasi sendiri yang menjelaskan data khusus produk tersebut. Untuk SpaCare, baca ${SPACARE_PRIVACY}. Bila ada perbedaan, kebijakan produk yang berlaku untuk pemakaian produk itu.</p>`,
  },
  {
    id: 'situs',
    title: 'Data di situs poscare.id',
    html: `<p>Situs poscare.id dapat dibaca tanpa akun dan tanpa mengisi formulir.</p>
<ul>
  <li>Situs ini tidak memakai cookie, tidak memasang pelacak iklan, dan tidak memuat skrip atau font dari pihak ketiga.</li>
  <li>Seperti situs pada umumnya, penyedia hosting dapat mencatat data teknis secara otomatis (alamat IP, jenis browser, halaman yang dibuka, dan waktu akses) untuk keamanan dan menjaga situs tetap berjalan.</li>
  <li>Bila Anda menekan tombol <em>Kabari saya</em>, <em>Hubungi kami</em>, atau tombol WhatsApp lainnya, Anda diarahkan ke WhatsApp. Pesan yang Anda kirim, beserta nama dan nomor WhatsApp Anda, kami terima untuk menjawab pertanyaan atau mengabari Anda saat produk yang Anda minati tersedia.</li>
</ul>`,
  },
  {
    id: 'produk',
    title: 'Data saat memakai produk PosCare',
    html: `<p>Saat Anda mendaftar dan memakai produk PosCare, kami memproses data berikut:</p>
<ul>
  <li><strong>Akun:</strong> nama, email, password (disimpan dalam bentuk hash, tidak bisa dibaca), dan akun Google bila Anda masuk dengan Google.</li>
  <li><strong>Usaha:</strong> nama usaha, alamat, nomor WhatsApp, logo, serta layanan, produk, dan harga.</li>
  <li><strong>Data pelanggan yang Anda masukkan:</strong> misalnya nama, nomor HP, dan riwayat transaksi. Jenis data pelanggan lain bergantung pada produk; misalnya SpaCare juga menyimpan data anak dan catatan treatment.</li>
  <li><strong>Transaksi dan keuangan:</strong> penjualan, pembayaran, saldo, langganan, serta rekening atau e-wallet tujuan penarikan.</li>
  <li><strong>Teknis:</strong> alamat IP, jenis perangkat dan browser, serta catatan aktivitas untuk keamanan (misalnya waktu masuk).</li>
</ul>`,
  },
  {
    id: 'tujuan',
    title: 'Untuk apa data dipakai',
    html: `<ul>
  <li>Menjalankan fitur produk: pencatatan, kasir, pembayaran, laporan, katalog, dan penarikan saldo.</li>
  <li>Verifikasi akun, keamanan, serta pencegahan penipuan dan penyalahgunaan.</li>
  <li>Mengirim informasi penting: kode verifikasi, pengingat langganan, dan informasi pembayaran.</li>
  <li>Menjawab pertanyaan, dukungan pelanggan, dan perbaikan layanan.</li>
  <li>Mengabari Anda tentang produk PosCare yang Anda minta, misalnya saat LaundryCare tersedia.</li>
  <li>Memenuhi kewajiban hukum, misalnya pencatatan keuangan.</li>
</ul>
<p>Kami tidak menjual data dan tidak memakai data pelanggan Anda untuk iklan.</p>`,
  },
  {
    id: 'peran',
    title: 'Peran kami atas data pelanggan Anda',
    html: `<p>Untuk data pelanggan yang Anda masukkan ke produk PosCare, Anda adalah pengendali data dan kami adalah prosesor yang memproses data itu atas nama Anda, hanya untuk menjalankan layanan.</p>
<p>Anda bertanggung jawab memperoleh persetujuan pelanggan Anda sebelum menyimpan datanya, sesuai ${link('/syarat', 'Syarat &amp; Ketentuan')}.</p>`,
  },
  {
    id: 'berbagi',
    title: 'Pihak yang menerima data',
    html: `<p>Data hanya dibagikan kepada mitra yang membantu layanan, sebatas yang diperlukan:</p>
<ul>
  <li>Mitra penyedia jasa pembayaran berizin, untuk memproses pembayaran QRIS dan penarikan saldo.</li>
  <li>Penyedia layanan email, untuk mengirim email dari aplikasi.</li>
  <li>Google, bila Anda memilih masuk dengan Google.</li>
  <li>WhatsApp (Meta), bila Anda menghubungi kami lewat WhatsApp.</li>
  <li>Penyedia hosting, jaringan, dan server, untuk menjalankan dan menyimpan situs dan aplikasi.</li>
</ul>
<p>Nama mitra untuk tiap produk dijelaskan di kebijakan privasi produk tersebut. Sebagian mitra dapat memproses data di luar Indonesia; kami memilih mitra yang menjaga keamanan data dengan standar yang memadai. Data juga dapat diberikan kepada pihak berwenang bila diwajibkan hukum.</p>
<p>Katalog online di produk PosCare hanya menampilkan informasi usaha yang Anda pilih untuk dipublikasikan. Data pelanggan tidak pernah ditampilkan di katalog.</p>`,
  },
  {
    id: 'penyimpanan',
    title: 'Lama penyimpanan',
    html: `<ul>
  <li>Data akun dan data produk disimpan selama akun Anda aktif. Setelah akun ditutup, data dihapus atau dianonimkan, kecuali catatan yang wajib disimpan lebih lama menurut hukum, seperti catatan keuangan.</li>
  <li>Percakapan WhatsApp dan email disimpan selama diperlukan untuk menindaklanjuti permintaan Anda.</li>
  <li>Cadangan data dihapus mengikuti jadwal rotasinya.</li>
</ul>`,
  },
  {
    id: 'keamanan',
    title: 'Keamanan',
    html: `<ul>
  <li>Koneksi terenkripsi (HTTPS) dan password yang disimpan sebagai hash.</li>
  <li>Data tiap usaha terpisah; usaha lain tidak bisa melihat data Anda.</li>
  <li>Akses tim kami dibatasi, memakai verifikasi dua langkah, dan tindakan admin tercatat.</li>
  <li>Data sensitif seperti nomor HP tidak dicatat di log sistem.</li>
</ul>`,
  },
  {
    id: 'hak',
    title: 'Hak Anda',
    html: `<p>Sesuai UU No. 27 Tahun 2022 tentang Pelindungan Data Pribadi, Anda berhak:</p>
<ul>
  <li>mendapat informasi dan salinan data pribadi Anda;</li>
  <li>memperbaiki data yang salah;</li>
  <li>meminta penghapusan data dan menarik persetujuan;</li>
  <li>mengajukan keberatan atas pemrosesan tertentu.</li>
</ul>
<p>Sebagian data bisa Anda ubah langsung di aplikasi. Untuk permintaan lain, hubungi ${EMAIL} atau ${WHATSAPP}. Kami menanggapi paling lambat 3 x 24 jam. Pelanggan Anda yang ingin memakai haknya atas data mereka sebaiknya menghubungi Anda sebagai pemilik usaha; kami akan membantu Anda memenuhinya.</p>`,
  },
  {
    id: 'cookie',
    title: 'Cookie dan penyimpanan di perangkat',
    html: `<p>Situs poscare.id tidak memakai cookie. Produk PosCare memakai cookie yang diperlukan agar Anda tetap masuk, serta penyimpanan lokal browser untuk preferensi dan data sementara (misalnya keranjang kasir). Kami tidak memakai cookie iklan atau pelacak pihak ketiga.</p>`,
  },
  {
    id: 'anak',
    title: 'Pengguna dan data anak',
    html: `<p>Produk PosCare ditujukan untuk pemilik usaha berusia minimal 18 tahun. Data anak hanya boleh dimasukkan oleh pemilik usaha atas persetujuan orang tua atau wali, dan hanya untuk keperluan layanan usaha tersebut.</p>`,
  },
  {
    id: 'perubahan',
    title: 'Perubahan kebijakan',
    html: `<p>Kebijakan ini dapat diperbarui. Perubahan penting akan diberitahukan lewat situs, aplikasi, atau email sebelum berlaku, dan tanggal berlaku di atas akan diperbarui.</p>`,
  },
  {
    id: 'kontak',
    title: 'Kontak',
    html: `<p>Pertanyaan atau permintaan terkait data pribadi dapat dikirim ke ${EMAIL} atau ${WHATSAPP}.</p>
<p>${OPERATOR}.</p>`,
  },
];
