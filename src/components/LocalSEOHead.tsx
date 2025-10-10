import { useEffect } from 'react';
import { businessInfo } from '../config/businessInfo';

interface LocalSEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export default function LocalSEOHead({
  title = businessInfo.name,
  description = businessInfo.description,
  keywords = businessInfo.keywords,
  ogImage = `${businessInfo.contact.website}/og-image.png`,
  canonical = businessInfo.contact.website
}: LocalSEOHeadProps) {
  useEffect(() => {
    const fullTitle = title.includes(businessInfo.name)
      ? title
      : `${title} | ${businessInfo.name}`;

    document.title = fullTitle;

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    setMetaTag('description', description);
    setMetaTag('keywords', keywords.join(', '));

    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', canonical, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:locale', 'en_US', true);
    setMetaTag('og:site_name', businessInfo.name, true);

    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    setMetaTag('contact', businessInfo.contact.email);

    setLinkTag('canonical', canonical);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}
