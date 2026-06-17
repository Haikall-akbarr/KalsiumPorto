"use client";

import { useState, useEffect, useRef } from "react";
import {
  IoDesktopOutline,
  IoPhonePortraitOutline,
  IoCloudUploadOutline,
  IoHardwareChipOutline,
  IoGitBranchOutline,
  IoColorFilterOutline,
  IoArrowBack,
  IoArrowForward,
} from "react-icons/io5";

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);
  const [translatePx, setTranslatePx] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      num: "01",
      title: "Web Development",
      text: "Membangun aplikasi web modern, responsif, dan interaktif menggunakan React, Next.js, dan TypeScript.",
      icon: IoDesktopOutline,
    },
    {
      num: "02",
      title: "Mobile Development",
      text: "Mengembangkan aplikasi mobile multiplatform (Android & iOS) yang responsif menggunakan Flutter dan Dart.",
      icon: IoPhonePortraitOutline,
    },
    {
      num: "03",
      title: "Backend & Cloud",
      text: "Merancang arsitektur database, REST API, dan deployment cloud menggunakan Firebase, Supabase, dan Cloudflare.",
      icon: IoCloudUploadOutline,
    },
    {
      num: "04",
      title: "AI Integration",
      text: "Mengintegrasikan model kecerdasan buatan seperti Gemini API dan ChatGPT API ke dalam sistem aplikasi Anda.",
      icon: IoHardwareChipOutline,
    },
    {
      num: "05",
      title: "Version Control & DevOps",
      text: "Mengatur kolaborasi kode, automated deployment, dan alur kerja integrasi berkelanjutan menggunakan Git & GitHub.",
      icon: IoGitBranchOutline,
    },
    {
      num: "06",
      title: "UI/UX & Prototyping",
      text: "Merancang wireframe, desain interface yang intuitif, dan prototipe produk interaktif di Figma.",
      icon: IoColorFilterOutline,
    },
  ];

  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w < 575) {
        setVisibleItems(1);
      } else if (w < 992) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const totalSlidable = services.length - visibleItems;

  const moveSlider = (slidePos: number) => {
    if (containerRef.current && containerRef.current.children[slidePos]) {
      const child = containerRef.current.children[slidePos] as HTMLElement;
      setTranslatePx(child.offsetLeft);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextPos = prev >= totalSlidable ? 0 : prev + 1;
      moveSlider(nextPos);
      return nextPos;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevPos = prev <= 0 ? totalSlidable : prev - 1;
      moveSlider(prevPos);
      return prevPos;
    });
  };

  useEffect(() => {
    moveSlider(currentSlide);
  }, [currentSlide, visibleItems]);

  return (
    <section id="services" className="section service" aria-labelledby="service-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Layanan Yang Saya Sediakan</p>
            <h2 className="h2 section-title" id="service-label">Layanan</h2>
          </div>
          <p className="section-text">
            Saya menyediakan solusi digital mencakup pemrograman web modern, pengembangan aplikasi mobile multiplatform, desain sistem interface (UI/UX), hingga integrasi kecerdasan buatan.
          </p>
        </div>

        <div className="slider" style={{ "--slider-items": visibleItems, "--item-gap": "20px" } as React.CSSProperties}>
          <div
            className="slider-container"
            ref={containerRef}
            style={{
              transform: `translateX(-${translatePx}px)`,
            }}
          >
            {services.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div key={index} className="slider-item">
                  <div className="service-card">
                    <div className="card-icon">
                      <IconComp size={48} />
                    </div>
                    <h3 className="h3 card-title">{service.title}</h3>
                    <p className="card-text">{service.text}</p>
                    <span className="text-lg card-number">{service.num}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="slider-controls">
            <button
              className="slider-control prev"
              onClick={prevSlide}
              aria-label="Slide to previous item"
              disabled={totalSlidable <= 0}
            >
              <IoArrowBack />
            </button>
            <button
              className="slider-control next"
              onClick={nextSlide}
              aria-label="Slide to next item"
              disabled={totalSlidable <= 0}
            >
              <IoArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
