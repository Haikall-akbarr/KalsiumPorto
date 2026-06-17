"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectModal, { Project } from "./ProjectModal";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = ["All", "Web Design", "UX Design", "Branding", "Web App"];

  const projects: Project[] = [
    {
      title: "Lab. 001",
      category: "Web Design",
      image: "/assets/images/portfolio-1.jpg",
      description: "A highly creative portfolio landing page showcasing abstract concepts and experimental UI interactions. Designed with micro-animations and typography focus.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Figma"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Aer Agency",
      category: "Web Design",
      image: "/assets/images/portfolio-2.jpg",
      description: "An elegant agency landing page built with custom layouts and modern sections to describe agency services, pricing structures, and past projects.",
      technologies: ["Next.js", "TypeScript", "CSS Modules", "Framer Motion"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Joker Card",
      category: "UX Design",
      image: "/assets/images/portfolio-3.jpg",
      description: "A digital application prototype that allows users to customized card layouts, share personalized decks, and experience customized gaming systems.",
      technologies: ["React", "CSS Grid", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Peaky Blinders",
      category: "Web App",
      image: "/assets/images/portfolio-4.jpg",
      description: "An immersive entertainment landing page featuring interactive timelines, character profiles, and trailer video players themed around the TV show.",
      technologies: ["React", "CSS Modules", "YouTube API"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Design Zoom",
      category: "Branding",
      image: "/assets/images/portfolio-5.jpg",
      description: "A branding identity project detailing logo constructions, typography guidelines, iconography styles, and business card layouts for a photography agency.",
      technologies: ["Adobe Illustrator", "Photoshop", "Figma"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
    {
      title: "Out Zone",
      category: "Web App",
      image: "/assets/images/portfolio-6.jpg",
      description: "A full-featured application for booking outdoor adventure activities and trekking tours with responsive seat layouts and payment gates.",
      technologies: ["Next.js", "TypeScript", "API Routes", "TailwindCSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://google.com",
    },
  ];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="section portfolio" aria-labelledby="portfolio-label">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle" id="portfolio-label">Our Works</p>
            <h2 className="h2 section-title">Portfolio</h2>
          </div>
          <p className="section-text">
            Explore a curated gallery of my latest creative designs, custom branding assets, and full-stack web applications. Each project represents a unique problem-solving journey.
          </p>
        </div>

        <ul className="portfolio-filter-list">
          {filters.map((filter, index) => (
            <li key={index}>
              <button
                className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            </li>
          ))}
        </ul>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="portfolio-card img-holder"
              style={{ "--width": "600", "--height": "600", cursor: "pointer" } as React.CSSProperties}
              onClick={() => openProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openProject(project)}
            >
              <Image
                src={project.image}
                width={600}
                height={600}
                loading="lazy"
                alt={project.title}
                className="img-cover"
                style={{ width: "100%", height: "100%" }}
              />
              <div className="card-content">
                <h3 className="h3 card-title">{project.title}</h3>
                <p className="card-text">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}
