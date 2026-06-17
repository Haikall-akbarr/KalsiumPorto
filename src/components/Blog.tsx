import Image from "next/image";
import { IoArrowForward } from "react-icons/io5";

export default function Blog() {
  const blogs = [
    {
      title: "Get Started With Tiktok Ads.",
      date: "24",
      monthYear: "June 2022",
      dateTime: "2022-06-24",
      text: "Phasellus et lacus suscipit congue nis in the miss mine one miss the drana risus in tincidunt ornare.",
      image: "/assets/images/blog-1.jpg",
    },
    {
      title: "UX in Ecommerce – 5 things to avoid.",
      date: "27",
      monthYear: "June 2022",
      dateTime: "2022-06-27",
      text: "Phasellus et lacus suscipit congue nis in the miss mine one miss the drana risus in tincidunt ornare.",
      image: "/assets/images/blog-2.jpg",
    },
  ];

  return (
    <section id="blog" className="section blog" aria-labelledby="blog-label">
      <div className="container">
        <p className="section-subtitle" id="blog-label">Recent Articles</p>
        <h2 className="h2 section-title">Latest News</h2>

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
