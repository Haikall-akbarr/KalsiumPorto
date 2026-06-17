"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoCafeOutline, IoGameControllerOutline, IoTrendingUpOutline, IoMusicalNotesOutline } from "react-icons/io5";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  artist: string;
  albumCoverUrl: string;
  songUrl: string;
  progressMs?: number;
  durationMs?: number;
}

export default function BeyondCode() {
  const [spotify, setSpotify] = useState<SpotifyData>({
    isPlaying: false,
    title: "Senja Teduh Menanti",
    artist: "Maliq & D'Essentials",
    albumCoverUrl: "",
    songUrl: "https://open.spotify.com",
  });

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        if (res.ok) {
          const data = await res.json();
          setSpotify(data);
        }
      } catch (err) {
        console.error("Failed to fetch Spotify status", err);
      }
    };

    fetchSpotify();
    // Poll every 15 seconds to fetch latest listening activity
    const interval = setInterval(fetchSpotify, 15000);
    return () => clearInterval(interval);
  }, []);

  const progressPercent = spotify.progressMs && spotify.durationMs
    ? (spotify.progressMs / spotify.durationMs) * 100
    : 45; // default fallback visual progress

  return (
    <section id="beyond" className="section beyond-code" aria-label="beyond code">
      <div className="container">
        <p className="section-subtitle">Di Luar Rutinitas Coding</p>
        <h2 className="h2 section-title">Gaya Hidup & Kepribadian</h2>

        <div className="beyond-bento-grid">
          {/* BOX 1: COFFEE & CODE */}
          <div className="bento-card bento-coffee">
            <div className="skill-category-title" style={{ border: "none", margin: 0, paddingBlockEnd: "10px" }}>
              <IoCafeOutline size={22} style={{ color: "var(--color-coffee)" }} />
              <span className="coffee-tag">Coffee & Code</span>
            </div>
            <p className="timeline-text" style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
              Bagi saya, coffee shop adalah tempat terbaik untuk memfokuskan pikiran. Saya sering menghabiskan waktu WFC (Work From Cafe) di kedai lokal Banjarmasin seperti <strong>GRAMME</strong>, <strong>Dua Asa</strong>, <strong>TUKU</strong>, atau <strong>Kopi Kenangan</strong> untuk menyusun arsitektur kode atau sekadar menikmati secangkir kopi hitam hangat.
            </p>
          </div>

          {/* BOX 2: GAMING & AUTOMOTIVE */}
          <div className="bento-card">
            <div className="skill-category-title" style={{ border: "none", margin: 0, paddingBlockEnd: "10px" }}>
              <IoGameControllerOutline size={22} style={{ color: "var(--color-accent-green)" }} />
              <span className="font-code" style={{ color: "var(--color-accent-green)", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Hobi & Otomotif</span>
            </div>
            <p className="timeline-text" style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
              Di kala senggang, saya menyukai game simulasi balap mobile seperti <em>FR Legends</em>, <em>Bussid</em>, atau <em>Traffic Rider</em>. Saya juga memiliki minat pada perawatan dan modifikasi motor harian saya (Yamaha NMAX) agar selalu prima untuk mendukung mobilitas perkuliahan.
            </p>
          </div>

          {/* BOX 3: SPOTIFY NOW PLAYING */}
          <div className="bento-card">
            <div className="skill-category-title" style={{ border: "none", margin: 0, paddingBlockEnd: "10px" }}>
              <IoMusicalNotesOutline size={22} style={{ color: "#1DB954" }} />
              <span className="font-code" style={{ color: "#1DB954", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>
                {spotify.isPlaying ? "Sedang Diputar" : "Terakhir Diputar"}
              </span>
            </div>
            <a 
              href={spotify.songUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="spotify-card"
              style={{ display: "flex", textDecoration: "none" }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1DB954" className="spotify-logo">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.894-1.007-.336.074-.67-.142-.744-.48-.074-.336.143-.67.48-.744 3.844-.877 7.14-.5 9.81 1.135.295.18.387.565.207.86zm1.224-2.72c-.227.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.075-1.185-.413.127-.847-.107-.974-.52-.127-.413.107-.846.52-.973 3.667-1.114 8.24-.574 11.343 1.334.367.226.487.707.26 1.074zm.107-2.85c-3.26-1.937-8.65-2.115-11.75-1.173-.5.15-1.025-.13-1.175-.63-.15-.5.13-1.026.63-1.175 3.585-1.09 9.525-.884 13.295 1.353.45.27.6.85.33 1.3-.27.45-.85.6-1.33.33z"/>
              </svg>
              <div className="spotify-img-holder" style={{ flexShrink: 0 }}>
                {spotify.albumCoverUrl ? (
                  <Image 
                    src={spotify.albumCoverUrl} 
                    alt="Album Cover" 
                    width={60} 
                    height={60} 
                    className="img-cover" 
                  />
                ) : (
                  <svg width="60" height="60" viewBox="0 0 60 60" style={{ backgroundColor: "#1c1c1c" }}>
                    <rect width="60" height="60" fill="#282828" />
                    <circle cx="30" cy="30" r="22" fill="#181818" stroke="#1DB954" strokeWidth="2" />
                    <circle cx="30" cy="30" r="8" fill="#282828" />
                  </svg>
                )}
              </div>
              <div className="spotify-info">
                <p className="spotify-track">{spotify.title}</p>
                <p className="spotify-artist">{spotify.artist}</p>
                <div className="spotify-progress-bar">
                  <div 
                    className="spotify-progress-active"
                    style={{ 
                      width: `${progressPercent}%`,
                      animation: spotify.isPlaying ? "spotifyPlay 4s linear infinite alternate" : "none" 
                    }}
                  ></div>
                </div>
              </div>
            </a>
          </div>

          {/* BOX 4: STOCK INVESTMENT CHART */}
          <div className="bento-card wide">
            <div className="skill-category-title" style={{ border: "none", margin: 0, paddingBlockEnd: "10px" }}>
              <IoTrendingUpOutline size={22} style={{ color: "var(--color-accent)" }} />
              <span className="font-code" style={{ color: "var(--color-accent)", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>Analisis Investasi & Dividen</span>
            </div>
            <p className="timeline-text" style={{ fontSize: "1.4rem", lineHeight: "1.6" }}>
              Selain teknologi, saya memiliki ketertarikan pada literasi finansial. Saya mempelajari analisis fundamental pasar saham Indonesia, memantau pergerakan harga komoditas, dan menghitung pertumbuhan dividen emiten (seperti PT Adaro Energy Indonesia Tbk).
            </p>
            
            {/* STYLIZED SVG CHART */}
            <svg className="stock-chart-svg" viewBox="0 0 300 100">
              <defs>
                <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="10" y1="20" x2="290" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="10" y1="50" x2="290" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              <line x1="10" y1="80" x2="290" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
              
              {/* Fill Area */}
              <path d="M 10,85 Q 60,70 110,65 T 210,35 T 290,15 L 290,85 Z" fill="url(#chartGlow)" />
              
              {/* Stock Trend Line */}
              <path d="M 10,85 Q 60,70 110,65 T 210,35 T 290,15" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" />
              
              {/* Dividend Payout Bars */}
              <rect x="50" y="70" width="8" height="15" fill="var(--color-accent-green)" opacity="0.6" rx="1" />
              <rect x="150" y="45" width="8" height="40" fill="var(--color-accent-green)" opacity="0.6" rx="1" />
              <rect x="250" y="25" width="8" height="60" fill="var(--color-accent-green)" opacity="0.8" rx="1" />
              
              {/* Labels */}
              <text x="12" y="94" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-code)">Q1</text>
              <text x="112" y="94" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-code)">Q2</text>
              <text x="212" y="94" fill="var(--text-secondary)" fontSize="8" fontFamily="var(--font-code)">Q3</text>
              <text x="268" y="94" fill="var(--color-accent-green)" fontSize="8" fontFamily="var(--font-code)">Dividen payout</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
