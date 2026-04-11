import { useState, useEffect } from "react";

function Entrance({ onEnter }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("LOCATING_CORE");

  useEffect(() => {
    const statuses = [
      "ESTABLISHING_ENCRYPTED_LINK",
      "DECRYPTING_NEURAL_PATHWAYS",
      "SYNCING_DATABASE_NODE",
      "HANDSHAKE_COMPLETE",
      "READY_FOR_UPLINK"
    ];

    let statusIdx = 0;
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 8;
        if (next >= 100) {
          clearInterval(interval);
          setLoading(false);
          setStatus("UPLINK_READY");
          return 100;
        }
        
        // Update status text every ~20%
        if (next > (statusIdx + 1) * 20) {
          statusIdx++;
          setStatus(statuses[statusIdx] || "READY");
        }
        
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="entrance-hud">
      <div className="hud-container">
        {/* Animated Rings */}
        <div className="ring-system">
          <div className="ring outer"></div>
          <div className="ring middle"></div>
          <div className="ring inner"></div>
          <div className="core-dot"></div>
        </div>

        {/* HUD Data */}
        <div className="hud-content">
          <div className="scan-line"></div>
          <h1 className="hud-title">SYSTEM INIT</h1>
          <div className="progress-value">{Math.round(progress)}%</div>
          <div className="status-text">{">"} {status}</div>
          
          <div className="progress-bar-container">
            <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
          </div>

          {!loading && (
            <button className="hud-enter-btn" onClick={onEnter}>
              INITIALIZE CONNECTION
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .entrance-hud {
          position: fixed;
          inset: 0;
          background: #030712;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          font-family: 'Poppins', sans-serif;
          color: #38bdf8;
          overflow: hidden;
        }

        .hud-container {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }

        .ring-system {
          position: relative;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-top-color: #38bdf8;
          animation: spin linear infinite;
        }

        .outer {
          width: 100%;
          height: 100%;
          border-width: 2px;
          animation-duration: 3s;
        }

        .middle {
          width: 70%;
          height: 70%;
          border-width: 1px;
          border-top-color: transparent;
          border-right-color: #38bdf8;
          animation-duration: 2s;
          animation-direction: reverse;
        }

        .inner {
          width: 40%;
          height: 40%;
          border-width: 3px;
          border-top-color: transparent;
          border-bottom-color: #38bdf8;
          animation-duration: 1.5s;
        }

        .core-dot {
          width: 8px;
          height: 8px;
          background: #38bdf8;
          border-radius: 50%;
          box-shadow: 0 0 15px #38bdf8;
        }

        .hud-content {
          text-align: center;
          width: 300px;
          position: relative;
        }

        .scan-line {
          position: absolute;
          top: -200px;
          left: -100px;
          width: 500px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #38bdf8, transparent);
          opacity: 0.3;
          animation: scan 4s linear infinite;
        }

        .hud-title {
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 6px;
          margin-bottom: 5px;
          opacity: 0.6;
        }

        .progress-value {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 5px;
          font-family: 'Poppins', sans-serif;
        }

        .status-text {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 1px;
          height: 20px;
          text-transform: uppercase;
        }

        .progress-bar-container {
          width: 100%;
          height: 2px;
          background: rgba(56, 189, 248, 0.1);
          margin-top: 20px;
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: #38bdf8;
          box-shadow: 0 0 10px #38bdf8;
          transition: width 0.3s ease;
        }

        .hud-enter-btn {
          margin-top: 30px;
          background: #38bdf8;
          color: #030712;
          border: none;
          padding: 12px 30px;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 2px;
          border-radius: 8px;
          cursor: pointer;
          animation: pulse 1.5s infinite;
          transition: 0.3s;
        }

        .hud-enter-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.4);
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes scan {
          0% { top: -100px; }
          100% { top: 300px; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}

export default Entrance;