import { SITE, SPACARE_URL } from '../site';

/** Bump whenever either document changes in substance; shown as the effective date. */
export const LEGAL_EFFECTIVE_DATE = '2026-10-07';

export interface LegalSection {
  id: string;
  title: string;
  /** Trusted, hand-written HTML (paragraphs and lists). */
  html: string;
}

export const link = (href: string, text: string) =>
  `<a href="${href}"${href.startsWith('http') ? ' rel="noopener"' : ''}>${text}</a>`;

export const EMAIL = link(`mailto:${SITE.email}`, SITE.email);
export const WHATSAPP = link(`https://wa.me/${SITE.whatsapp}`, `WhatsApp ${SITE.whatsappDisplay}`);
export const SPACARE_PRIVACY = link(`${SPACARE_URL}/privacy`, 'Kebijakan Privasi SpaCare');
export const SPACARE_TERMS = link(`${SPACARE_URL}/terms`, 'Syarat & Ketentuan SpaCare');
export const OPERATOR = `${SITE.company}, ${SITE.city}, ${SITE.country}`;
