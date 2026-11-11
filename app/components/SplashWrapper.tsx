'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SplashWrapper({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="splash-container">
        <div className="splash-content">
        {/* Garis Animasi */}
        <div className="splash-line" id="splash-line-r"></div>
        <div className="splash-line" id="splash-line-l"></div>

        {/* Wadah Logo */}
        <div id="logo-container">
          <Image 
            id="logo-splash"
            src="/assets/logo.png" 
            alt="Logo IMM" 
            width={80} 
            height={80} 
            priority
          />
        </div>

        {/* Header Teks Utama */}
        <div id="splash-header">
          <h1 className="splash-header-text">IMM</h1>
        </div>

        {/* Sub-deskripsi */}
        <div id="splash-text">
         FAKULTAS SAINS & TEKNOLOGI
        </div>

        {/* Status Loading Teks Berkedip */}
        <div id="splash-loading">
          Memuat
          <span id="splash-loading-1">.</span>
          <span id="splash-loading-2">.</span>
        </div>
        </div>
      </div>
    );
  }

  
  return <div className="w-full flex flex-col flex-1">{children}</div>;
}