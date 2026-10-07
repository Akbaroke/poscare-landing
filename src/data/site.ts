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
} as const;

export const SPACARE_URL = 'https://spa.poscare.id';
export const SPACARE_LOGIN_URL = `${SPACARE_URL}/login`;
export const SPACARE_REGISTER_URL = `${SPACARE_URL}/register`;

/** WhatsApp chat with a prefilled message: the main contact channel for owners. */
export function whatsapp(text: string): string {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
