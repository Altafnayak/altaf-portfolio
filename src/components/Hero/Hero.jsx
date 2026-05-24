function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background">
        <div className="hero-image-wrapper">
          <img
            src="/images/profile.jpg"
            alt="Altaf Nayak"
            className="hero-profile-img"
            onError={(e) => {
              e.target.src = "https://placehold.co/1200x800/0f172a/38bdf8?text=Place+Your+Photo+Here";
            }}
          />
          <div className="hero-overlay-gradient"></div>
        </div>
      </div>

      <div className="hero-content">
        <p className="hero-pretitle">WELCOME TO MY PORTFOLIO</p>
        <h1 className="hero-name">
          ALTAF <br />
          <span className="hero-surname">NAYAK</span>
        </h1>
        <p className="hero-tags">
          ASPIRING SOFTWARE ENGINEER • AI/ML STUDENT • PYTHON DEVELOPER
        </p>
        <p className="hero-pitch">
          I build AI assistants, full-stack applications, and intelligent systems that solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="https://drive.google.com/file/d/15P5eYdKduIof7UptykKG1jqyhVTGYlvk/view?usp=sharing" className="btn btn-primary" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            DOWNLOAD RESUME
          </a>
          <a href="https://github.com/Altafnayak" className="btn btn-secondary" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            VIEW GITHUB
          </a>
        </div>

      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 0 10%;
          overflow: hidden;
          background: var(--bg);
        }

        .hero-background {
          position: absolute;
          top: 0;
          right: 0;
          width: 60%;
          height: 100%;
          z-index: 1;
        }

        .hero-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          /* Subtle professional desaturation like the reference */
          filter: brightness(0.7) contrast(1.1);
        }

        .hero-overlay-gradient {
          position: absolute;
          inset: 0;
          /* This creates the fade from the photo into the background color */
          background: linear-gradient(
            to right,
            var(--bg) 0%,
            rgba(5, 8, 22, 0.8) 30%,
            transparent 70%
          ),
          linear-gradient(
            to bottom,
            transparent 70%,
            var(--bg) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
        }

        .hero-pretitle {
          color: var(--primary);
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 2rem;
          text-shadow: 0 0 10px rgba(56, 189, 248, 0.3);
        }

        .hero-name {
          font-family: var(--font-heading);
          font-size: 5rem;
          font-weight: 800;
          line-height: 0.9;
          color: var(--text-main);
          margin-bottom: 1.5rem;
          letter-spacing: -2px;
        }

        .hero-surname {
          color: var(--text-main);
          opacity: 1;
        }

        .hero-tags {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
        }

        .hero-pitch {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 550px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
        }

        @media (max-width: 1200px) {
          .hero-name { font-size: 4rem; }
        }

        @media (max-width: 968px) {
          .hero-section {
            padding-top: 100px;
            justify-content: center;
            text-align: center;
          }
          .hero-background {
            width: 100%;
            opacity: 0.4; /* Fade background more on mobile */
          }
          .hero-overlay-gradient {
            background: radial-gradient(
              circle at center,
              transparent 0%,
              var(--bg) 100%
            );
          }
          .hero-pitch { margin: 1.5rem auto 3rem auto; }
          .hero-buttons { justify-content: center; }
          .hero-name { font-size: 3.5rem; }
        }
      `}</style>
    </section>
  );
}

export default Hero;