import { IoLocationOutline, IoSchoolOutline, IoBookOutline, IoCodeSlashOutline } from "react-icons/io5";

export default function About() {
  const facts = [
    {
      title: "Lokasi",
      value: "Banjarmasin, Indonesia",
      icon: IoLocationOutline,
    },
    {
      title: "Status Akademik",
      value: "Mahasiswa Tingkat Akhir",
      icon: IoSchoolOutline,
    },
    {
      title: "Kampus",
      value: "Politeknik Negeri Banjarmasin",
      icon: IoBookOutline,
    },
    {
      title: "Fokus Pengembangan",
      value: "Full-Stack Web & Mobile",
      icon: IoCodeSlashOutline,
    },
  ];

  return (
    <section id="about" className="section about" aria-label="about">
      <div className="container">
        <div className="about-content">
          <p className="section-subtitle">Tentang Saya</p>
          <h2 className="h2 section-title">Menghubungkan Kode dengan Solusi Nyata</h2>
          
          <p>
            Saya adalah mahasiswa tingkat akhir program D3 Teknik Informatika di <strong>Politeknik Negeri Banjarmasin</strong>. Memiliki antusiasme mendalam terhadap rekayasa perangkat lunak, terutama dalam pembuatan aplikasi web dan mobile yang responsif, terintegrasi, serta berorientasi pada kemudahan pengguna.
          </p>
          <p>
            Saya sangat terbiasa memecahkan masalah teknis, mendesain arsitektur database, dan mengintegrasikan model kecerdasan buatan (AI) guna meningkatkan kapabilitas sistem. Di luar coding, saya gemar mengeksplorasi budaya lokal, menikmati secangkir kopi hangat di coffee shop lokal, mendengarkan musik, dan mengikuti perkembangan dunia otomotif.
          </p>
        </div>

        <div className="about-facts-grid">
          <div className="bento-grid">
            {facts.map((fact, index) => {
              const IconComp = fact.icon;
              return (
                <div key={index} className="bento-card">
                  <div className="skill-category-title" style={{ border: "none", margin: 0, padding: 0 }}>
                    <IconComp size={22} style={{ color: "var(--color-accent)", marginRight: "10px" }} />
                    <div>
                      <p className="fact-title">{fact.title}</p>
                      <p className="fact-value">{fact.value}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
