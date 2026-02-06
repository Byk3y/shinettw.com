'use client'

interface ProposalScreenProps {
  onContinue: () => void
}

export default function ProposalScreen({ onContinue }: ProposalScreenProps) {
  return (
    <div className="proposal-screen">
      <div className="valentine-bg" />

      <div className="proposal-content">
        {/* Message */}
        <h2 className="proposal-text">?</h2>

        {/* Meme image */}
        <div className="proposal-meme-container">
          <img
            src="/valentine/memes/i want to marry you.jpg"
            alt="I want to marry you"
            className="proposal-meme"
          />
        </div>

        {/* Yes/No buttons */}
        <div className="button-row">
          <button className="proposal-button yes-button" onClick={onContinue}>
            Yes 💕
          </button>
          <button className="proposal-button no-button" onClick={onContinue}>
            No 💔
          </button>
        </div>
      </div>

      <style jsx>{`
        .proposal-screen {
          min-height: 100dvh;
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

        .proposal-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          text-align: center;
        }

        .proposal-text {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(1.5rem, 6vw, 2rem);
          font-weight: 700;
          color: white;
          margin: 0;
          animation: fadeInUp 0.8s ease-out both;
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

        .proposal-meme-container {
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

        .proposal-meme {
          width: 100%;
          height: auto;
          display: block;
        }

        .button-row {
          display: flex;
          gap: 1rem;
          animation: fadeInUp 0.8s ease-out 0.5s both;
        }

        .proposal-button {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          border: none;
          border-radius: 16px;
          padding: 1.25rem 2.5rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .yes-button {
          color: #0a0a0a;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffb347 50%, #ff6b9d 100%);
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
          box-shadow: 0 10px 30px rgba(255, 107, 157, 0.5);
        }

        .no-button {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .proposal-button:hover {
          transform: translateY(-4px) scale(1.02);
        }

        .yes-button:hover {
          box-shadow: 0 20px 50px rgba(255, 107, 157, 0.6);
        }

        .no-button:hover {
          border-color: rgba(255, 255, 255, 0.6);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
        }

        .proposal-button:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </div>
  )
}

