"use client";

import { useState, useEffect } from "react";

export default function ScrollButton({ targetRef }) {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (!targetRef.current) return;

      const threshold = targetRef.current.offsetTop - 50;
      // hide once we've scrolled past the element, show again above it
      setVisible(window.scrollY < threshold);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [targetRef]);

  if(!visible) return null;
  
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 block md:hidden">
      <button
        onClick={handleClick}
        className="p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
