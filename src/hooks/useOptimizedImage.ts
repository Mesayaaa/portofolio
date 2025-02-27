import { useState, useEffect } from 'react';

interface ImageOptions {
  quality?: number;
  blur?: boolean;
  priority?: boolean;
}

export function useOptimizedImage(src: string, options: ImageOptions = {}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [blurDataUrl, setBlurDataUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const img = new Image();
    
    if (options.blur) {
      // Generate low-quality blur placeholder
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = 40;
      canvas.height = 40;
      
      if (ctx) {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, 40, 40);
          setBlurDataUrl(canvas.toDataURL('image/jpeg', 0.1));
        };
      }
    }

    img.onload = () => {
      setLoaded(true);
      setError(null);
    };

    img.onerror = () => {
      setError(new Error('Failed to load image'));
      setLoaded(false);
    };

    if (options.priority) {
      img.fetchPriority = 'high';
      img.loading = 'eager';
    } else {
      img.loading = 'lazy';
    }

    img.src = src;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, options.blur, options.priority]);

  return {
    loaded,
    error,
    blurDataUrl,
    imgProps: {
      src,
      loading: options.priority ? 'eager' : 'lazy',
      quality: options.quality || 75,
      ...(blurDataUrl && {
        placeholder: 'blur',
        blurDataURL: blurDataUrl,
      }),
    },
  };
} 