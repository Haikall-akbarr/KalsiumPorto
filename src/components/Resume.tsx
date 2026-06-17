import { IoCalendarOutline } from "react-icons/io5";

export default function Resume() {
  const timelineData = [
    {
      date: "Maret 2026",
      title: "Seminar Proposal Tugas Akhir",
      subtitle: "Teknik Informatika - Politeknik Negeri Banjarmasin",
      text: "Tahap awal pengerjaan proyek tugas akhir D3 Teknik Informatika, mengajukan rancangan arsitektur aplikasi dan pemecahan masalah teknis menggunakan integrasi sistem cerdas.",
    },
    {
      date: "September 2024 - Januari 2025",
      title: "Magang Industri (Internship Profesional)",
      subtitle: "Developer Magang - Lingkungan Industri Nyata",
      text: "Fokus pada pemeliharaan server, optimasi query basis data relasional, pembangunan antarmuka pelaporan internal, dan penyelesaian bug/troubleshooting langsung di lapangan.",
    },
    {
      date: "2023 - Sekarang",
      title: "Pendidikan D3 Teknik Informatika",
      subtitle: "Mahasiswa - Politeknik Negeri Banjarmasin",
      text: "Mempelajari fundamental rekayasa perangkat lunak, struktur data, pemrograman berorientasi objek (OOP), analisis database relasional, serta pengembangan aplikasi mobile dan web.",
    },
  ];

  return (
    <section id="resume" className="section resume" aria-label="resume">
      <div className="container">
        <p className="section-subtitle">Garis Waktu</p>
        <h2 className="h2 section-title">Pendidikan & Pengalaman</h2>

        <div className="timeline-container">
          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-meta" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <IoCalendarOutline size={14} />
                <span>{item.date}</span>
              </div>
              <h3 className="h3 timeline-title" style={{ fontSize: "2rem", marginBlock: "6px 4px" }}>
                {item.title}
              </h3>
              <p className="timeline-inst" style={{ color: "var(--color-accent-green)", fontSize: "1.4rem", marginBlockEnd: "12px" }}>
                {item.subtitle}
              </p>
              <p className="timeline-text" style={{ fontSize: "1.5rem", lineHeight: "1.6" }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
