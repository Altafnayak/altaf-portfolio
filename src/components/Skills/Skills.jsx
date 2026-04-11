function Skills() {
  const skillGroups = [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["TensorFlow", "Pandas", "NumPy", "Scikit-Learn"]
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Google Colab"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      category: "Concepts",
      items: ["Data Structures", "Algorithms", "Machine Learning", "REST APIs", "System Design"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">TECHNICAL STACK</h2>
      
      <div className="skills-container">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group glass-card">
            <h3 className="group-title">{group.category}</h3>
            <div className="skills-list">
              {group.items.map((skill) => (
                <span key={skill} className="pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .skills-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .skill-group {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 1.5rem !important;
        }

        .group-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--primary);
          text-transform: uppercase;
          letter-spacing: 1px;
          opacity: 0.8;
          border-left: 2px solid var(--primary);
          padding-left: 12px;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .skills-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;