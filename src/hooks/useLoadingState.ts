import { useState, useEffect } from 'react';

export function useLoadingState() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading resources
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500); // Add small delay before hiding
          return 100;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 100);

    // Ensure loading screen shows for at least 2 seconds
    const minLoadingTime = setTimeout(() => {
      setProgress(100);
    }, 2000);

    return () => {
      clearInterval(timer);
      clearTimeout(minLoadingTime);
    };
  }, []);

  return { isLoading, progress };
} 