import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function Blog() {
  const blogs = [
    {
      title: "Integrasi Gemini API dalam Next.js 15",
      date: "15",
      monthYear: "Maret 2026",
      dateTime: "2026-03-15",
      text: "Panduan lengkap bagaimana mengintegrasikan Gemini API menggunakan SDK resmi Google GenAI ke dalam aplikasi berbasis Next.js untuk fitur AI dinamis.",
      image: "/assets/images/blog-1.jpg",
    },
    {
      title: "Membangun Platform Ekskursi Lokal BDJ Walking Tour",
      date: "10",
      monthYear: "Januari 2026",
      dateTime: "2026-01-10",
      text: "Cerita di balik layar pembuatan BDJ Walking Tour, menangani arsitektur Firestore database, routing dinamis, dan optimasi load image di Next.js.",
      image: "/assets/images/blog-2.jpg",
    },
  ];

  return (
    <section id="blog" className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <p className="section-subtitle" id="blog-label">Artikel Terbaru</p>
        <h2 className="h2 section-title">Kabar & Catatan Terbaru</h2>

        <ul className="blog-list">
          {blogs.map((blog, idx) => (
            <li key={idx}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ "--width": "700", "--height": "470" } as React.CSSProperties}>
                  <Image
                    src={blog.image}
                    width={700}
                    height={470}
                    loading="lazy"
                    alt={blog.title}
                    className="img-cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </figure>

                <div className="card-content">
                  <time className="time" dateTime={blog.dateTime}>
                    <span className="span text-lg">{blog.date}</span>
                    {blog.monthYear}
                  </time>

                  <div>
                    <h3 className="h3 card-title">{blog.title}</h3>
                    <p className="card-text">{blog.text}</p>
                    <a href="#" className="btn has-before">
                      <span className="span">Read more</span>
                      <IoArrowForward size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
