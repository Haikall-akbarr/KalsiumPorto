"use client";

import { useEffect, useState, useCallback } from "react";
import { IoChevronForwardOutline, IoMailOutline } from "react-icons/io5";

export default function Hero() {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(150);

  const toRotate = constToRotate;

  const tick = useCallback(() => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(1500); // Pause on full text
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(150);
    }
  }, [isDeleting, loopNum, text, toRotate]);

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [delta, tick]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <section id="home" className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-content">
          <p className="section-subtitle">Hello World</p>
          <h1 className="h1 hero-title glow-text">Hi, I&apos;m M. Haikal Akbar</h1>
          
          <div className="hero-subtitle-container">
            <span className="hero-subtitle">
              {text}
              <span className="typewriter-cursor">_</span>
            </span>
          </div>

          <p className="section-text">
            Saya mahasiswa Teknik Informatika di Politeknik Negeri Banjarmasin yang fokus pada pengembangan aplikasi Full-Stack Web dan Mobile modern, serta pengintegrasian sistem cerdas (AI Integration).
          </p>

          <div className="hero-actions">
            <a
              href="#portfolio"
              className="btn"
              onClick={(e) => handleScrollTo(e, "portfolio")}
            >
              <span>View My Work</span>
              <IoChevronForwardOutline size={16} />
            </a>
            <a
              href="#contact"
              className="btn secondary"
              onClick={(e) => handleScrollTo(e, "contact")}
            >
              <span>Contact Me</span>
              <IoMailOutline size={16} />
            </a>
          </div>
        </div>

        <div className="hero-graphic">
          <div className="hero-graphic-box">
            <div className="hero-graphic-code">
              {`const developer = {
  name: "M. Haikal Akbar",
  role: "Full-Stack Web & Mobile",
  origin: "Banjarmasin, Indonesia",
  education: {
    college: "Politeknik Negeri Banjarmasin",
    major: "D3 Teknik Informatika",
    status: "Final Year Student"
  },
  techStack: {
    mobile: ["Flutter", "Dart"],
    web: ["React", "Next.js", "TypeScript"],
    backend: ["Firebase", "Supabase"],
    ai: ["Gemini API", "Claude"]
  },
  interests: [
    "Coffee Coding",
    "Motorcycle Maintenance",
    "Music Festivals",
    "Stock Analysis"
  ]
};`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const constToRotate = [
  "Full-Stack Web & Mobile Developer",
  "Informatics Engineering Student",
  "AI Integration Enthusiast",
];
