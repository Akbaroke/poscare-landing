export const SITE = {
  name: 'PosCare',
  domain: 'poscare.id',
  url: 'https://poscare.id',
  tagline: 'Business Operations Platform',
  description:
    'PosCare adalah platform operasional bisnis dengan solusi khusus untuk setiap industri: pelanggan, transaksi, pembayaran, hingga laporan dalam satu alur.',
  email: 'support@poscare.id',
} as const;

export const SPACARE_URL = 'https://spa.poscare.id';
export const SPACARE_LOGIN_URL = `${SPACARE_URL}/login`;
export const SPACARE_REGISTER_URL = `${SPACARE_URL}/register`;

/** Prefilled email, so a "tell me" click arrives with context. */
export function mailto(subject: string, body = ''): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  // URLSearchParams encodes spaces as "+", which mail clients show literally.
  return `mailto:${SITE.email}?${params.toString().replaceAll('+', '%20')}`;
}
