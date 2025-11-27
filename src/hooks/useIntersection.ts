import { useEffect, useRef } from 'react';

export function useIntersection<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const target = entry.target as HTMLElement;
          target.style.transition =
            'opacity 0.6s ease-out, transform 0.8s ease-out';

          if (entry.isIntersecting) {
            target.style.opacity = '1';
            target.style.transform = 'translateY(0)';
          } else {
            target.style.opacity = '0';
            target.style.transform = 'translateY(50px)';
          }
        }
      },
      {
        threshold: 0.1,              
        rootMargin: '0px 0px -80px 0px', 
      }
    );

    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(50px)';
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return ref;
}
