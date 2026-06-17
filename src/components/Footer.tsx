import { IoLogoDribbble, IoLogoInstagram, IoLogoSkype, IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Get in touch</p>
          </li>
          <li>
            <a href="mailto:info@haekalakbar.com" className="footer-link">
              info@haekalakbar.com
            </a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <p className="h4 footer-list-title">Locations</p>
          </li>
          <li>
            <span className="footer-link">Jakarta, Indonesia</span>
          </li>
        </ul>

        <ul className="social-list">
          <li>
            <a href="#" className="social-link" aria-label="Dribbble">
              <IoLogoDribbble />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="Instagram">
              <IoLogoInstagram />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="Skype">
              <IoLogoSkype />
            </a>
          </li>
          <li>
            <a href="#" className="social-link" aria-label="LinkedIn">
              <IoLogoLinkedin />
            </a>
          </li>
        </ul>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} Haekal Akbar. All rights reserved.</p>
      </div>
    </footer>
  );
}
