import { MapPin, Phone, Mail } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

interface NAPInfoProps {
  variant?: 'full' | 'compact' | 'inline';
  showEmail?: boolean;
  className?: string;
}

export default function NAPInfo({ variant = 'full', showEmail = true, className = '' }: NAPInfoProps) {
  const { name, address, contact } = businessInfo;

  if (variant === 'inline') {
    return (
      <div className={`text-sm ${className}`}>
        <span itemProp="name">{name}</span>
        {' | '}
        <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <span itemProp="streetAddress">{address.streetAddress}</span>,{' '}
          <span itemProp="addressLocality">{address.addressLocality}</span>,{' '}
          <span itemProp="addressRegion">{address.addressRegion}</span>{' '}
          <span itemProp="postalCode">{address.postalCode}</span>
        </span>
        {' | '}
        <a href={`tel:${contact.phone}`} itemProp="telephone" className="hover:underline">
          {contact.phone}
        </a>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`} itemScope itemType="https://schema.org/Organization">
        <div className="font-bold" itemProp="name">{name}</div>
        <div className="text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <div itemProp="streetAddress">{address.streetAddress}</div>
          <div>
            <span itemProp="addressLocality">{address.addressLocality}</span>,{' '}
            <span itemProp="addressRegion">{address.addressRegion}</span>{' '}
            <span itemProp="postalCode">{address.postalCode}</span>
          </div>
        </div>
        <a href={`tel:${contact.phone}`} itemProp="telephone" className="text-sm hover:underline block">
          {contact.phone}
        </a>
        {showEmail && (
          <a href={`mailto:${contact.email}`} itemProp="email" className="text-sm hover:underline block">
            {contact.email}
          </a>
        )}
      </div>
    );
  }

  return (
    <div className={`space-y-4 ${className}`} itemScope itemType="https://schema.org/Organization">
      <h3 className="text-xl font-bold text-gray-800" itemProp="name">{name}</h3>

      <div className="space-y-3">
        <div className="flex items-start gap-3" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
          <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <div itemProp="streetAddress">{address.streetAddress}</div>
            <div>
              <span itemProp="addressLocality">{address.addressLocality}</span>,{' '}
              <span itemProp="addressRegion">{address.addressRegion}</span>{' '}
              <span itemProp="postalCode">{address.postalCode}</span>
            </div>
            <div itemProp="addressCountry">{address.addressCountry}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
          <a
            href={`tel:${contact.phone}`}
            itemProp="telephone"
            className="hover:text-blue-600 transition-colors"
          >
            {contact.phone}
          </a>
        </div>

        {showEmail && (
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <a
              href={`mailto:${contact.email}`}
              itemProp="email"
              className="hover:text-blue-600 transition-colors"
            >
              {contact.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
