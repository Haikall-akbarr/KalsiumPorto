"use client";

import { useEffect, useState } from "react";

export default function Skills() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const skills = [
    { name: "Design", value: 90 },
    { name: "Branding", value: 80 },
    { name: "Web Design", value: 95 },
    { name: "Social Media", value: 85 },
  ];

  return (
    <section className="section skills" aria-label="our skills">
      <div className="container">
        <p className="section-subtitle">I Make The Future</p>
        <h2 className="h2 section-title">I Develop & Create Digital Future.</h2>

        <div className="skills-wrapper">
          <div>
            <p className="section-text">
              Every detail is meticulously crafted to ensure the final product stands out visually and functions flawlessly. Design meets execution to deliver digital excellence.
            </p>
            <p className="section-text">
              By prioritizing clean structures, elegant visual balance, and modern design semantics, I turn creative visions into scalable software products.
            </p>
            <a href="mailto:info@haekalakbar.com" className="btn has-before">
              info@haekalakbar.com
            </a>
          </div>

          <div>
            <ul className="skills-list">
              {skills.map((skill, idx) => (
                <li key={idx}>
                  <div className="progress-wrapper">
                    <p className="progress-label">{skill.name}</p>
                    <data className="progress-value" value={skill.value}>
                      {skill.value}%
                    </data>
                  </div>
                  <div className="progress-bg">
                    <div
                      className="progress"
                      style={{ width: animate ? `${skill.value}%` : "0%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
