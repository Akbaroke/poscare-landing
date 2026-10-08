export const SITE = {
  name: 'PosCare',
  domain: 'poscare.id',
  url: 'https://poscare.id',
  tagline: 'Business Operations Platform',
  description:
    'PosCare adalah platform operasional bisnis dengan solusi khusus untuk setiap industri: pelanggan, transaksi, pembayaran, hingga laporan dalam satu alur.',
  email: 'support@poscare.id',
  /** WhatsApp in international format (wa.me), and as people read it. */
  whatsapp: '6285144909320',
  whatsappDisplay: '0851-4490-9320',
  company: 'PT Akbar Teknologi Utama',
  city: 'Bekasi',
  country: 'Indonesia',
} as const;

/** SpaCare plan facts shown on the landing page (confirmed by the owner, Oct 2026). */
export const SPACARE_PRICING = {
  fromMonthly: 'Rp29.000',
  trialDays: 3,
} as const;

export const SPACARE_URL = 'https://spa.poscare.id';
/** SpaCare's product page: where every general "go to SpaCare" link points. */
export const SPACARE_LANDING_URL = `${SPACARE_URL}/landing`;
export const SPACARE_LOGIN_URL = `${SPACARE_URL}/login`;
export const SPACARE_REGISTER_URL = `${SPACARE_URL}/register`;

/** WhatsApp chat with a prefilled message: the main contact channel for owners. */
export function whatsapp(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
