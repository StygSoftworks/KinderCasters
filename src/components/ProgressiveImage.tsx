import { useState, useEffect } from 'react';
import { ImageOff } from 'lucide-react';

interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderColor?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  placeholderColor = 'bg-gray-200'
}: ProgressiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
    };

    img.onerror = () => {
      setHasError(true);
    };

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  if (hasError) {
    return (
      <div
        className={`${className} ${placeholderColor} flex items-center justify-center`}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <div className="text-center p-4">
          <ImageOff className="w-8 h-8 mx-auto text-gray-400 mb-2" aria-hidden="true" />
          <p className="text-sm text-gray-500">Image unavailable</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && (
        <div
          className={`${className} ${placeholderColor} animate-pulse`}
          aria-hidden="true"
        />
      )}
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0 absolute inset-0'
          }`}
          loading="lazy"
        />
      )}
    </div>
  );
}
