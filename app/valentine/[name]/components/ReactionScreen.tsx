import { useState } from 'react'

interface ReactionScreenProps {
  onContinue: () => void
}

export default function ReactionScreen({ onContinue }: ReactionScreenProps) {
  const [mediaLoaded, setMediaLoaded] = useState(false)
  return (
    <div className="reaction-screen">
      <div className="valentine-bg" />

      <div className={`reaction-content ${mediaLoaded ? 'visible' : ''}`}>
        {/* Video */}
        <div className="reaction-video-container">
          <video
            src="/valentine/memes/reaction.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="reaction-video"
            onLoadedData={() => setMediaLoaded(true)}
          />
        </div>

        {/* Continue button */}
        <button className="reaction-button" onClick={onContinue}>
          Continue 💕
        </button>
      </div>

      <style jsx>{`
        .reaction-screen {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .valentine-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            #0a0a0a 0%,
            #1a0a15 25%,
            #0a0a0a 50%,
            #150a1a 75%,
            #0a0a0a 100%
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .reaction-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          text-align: center;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .reaction-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reaction-video-container {
          width: 85vw;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(255, 50, 100, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: scaleIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .reaction-video {
          width: 100%;
          height: auto;
          display: block;
        }

        .reaction-button {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffb347 50%, #ff6b9d 100%);
          background-size: 200% 200%;
          animation: fadeInUp 0.8s ease-out 0.5s both, shimmer 3s ease infinite;
          border: none;
          border-radius: 16px;
          padding: 1.25rem 3rem;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(255, 107, 157, 0.5);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .reaction-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 50px rgba(255, 107, 157, 0.6);
        }

        .reaction-button:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </div>
  )
}
