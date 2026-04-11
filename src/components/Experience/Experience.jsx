function Experience() {
  const experiences = [
    {
      date: "2021 — PRESENT",
      title: "Bachelor of Technology",
      company: "G M University",
      desc: "Specializing in Computer Science and Artificial Intelligence. Focus on building real-world AI applications.",
    },
    {
      date: "2024",
      title: "Virtual Intern",
      company: "CodSoft",
      desc: "Gained hands-on experience in software development and AI/ML projects during this virtual internship.",
    }
  ];

  return (
    <section id="experience" className="section">
      <h2 className="section-title">EXPERIENCE</h2>
      
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-date">{exp.date}</div>
            <div className="experience-content">
              <h3 className="experience-title">{exp.title} • <span className="experience-company">{exp.company}</span></h3>
              <p className="experience-desc">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .experience-list {
          display: flex;
          flex-direction: column;
          gap: 40px;
          border-left: 1px solid var(--border);
          padding-left: 40px;
          margin-left: 10px;
        }

        .experience-item {
          position: relative;
        }

        .experience-item::before {
          content: "";
          position: absolute;
          left: -46px;
          top: 8px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .experience-date {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 1px;
          margin-bottom: 8px;
          opacity: 0.8;
        }

        .experience-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .experience-company {
          color: var(--primary);
          font-weight: 500;
        }

        .experience-desc {
          margin-top: 12px;
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          max-width: 800px;
        }

        @media (max-width: 768px) {
          .experience-list {
            padding-left: 25px;
            margin-left: 0;
          }
          .experience-item::before {
            left: -31px;
          }
          .experience-title {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Experience;
