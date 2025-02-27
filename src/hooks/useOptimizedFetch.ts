import { useState, useEffect } from 'react';

interface CacheItem<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheItem<any>>();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export function useOptimizedFetch<T>(url: string, options?: RequestInit) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check cache first
        const cachedData = cache.get(url);
        if (cachedData && Date.now() - cachedData.timestamp < CACHE_DURATION) {
          setData(cachedData.data);
          setLoading(false);
          return;
        }

        const response = await fetch(url, {
          ...options,
          headers: {
            'Accept': 'application/json',
            'Cache-Control': 'no-cache',
            ...options?.headers,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        
        // Update cache
        cache.set(url, {
          data: result,
          timestamp: Date.now(),
        });

        setData(result);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options]);

  return { data, error, loading };
} 