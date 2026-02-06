'use client'

import { FaInstagram, FaSpotify, FaYoutube } from 'react-icons/fa'

interface OutroScreenProps {
  displayName: string
}

export default function OutroScreen({ displayName }: OutroScreenProps) {
  return (
    <div className="outro-screen">
      <div className="valentine-bg" />

      {/* Floating Hearts Animation */}
      <div className="hearts-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="heart-floater" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${4 + Math.random() * 6}s`
          }}>❤️</div>
        ))}
      </div>

      <div className="card-container">
        <div className="valentine-card">
          {/* Glossy Overlay */}
          <div className="glossy-shine" />

          <div className="card-header">
            <div className="badge-wrapper">
              <div className="certified-badge">
                <span>SHINETTW CERTIFIED</span>
                <div className="badge-star">★</div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="heart-icon-large">💝</div>
            <h1 className="main-title">Validated for 2026</h1>
            <h2 className="user-name">{displayName}</h2>
            <p className="card-message">Official Day One Energy. 💯</p>
          </div>

          <div className="card-footer">
            <p className="shinettw-identifier">@shinettw</p>
          </div>
        </div>

        <div className="action-section">
          <p className="action-hint">Take a screenshot to show off! 📸</p>
        </div>
      </div>

      <style jsx>{`
        .outro-screen {
          flex: 1;
          width: 100%;
          background: #050505;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 1.5rem;
          font-family: 'Bricolage Grotesque', sans-serif;
        }

        .valentine-bg {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 10%, rgba(255, 50, 100, 0.2) 0%, transparent 40%),
            radial-gradient(circle at 90% 90%, rgba(255, 107, 157, 0.2) 0%, transparent 40%),
            radial-gradient(circle at center, rgba(10, 10, 10, 1) 0%, rgba(0, 0, 0, 1) 100%);
          z-index: 1;
        }

        .hearts-container {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 2;
        }

        .heart-floater {
          position: absolute;
          bottom: -50px;
          font-size: 1.5rem;
          opacity: 0;
          animation: floatUp linear infinite;
        }

        @keyframes floatUp {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.4; }
          100% { transform: translateY(-110vh) rotate(360deg); opacity: 0; }
        }

        .card-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 380px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          animation: cardSlideUp 1s cubic-bezier(0.19, 1, 0.22, 1);
        }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .valentine-card {
          position: relative;
          aspect-ratio: 4 / 5.5;
          background: linear-gradient(165deg, rgba(30, 30, 30, 0.9) 0%, rgba(15, 15, 15, 0.95) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 32px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          box-shadow: 
            0 30px 60px rgba(0, 0, 0, 0.5),
            inset 0 0 40px rgba(255, 50, 100, 0.05);
        }

        .glossy-shine {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 0%,
            transparent 40%,
            rgba(255, 255, 255, 0.03) 45%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0.03) 55%,
            transparent 60%,
            transparent 100%
          );
          animation: shine 8s infinite linear;
          pointer-events: none;
        }

        @keyframes shine {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .certified-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255, 50, 100, 0.1);
          border: 1px solid rgba(255, 50, 100, 0.3);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          color: #ff6b9d;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .badge-star {
          animation: spin 3s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .card-body {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }

        .heart-icon-large {
          font-size: 4.5rem;
          margin-bottom: 0.5rem;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(0deg); filter: blur(0px); }
          50% { transform: scale(1.1) rotate(5deg); filter: blur(1px); }
        }

        .main-title {
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.5);
          margin: 0;
        }

        .user-name {
          font-size: 3rem;
          font-weight: 800;
          margin: 0;
          background: linear-gradient(to right, #fff, #ff6b9d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1;
        }

        .card-message {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 1rem;
        }

        .card-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
        }

        .shinettw-identifier {
          font-size: 1.2rem;
          font-weight: 700;
          color: white;
          opacity: 0.8;
          margin: 0;
        }

        .action-section {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          text-align: center;
        }

        .action-hint {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ff6b9d;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-6px); }
          60% { transform: translateY(-3px); }
        }

        @media (max-width: 400px) {
          .user-name { font-size: 2.5rem; }
          .valentine-card { padding: 2rem; }
        }
      `}</style>

    </div>
  )
}
