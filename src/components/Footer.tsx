import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-list" style={{ gridColumn: "span 2" }}>
          <p className="footer-text-accent">
            Let&apos;s build something together <span>over a cup of coffee.</span>
          </p>
          <a href="mailto:haikalakbar.dev@gmail.com" className="footer-link" style={{ fontSize: "1.8rem", color: "var(--color-accent)", fontWeight: 700 }}>
            haikalakbar.dev@gmail.com
          </a>
        </div>

        <ul className="social-list">
          <li>
            <a href="https://github.com/Haikall-akbarr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <IoLogoGithub />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <IoLogoLinkedin />
            </a>
          </li>
          <li>
            <a href="mailto:haikalakbar.dev@gmail.com" className="social-link" aria-label="Email">
              <IoMailOutline />
            </a>
          </li>
        </ul>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} M. Haikal Akbar. All rights reserved.</p>
      </div>
    </footer>
  );
}
