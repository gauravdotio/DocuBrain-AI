"use client";

import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight === 0) return;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent pointer-events-none" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-amberAccent-500 via-iris-500 to-amberAccent-400 shadow-glowAmber transition-[width] duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}
