"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ProjectModal, { Project } from "./ProjectModal";
import { IoOpenOutline } from "react-icons/io5";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>([
    {
      title: "BDJ Walking Tour",
      category: "Web App",
      image: "/assets/images/portfolio-1.jpg",
      description: "Platform digital pemesanan tiket dan pusat informasi pariwisata ekskursi lokal Banjarmasin (seperti susur Sungai Martapura dan wisata Pasar Terapung). Dilengkapi sistem pemesanan real-time, integrasi database Firebase Firestore, dan setup security rules database.",
      technologies: ["Next.js", "Firebase Firestore", "TypeScript", "Vercel", "Security Rules"],
      githubUrl: "https://github.com/Haikall-akbarr",
      liveUrl: "https://www.bdjwalkingtour.com/",
    }
  ]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          if (data && data.length > 0) {
            setProjects(data);
          }
        }
      } catch (err) {
        console.error("Failed to load projects from DB", err);
      }
    };
    fetchProjects();
  }, []);

  const featuredProject = projects[0] || {
    title: "BDJ Walking Tour",
    category: "Web App",
    image: "/assets/images/portfolio-1.jpg",
    description: "Platform digital pemesanan tiket dan pusat informasi pariwisata ekskursi lokal Banjarmasin (seperti susur Sungai Martapura dan wisata Pasar Terapung). Dilengkapi sistem pemesanan real-time, integrasi database Firebase Firestore, dan setup security rules database.",
    technologies: ["Next.js", "Firebase Firestore", "TypeScript", "Vercel", "Security Rules"],
    githubUrl: "https://github.com/Haikall-akbarr",
    liveUrl: "https://www.bdjwalkingtour.com/",
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="section portfolio" aria-labelledby="portfolio-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle" id="portfolio-label">Proyek Saya</p>
            <h2 className="h2 section-title">Karya Unggulan</h2>
          </div>
          <p className="section-text">
            Membangun platform pariwisata lokal berkelanjutan dengan merancang antarmuka Next.js modern dan arsitektur database cloud yang aman.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT */}
        <div className="portfolio-spotlight">
          <div
            className="spotlight-card bento-card"
            style={{ position: "relative" }}
          >
            <div className="spotlight-badge">🔥 Featured Project</div>
            <div 
              className="img-holder" 
              style={{ "--width": "600", "--height": "400", cursor: "pointer" } as React.CSSProperties}
              onClick={() => openProject(featuredProject)}
            >
              <Image
                src={featuredProject.image}
                width={600}
                height={400}
                alt={featuredProject.title}
                className="img-cover"
                style={{ width: "100%", height: "100%" }}
                priority
              />
            </div>
            <div className="spotlight-content">
              <p className="timeline-meta">{featuredProject.category}</p>
              <h3 
                className="h3 spotlight-title" 
                style={{ cursor: "pointer" }}
                onClick={() => openProject(featuredProject)}
              >
                {featuredProject.title}
              </h3>
              <p className="spotlight-desc">{featuredProject.description}</p>
              
              <div className="tech-tags-list" style={{ marginBlockEnd: "20px" }}>
                {featuredProject.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag" style={{ borderColor: "var(--color-accent)" }}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="hero-actions" style={{ justifyContent: "flex-start", gap: "12px" }}>
                <button className="btn" onClick={() => openProject(featuredProject)}>
                  <span>Detail Proyek</span>
                </button>
                <a 
                  href={featuredProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn secondary"
                >
                  <span>Kunjungi Situs</span>
                  <IoOpenOutline size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DYNAMIC ADDITIONAL PROJECTS GRID */}
        {projects.length > 1 && (
          <div className="portfolio-grid" style={{ marginBlockStart: "50px" }}>
            {projects.slice(1).map((project, idx) => (
              <div
                key={project.title + "-" + idx}
                className="project-card"
                onClick={() => openProject(project)}
                style={{ cursor: "pointer" }}
              >
                <div className="img-holder">
                  <Image
                    src={project.image}
                    fill
                    alt={project.title}
                    className="img-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>
                <div className="project-card-content">
                  <p className="timeline-meta" style={{ color: "var(--color-accent-green)", fontSize: "1.2rem", textTransform: "uppercase", letterSpacing: "1px" }}>{project.category}</p>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-text">{project.description}</p>
                  
                  <div className="tech-tags-list" style={{ marginBlockEnd: "0", marginTop: "auto" }}>
                    {project.technologies.slice(0, 3).map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag" style={{ borderColor: "var(--color-accent)", fontSize: "1.1rem", padding: "2px 8px" }}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag" style={{ borderColor: "var(--color-accent)", fontSize: "1.1rem", padding: "2px 8px" }}>
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
