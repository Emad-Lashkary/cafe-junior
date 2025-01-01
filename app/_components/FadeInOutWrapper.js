"use client";

import { useEffect, useState, useRef } from "react";
import clsx from "clsx";

function FadeInOutWrapper({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    if (wrapperRef.current) {
      observer.observe(wrapperRef.current);
    }

    return () => {
      if (wrapperRef.current) {
        observer.unobserve(wrapperRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={clsx(
        "transition-opacity duration-700",
        isVisible
          ? "opacity-100 animate-fadeIn z-10"
          : "opacity-0 animate-fadeOut"
      )}
    >
      {children}
    </div>
  );
}

export default FadeInOutWrapper;
