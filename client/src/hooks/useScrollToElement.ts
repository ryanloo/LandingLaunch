import { useCallback } from 'react';

export const useScrollToElement = () => {
  const scrollToElement = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for fixed header
        behavior: 'smooth',
      });
    }
  }, []);

  return scrollToElement;
};
