import { mailto, SPACARE_URL } from './site';

/**
 * The PosCare product family. When a vertical launches, set `status: 'available'` and its
 * subdomain `href`; the hero diagram, product cards, and footer all read from here.
 */
export type ProductStatus = 'available' | 'in-development';

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
    href: SPACARE_URL,
    cta: 'Buka SpaCare',
  },
  {
    id: 'laundry',
    name: 'LaundryCare',
    nameParts: ['Laundry', 'Care'],
    industry: 'Bisnis laundry',
    summary: 'Solusi operasional untuk bisnis laundry.',
    status: 'in-development',
    href: mailto(
      'Kabari saya: LaundryCare',
      'Halo PosCare, saya tertarik dengan LaundryCare. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
  {
    id: 'sport',
    name: 'SportCare',
    nameParts: ['Sport', 'Care'],
    industry: 'Bisnis olahraga',
    summary: 'Solusi operasional untuk bisnis olahraga.',
    status: 'in-development',
    href: mailto(
      'Kabari saya: SportCare',
      'Halo PosCare, saya tertarik dengan SportCare. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
  {
    id: 'retail',
    name: 'RetailCare',
    nameParts: ['Retail', 'Care'],
    industry: 'Bisnis retail',
    summary: 'Solusi operasional untuk bisnis retail.',
    status: 'in-development',
    href: mailto(
      'Kabari saya: RetailCare',
      'Halo PosCare, saya tertarik dengan RetailCare. Nama usaha saya: ',
    ),
    cta: 'Kabari saya',
  },
];

export const STATUS_LABEL: Record<ProductStatus, string> = {
  available: 'Tersedia',
  'in-development': 'Dalam pengembangan',
};

export const isExternal = (href: string) => href.startsWith('http');
