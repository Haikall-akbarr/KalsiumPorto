"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add("nav-active");
    } else {
      document.body.classList.remove("nav-active");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.classList.remove("nav-active");

    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? "active" : ""}`}>
        <div className="container">
          <a href="#home" className="logo" onClick={(e) => handleLinkClick(e, "home")}>
            <Image
              src="/assets/images/logo.svg"
              width={170}
              height={40}
              alt="Pfolio home"
              priority
              style={{ width: "auto", height: "auto" }}
            />
          </a>

          <button
            className={`nav-toggle-btn ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="line line-1"></span>
            <span className="line line-2"></span>
          </button>

          <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <ul className="navbar-list">
              <li>
                <a href="#home" className="navbar-link" onClick={(e) => handleLinkClick(e, "home")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#resume" className="navbar-link" onClick={(e) => handleLinkClick(e, "resume")}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#services" className="navbar-link" onClick={(e) => handleLinkClick(e, "services")}>
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="navbar-link" onClick={(e) => handleLinkClick(e, "portfolio")}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#blog" className="navbar-link" onClick={(e) => handleLinkClick(e, "blog")}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="navbar-link" onClick={(e) => handleLinkClick(e, "contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div
            className={`overlay ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          ></div>
        </div>
      </header>
    </>
  );
}
