import { IoSchoolOutline, IoBriefcaseOutline } from "react-icons/io5";

export default function Resume() {
  const education = [
    {
      title: "Bachelor of Computer Science",
      duration: "2020 - 2024",
      institution: "State University",
      text: "Specialized in Software Engineering and Web Technologies. Graduated with honors, focusing on user experience design and full stack development.",
    },
    {
      title: "Web Development Certifications",
      duration: "2018 - Present",
      institution: "Udemy / Coursera / Frontend Masters",
      text: "Completed extensive courses in React, Next.js, UI/UX Design, and Performance Optimization to stay at the cutting edge of front-end tech.",
    },
  ];

  const experience = [
    {
      title: "Creative Web & App Developer",
      duration: "2023 - Present",
      institution: "Freelance & Agency",
      text: "Building premium websites and apps for diverse international clients. Spearheading responsive layout designs and interactive user animations.",
    },
    {
      title: "Frontend Developer",
      duration: "2022 - 2023",
      institution: "Tech Startup Corp",
      text: "Worked closely with designers to build and deploy complex dashboards, landing pages, and customized component systems using React.",
    },
  ];

  return (
    <section id="resume" className="section resume" aria-label="resume">
      <div className="container">
        <p className="section-subtitle">My Background</p>
        <h2 className="h2 section-title">Education & Experience</h2>

        <div className="resume-wrapper">
          <div>
            <h3 className="resume-column-title">
              <IoSchoolOutline size={24} />
              Education
            </h3>
            <ul className="timeline-list">
              {education.map((item, idx) => (
                <li key={idx} className="timeline-item">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-duration">{item.duration} | {item.institution}</p>
                  <p className="timeline-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="resume-column-title">
              <IoBriefcaseOutline size={24} />
              Experience
            </h3>
            <ul className="timeline-list">
              {experience.map((item, idx) => (
                <li key={idx} className="timeline-item">
                  <h4 className="timeline-title">{item.title}</h4>
                  <p className="timeline-duration">{item.duration} | {item.institution}</p>
                  <p className="timeline-text">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
