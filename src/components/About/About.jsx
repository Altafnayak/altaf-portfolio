function About() {
  const stats = [
    { label: "Semester", value: "6th (Senior)" },
    { label: "Internships", value: "1 Specialized" },
    { label: "Focus", value: "AI & ML" }
  ];

  return (
    <section id="about" className="section color-transition">
      <h2 className="section-title">ABOUT ME</h2>
      
      <div className="about-grid">
        <div className="about-text-content">
          <p className="about-p">
            I am a highly motivated <strong>Engineering Student</strong> at <strong>G M University</strong> with a deep focus on <strong>Artificial Intelligence</strong> and <strong>Machine Learning</strong>. I specialize in building intelligent systems that can perceive, learn, and assist.
          </p>
          <p className="about-p">
            My passion lies in bridging the gap between complex algorithms and practical, user-centric applications. Whether I'm optimizing a neural network or crafting a responsive full-stack tool, I strive for engineering excellence and clean, maintainable code.
          </p>
          <p className="about-p">
            Currently, I'm exploring the frontiers of Large Language Models (LLMs) and Computer Vision to create tools that truly solve real-world problems.
          </p>
        </div>

        <div className="about-stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item glass-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text-content {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .about-p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.8;
        }

        .about-p strong {
          color: var(--primary);
          font-weight: 600;
        }

        .about-stats-container {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1.5rem !important;
        }

        .stat-value {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .about-stats-container {
            max-width: 500px;
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  );
}

export default About;