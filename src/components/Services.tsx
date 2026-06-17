"use client";

import { useState, useEffect, useRef } from "react";
import {
  IoDesktopOutline,
  IoPodiumOutline,
  IoBasketOutline,
  IoColorFilterOutline,
  IoMegaphoneOutline,
  IoChatbubblesOutline,
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
      title: "Website Design",
      text: "We design modern, responsive, and intuitive website interfaces tailored to user and business goals.",
      icon: IoDesktopOutline,
    },
    {
      num: "02",
      title: "SEO Marketing",
      text: "Optimize search engine performance to drive qualified organic traffic to your application or landing page.",
      icon: IoPodiumOutline,
    },
    {
      num: "03",
      title: "eCommerce",
      text: "Develop stable, feature-rich online shopping portals with smooth checkout flows and safe transactions.",
      icon: IoBasketOutline,
    },
    {
      num: "04",
      title: "Graphic Design",
      text: "Craft outstanding corporate brand identities, logos, style guidelines, and creative digital assets.",
      icon: IoColorFilterOutline,
    },
    {
      num: "05",
      title: "Digital Marketing",
      text: "Deploy targeted campaign structures that expand brand footprint and boost conversions.",
      icon: IoMegaphoneOutline,
    },
    {
      num: "06",
      title: "Social Media",
      text: "Manage engaging content streams and active community interactions across all major social networks.",
      icon: IoChatbubblesOutline,
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
            <p className="section-subtitle">Services That I Provide</p>
            <h2 className="h2 section-title" id="service-label">Services</h2>
          </div>
          <p className="section-text">
            I offer a wide array of digital solutions including custom responsive website architecture, strategic SEO positioning, and creative graphics to elevate your product experience and online presence.
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
