"use client";

import { useEffect } from "react";
import Image from "next/image";
import { IoClose, IoLogoGithub, IoOpenOutline } from "react-icons/io5";

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.classList.add("nav-active"); // re-use nav-active overflow hidden block
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.classList.remove("nav-active");
    }

    return () => {
      document.body.classList.remove("nav-active");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className={`modal-backdrop active`} onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <IoClose />
        </button>

        <div className="modal-image-wrapper">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="img-cover"
            sizes="(max-width: 768px) 100vw, 700px"
            priority
          />
        </div>

        <div className="modal-body">
          <h3 className="modal-title">{project.title}</h3>
          <p className="modal-category">{project.category}</p>
          <p className="modal-description">{project.description}</p>

          <h4 className="modal-tech-title">Technologies Used</h4>
          <div className="modal-tech-list">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">{tech}</span>
            ))}
          </div>

          <div className="modal-actions">
            <a href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className="btn">
              <span>Live Preview</span>
              <IoOpenOutline size={16} />
            </a>
            <a href={project.githubUrl || "#"} target="_blank" rel="noopener noreferrer" className="btn">
              <span>Github</span>
              <IoLogoGithub size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
