import { SPACARE_LANDING_URL, whatsapp } from './site';

/**
 * The PosCare product family. When a vertical launches, set `status: 'available'` and its
 * subdomain `href`; the hero diagram, product cards, and footer all read from here.
 */
export type ProductStatus = 'available' | 'coming-soon';

export interface Product {
  id: 'spa' | 'laundry' | 'sport' | 'retail';
  name: string;
  /** Name split at the camel-case join so narrow tiles wrap cleanly. */
  nameParts: [string, string];
  industry: string;
  summary: string;
  audience?: string;
  status: ProductStatus;
  href: string;
  cta: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'spa',
    name: 'SpaCare',
    nameParts: ['Spa', 'Care'],
    industry: 'Bisnis spa',
    summary: 'Solusi untuk bisnis spa, dari data pelanggan dan catatan treatment sampai kasir.',
    audience: 'Baby spa · Mom spa · Spa dewasa · Treatment',
    status: 'available',
    href: SPACARE_LANDING_URL,
    cta: 'Buka SpaCare',
  },
  {
    id: 'laundry',
    name: 'LaundryCare',
    nameParts: ['Laundry', 'Care'],
    industry: 'Bisnis laundry',
    summary: 'Solusi operasional untuk bisnis laundry.',
    status: 'coming-soon',
    href: whatsapp(
      'Halo PosCare, saya tertarik dengan LaundryCare. Tolong kabari saya saat sudah tersedia. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
  {
    id: 'sport',
    name: 'SportCare',
    nameParts: ['Sport', 'Care'],
    industry: 'Bisnis olahraga',
    summary: 'Solusi operasional untuk bisnis olahraga.',
    status: 'coming-soon',
    href: whatsapp(
      'Halo PosCare, saya tertarik dengan SportCare. Tolong kabari saya saat sudah tersedia. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
  {
    id: 'retail',
    name: 'RetailCare',
    nameParts: ['Retail', 'Care'],
    industry: 'Bisnis retail',
    summary: 'Solusi operasional untuk bisnis retail.',
    status: 'coming-soon',
    href: whatsapp(
      'Halo PosCare, saya tertarik dengan RetailCare. Tolong kabari saya saat sudah tersedia. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
];

export const STATUS_LABEL: Record<ProductStatus, string> = {
  available: 'Tersedia',
  'coming-soon': 'Segera hadir',
};

export const isExternal = (href: string) => href.startsWith('http');
