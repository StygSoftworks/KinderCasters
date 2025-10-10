import { Mail, Globe } from 'lucide-react';
import { businessInfo } from '../config/businessInfo';

interface NAPInfoProps {
  variant?: 'full' | 'compact' | 'inline';
  showEmail?: boolean;
  className?: string;
}

export default function NAPInfo({ variant = 'full', showEmail = true, className = '' }: NAPInfoProps) {
  const { name, contact } = businessInfo;

  if (variant === 'inline') {
    return (
      <div className={`text-sm ${className}`}>
        <span itemProp="name">{name}</span>
        {' | '}
        <span>Online Business - Worldwide</span>
        {showEmail && (
          <>
            {' | '}
            <a href={`mailto:${contact.email}`} itemProp="email" className="hover:underline">
              {contact.email}
            </a>
          </>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`space-y-2 ${className}`} itemScope itemType="https://schema.org/Organization">
        <div className="font-bold" itemProp="name">{name}</div>
        <div className="text-sm text-gray-600">
          Online Business - Available Worldwide
        </div>
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
        <div className="flex items-start gap-3">
          <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <div className="font-medium">Online Business</div>
            <div className="text-gray-600">Available Worldwide, 24/7</div>
          </div>
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
