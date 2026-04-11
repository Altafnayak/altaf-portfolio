import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Use environment variables for security
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        submitting: false,
        success: false,
        error: "EmailJS credentials are not configured in .env file."
      });
      return;
    }

    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log("SUCCESS!", result.text);
        setStatus({ submitting: false, success: true, error: null });
        form.current.reset();
      }, (error) => {
        console.error("FAILED...", error);
        setStatus({ submitting: false, success: false, error: `Failed to send message: ${error.text || "Unknown error"}. Please check your credentials.` });
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">CONTACT</h2>

      <div className="contact-grid">
        <div className="contact-info">
          <h3 className="contact-heading">LET'S BUILD SOMETHING.</h3>
          <p className="contact-subtext">
            Currently looking for new opportunities and collaborations in AI/ML and Software Engineering. My inbox is always open.
          </p>

          <div className="contact-links">
            <a href="mailto:altafn899@gmail.com" className="contact-link-item">
              <span className="link-icon">✉</span>
              <div className="link-text">
                <span className="link-label">Email</span>
                <span className="link-value">altafn899@gmail.com</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/altaf-nayak-4916b9298" className="contact-link-item" target="_blank" rel="noreferrer">
              <span className="link-icon">🔗</span>
              <div className="link-text">
                <span className="link-label">LinkedIn</span>
                <span className="link-value">linkedin.com/in/altaf-nayak</span>
              </div>
            </a>

            <a href="https://github.com/Altafnayak" className="contact-link-item" target="_blank" rel="noreferrer">
              <span className="link-icon">💻</span>
              <div className="link-text">
                <span className="link-label">GitHub</span>
                <span className="link-value">github.com/dashboard</span>
              </div>
            </a>
          </div>
        </div>

        <div className="contact-form-minimal glass-card">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group-minimal">
              <label htmlFor="name">YOUR NAME</label>
              <input type="text" name="name" id="name" placeholder="John Doe" required disabled={status.submitting} />
            </div>
            <div className="form-group-minimal">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input type="email" name="email" id="email" placeholder="john@example.com" required disabled={status.submitting} />
            </div>
            <div className="form-group-minimal">
              <label htmlFor="message">MESSAGE</label>
              <textarea name="message" id="message" rows="4" placeholder="How can I help you?" required disabled={status.submitting}></textarea>
            </div>

            <button
              type="submit"
              className={`btn btn-primary ${status.submitting ? 'loading' : ''}`}
              style={{ width: '100%', marginTop: '10px' }}
              disabled={status.submitting}
            >
              {status.submitting ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

            {status.success && (
              <p className="status-msg success">Message sent successfully!</p>
            )}
            {status.error && (
              <p className="status-msg error">{status.error}</p>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: flex-start;
        }

        .contact-heading {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }

        .contact-subtext {
          color: var(--text-muted);
          font-size: 1.1rem;
          margin-bottom: 3rem;
          max-width: 450px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 20px;
          text-decoration: none;
          transition: var(--transition);
        }

        .link-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(56, 189, 248, 0.1);
          color: var(--primary);
          border-radius: 12px;
          font-size: 1.2rem;
          border: 1px solid rgba(56, 189, 248, 0.2);
        }

        .contact-link-item:hover .link-icon {
          background: var(--primary);
          color: #000;
        }

        .link-text {
          display: flex;
          flex-direction: column;
        }

        .link-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .link-value {
          color: var(--text-main);
          font-weight: 500;
        }

        .form-group-minimal {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 25px;
        }

        .form-group-minimal label {
          font-family: var(--font-heading);
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          letter-spacing: 1.5px;
        }

        .form-group-minimal input, 
        .form-group-minimal textarea {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 12px 15px;
          border-radius: 6px;
          color: var(--text-main);
          font-family: inherit;
          transition: var(--transition);
        }

        .form-group-minimal input:focus, 
        .form-group-minimal textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(56, 189, 248, 0.05);
        }

        .status-msg {
          margin-top: 15px;
          font-size: 0.9rem;
          text-align: center;
          font-weight: 500;
        }

        .status-msg.success { color: #10b981; }
        .status-msg.error { color: #ef4444; }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          .contact-heading { font-size: 2rem; }
        }
      `}</style>
    </section>
  );
}

export default Contact;
