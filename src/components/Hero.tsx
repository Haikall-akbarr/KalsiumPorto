import Image from "next/image";
import { IoDownloadOutline } from "react-icons/io5";

export default function Hero() {
  return (
    <section id="home" className="section hero" aria-label="home">
      <div className="container">
        <div className="hero-banner">
          <Image
            src="/assets/images/profil.jpg"
            width={500}
            height={500}
            alt="Haekal Akbar"
            className="img-cover"
            priority
            style={{ width: "100%", height: "100%" }}
          />
        </div>

        <div className="hero-content">
          <h1 className="h1 hero-title">Haekal Akbar</h1>
          <p className="hero-subtitle">Creative Web & App Developer</p>
          <p className="section-text">
            Hi, I’m Haekal Akbar and I am a creative web & app developer who dreams of making the world a better place by creating captivating products.
          </p>
          <a href="#" className="btn has-before">
            <span className="span">Download CV</span>
            <IoDownloadOutline aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
