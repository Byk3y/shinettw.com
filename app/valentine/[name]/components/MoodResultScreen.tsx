'use client'

interface MoodResultScreenProps {
  moodId: string
  onContinue: () => void
}

// Content for each mood - all show G-Wagon, different text
const moodContent = {
  'in-love': {
    title: "Here's a G-Wagon with a trunk full of roses 🌹",
    subtext: "Because you deserve nothing less this Valentine's.",
    buttonText: "Continue 💕",
  },
  'sad': {
    title: "Don't be sad, here's a G-Wagon full of roses for you 🌹",
    subtext: "Because even on your worst days, you deserve the best.",
    buttonText: "I feel better now 🥹",
  },
  'seeing-shege': {
    title: "The shege is temporary, but this G-Wagon of roses is for you 🌹",
    subtext: "You've survived 100% of your worst days. You're doing amazing.",
    buttonText: "I feel better now 💪",
  },
}

export default function MoodResultScreen({ moodId, onContinue }: MoodResultScreenProps) {
  const content = moodContent[moodId as keyof typeof moodContent] || moodContent['in-love']

  return (
    <div className="result-screen">
      <div className="valentine-bg" />

      <div className="result-content">
        {/* Message */}
        <div className="message-container">
          <h2 className="main-text">{content.title}</h2>
          <p className="sub-text">{content.subtext}</p>
        </div>

        {/* G-Wagon Image - same for all moods */}
        <div className="image-container">
          <img
            src="/valentine/memes/gwagon and roses.jpg"
            alt="G-Wagon full of roses"
            className="result-image"
          />
        </div>

        {/* Button */}
        <button className="result-button" onClick={onContinue}>
          {content.buttonText}
        </button>
      </div>

      <style jsx>{`
        .result-screen {
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

        .result-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          padding: 4rem 2rem 2rem 2rem;
          text-align: center;
          max-width: 450px;
        }

        .message-container {
          animation: fadeIn 0.5s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .main-text {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(1.2rem, 4.5vw, 1.5rem);
          font-weight: 700;
          color: white;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
        }

        .sub-text {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(0.9rem, 3.5vw, 1rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.5;
        }

        .image-container {
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

        .result-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .result-button {
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
          padding: 1.25rem 2.5rem;
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

        .result-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 50px rgba(255, 107, 157, 0.6);
        }

        .result-button:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </div>
  )
}
