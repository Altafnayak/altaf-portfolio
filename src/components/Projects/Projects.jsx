function Projects() {
  const projects = [
    {
      title: "Ayurvedic AI Health Buddy",
      desc: "A comprehensive AI-powered wellness platform offering symptom-based disease diagnosis, personalized Ayurvedic remedies, and health metric tracking with voice assistant support.",
      tags: ["AI", "Ayurveda", "Flask", "React", "Recharts"],
      links: { github: "https://github.com/Altafnayak/AI-based-Ayurvedic-Health-Buddy", live: "https://ai-based-ayurvedic-health-buddy.onrender.com" }
    },
    {
      title: "Abhaya – AI Voice Assistant",
      desc: "An intelligent voice assistant featuring high-accuracy speech recognition, SQL-backed long term memory, and DALL-E image generation capabilities.",
      tags: ["Python", "SpeechRec", "SQL", "OpenAI"],
      links: { github: "https://github.com/Altafnayak/Abhaya-AI", live: "https://abhaya-ai.onrender.com" }
    },
    {
      title: "Skin Cancer Detection",
      desc: "Built a robust Convolutional Neural Network (CNN) model using TensorFlow to classify dermatological lesions with high precision.",
      tags: ["CNN", "TensorFlow", "OpenCV", "Deep Learning"],
      links: { github: "https://github.com/Altafnayak/Projects/blob/aa4e141562d429f45f8088c98c43659a8ab3010c/altf.ipynb", live: "#" }
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title">FEATURED PROJECTS</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass-card">
            <div className="project-header">
              <span className="project-number">0{index + 1}</span>
              <div className="project-links">
                <a href={project.links.github} className="icon-link" target="_blank" rel="noreferrer">GITHUB</a>
                <a href={project.links.live} className="icon-link">LIVE</a>
              </div>
            </div>
            
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="project-tag-pill">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-number {
          font-family: var(--font-heading);
          color: var(--primary);
          font-weight: 700;
          font-size: 0.8rem;
          opacity: 0.6;
        }

        .project-links {
          display: flex;
          gap: 15px;
        }

        .icon-link {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition);
        }

        .icon-link:hover {
          color: var(--primary);
        }

        .project-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          min-height: 50px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: auto;
        }

        .project-tag-pill {
          font-size: 0.7rem;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          padding: 4px 10px;
          border-radius: 4px;
          border: 1px solid var(--border);
        }

        .project-card:hover .project-tag-pill {
          border-color: rgba(56, 189, 248, 0.3);
          color: var(--primary);
        }
      `}</style>
    </section>
  );
}

export default Projects;