import React, { useState, useEffect, useRef, useCallback } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  end,
  duration = 2000,
  // Default duration to 2 seconds
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  // 1️⃣ Memoize so we can safely put this in deps
  const animateCount = useCallback(() => {
    let startTime: number;
    const startValue = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * (end - startValue) + startValue);
      setCount(currentCount);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [duration, end]);

  // 2️⃣ Use a single effect that observes the element
  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCount();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [animateCount]);  // ← animateCount is now a stable dependency

  return (
    <div ref={countRef} className={className}>
      {count}
      {suffix}
    </div>
  );
};
