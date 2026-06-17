"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setLoaded(true);
      document.body.classList.add("loaded");
      
      const timer = setTimeout(() => {
        setRemoved(true);
      }, 1000);
      return () => clearTimeout(timer);
    };

    // Trigger load state after component mount
    const mountTimer = setTimeout(handleLoad, 800);

    return () => {
      clearTimeout(mountTimer);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="circle"></div>
    </div>
  );
}
