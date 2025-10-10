import { useEffect } from 'react';
import { businessInfo } from '../config/businessInfo';

export default function LocalBusinessSchema() {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": businessInfo.name,
      "legalName": businessInfo.legalName,
      "description": businessInfo.description,
      "url": businessInfo.contact.website,
      "logo": `${businessInfo.contact.website}/logo.png`,
      "image": `${businessInfo.contact.website}/og-image.png`,
      "foundingDate": businessInfo.foundingDate,
      "priceRange": businessInfo.priceRange,

      "address": {
        "@type": "PostalAddress",
        "streetAddress": businessInfo.address.streetAddress,
        "addressLocality": businessInfo.address.addressLocality,
        "addressRegion": businessInfo.address.addressRegion,
        "postalCode": businessInfo.address.postalCode,
        "addressCountry": businessInfo.address.addressCountry
      },

      "geo": {
        "@type": "GeoCoordinates",
        "latitude": businessInfo.geo.latitude,
        "longitude": businessInfo.geo.longitude
      },

      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": businessInfo.contact.phone,
        "contactType": "customer service",
        "email": businessInfo.contact.email,
        "availableLanguage": ["English"],
        "areaServed": businessInfo.servedAreas
      },

      "sameAs": [
        businessInfo.social.facebook,
        businessInfo.social.twitter,
        businessInfo.social.instagram,
        businessInfo.social.youtube
      ],

      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        }
      ],

      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Educational Services",
        "itemListElement": businessInfo.services.map(service => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }))
      },

      "areaServed": businessInfo.servedAreas.map(area => ({
        "@type": "City",
        "name": area
      })),

      "keywords": businessInfo.keywords.join(", ")
    };

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(schema);
    } else {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
}
