import {
  IoPhonePortraitOutline,
  IoDesktopOutline,
  IoCloudUploadOutline,
  IoHardwareChipOutline,
  IoGitBranchOutline,
} from "react-icons/io5";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: IoPhonePortraitOutline,
      skills: ["Flutter", "Dart", "Mobile UI Design", "State Management (Provider/Bloc)"],
    },
    {
      title: "Web Development",
      icon: IoDesktopOutline,
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5 & CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: IoCloudUploadOutline,
      skills: ["Firebase Firestore", "Supabase", "Firebase Auth & Security Rules", "RESTful APIs"],
    },
    {
      title: "AI Integration & Tools",
      icon: IoHardwareChipOutline,
      skills: ["Gemini API", "ChatGPT API", "Claude", "Kaggle (Data Science & ML Experiments)"],
    },
    {
      title: "Version Control & DevOps",
      icon: IoGitBranchOutline,
      skills: ["Git", "GitHub", "Vercel Deployment", "Cloudflare", "Google Cloud Platform"],
    },
  ];

  return (
    <section id="skills" className="section skills" aria-label="skills">
      <div className="container">
        <p className="section-subtitle">Keahlian & Tech Stack</p>
        <h2 className="h2 section-title">Peralatan & Teknologi Yang Saya Gunakan</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="skill-category-card">
                <h3 className="skill-category-title">
                  <Icon size={20} />
                  {cat.title}
                </h3>
                <div className="tech-tags-list">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
