import { useState } from 'react'

interface AcknowledgementScreenProps {
  onContinue: () => void
}

export default function AcknowledgementScreen({ onContinue }: AcknowledgementScreenProps) {
  const [mediaLoaded, setMediaLoaded] = useState(false)
  const [step, setStep] = useState(0)

  const messages = [
    {
      text: "Real talk...",
      subtext: "You're one of the real ones.",
    },
    {
      text: "Day one energy. 💯",
      subtext: "You've been here through it all.",
    },
    {
      text: "You're family. 💕",
      subtext: "That means everything.",
    },
  ]

  const isLastStep = step === messages.length - 1

  const handleNext = () => {
    if (isLastStep) {
      onContinue()
    } else {
      setStep(step + 1)
    }
  }

  return (
    <div className="acknowledgement-screen">
      <div className="valentine-bg" />

      <div className={`acknowledgement-content ${mediaLoaded ? 'visible' : ''}`}>
        {/* Message */}
        <div className="message-container" key={step}>
          <h2 className="main-text">{messages[step].text}</h2>
          <p className="sub-text">{messages[step].subtext}</p>
        </div>

        {/* Giphy - visible on all steps */}
        <div className="gif-container">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aW1nOWdncm8yeTlhczRnMTIxY2N2eHlwbHRiem5sMTlsY29pc3I4cSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/14gESmcGjeqSZO/giphy.gif"
            alt="Love"
            className="gif"
            onLoad={() => setMediaLoaded(true)}
          />
        </div>

        {/* Progress dots */}
        <div className="progress-dots">
          {messages.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button className="next-button" onClick={handleNext}>
          {isLastStep ? "Continue 💕" : "Next"}
        </button>
      </div>

      <style jsx>{`
        .acknowledgement-screen {
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

        .acknowledgement-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          text-align: center;
          max-width: 400px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .acknowledgement-content.visible {
          opacity: 1;
          transform: translateY(0);
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
          font-size: clamp(1.5rem, 6vw, 2rem);
          font-weight: 700;
          color: white;
          margin: 0 0 0.75rem 0;
          line-height: 1.3;
        }

        .sub-text {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(1rem, 4vw, 1.25rem);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.5;
        }

        .gif-container {
          width: 85vw;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(255, 50, 100, 0.3);
          animation: fadeUp 0.6s ease-out;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gif {
          width: 100%;
          height: auto;
          display: block;
        }

        .progress-dots {
          display: flex;
          gap: 0.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .dot.active {
          background: #ff6b9d;
          transform: scale(1.25);
        }

        .dot.done {
          background: rgba(255, 107, 157, 0.5);
        }

        .next-button {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffb347 50%, #ff6b9d 100%);
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
          border: none;
          border-radius: 16px;
          padding: 1.25rem 3rem;
          cursor: pointer;
          box-shadow: 0 10px 30px rgba(255, 107, 157, 0.5);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .next-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 50px rgba(255, 107, 157, 0.6);
        }

        .next-button:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </div>
  )
}
