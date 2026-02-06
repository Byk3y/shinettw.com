'use client'

import { useState, useEffect } from 'react'

// Mood options with images
const moodOptions = [
  { id: 'in-love', image: '/valentine/memes/in love valentine mood.png' },
  { id: 'sad', image: '/valentine/memes/sad valentine mood.jpeg' },
  { id: 'seeing-shege', image: "/valentine/memes/seeing shege valentine mood'.png" },
]

interface MoodScreenProps {
  onMoodSelected: (moodId: string) => void
}

export default function MoodScreen({ onMoodSelected }: MoodScreenProps) {
  const [typedText, setTypedText] = useState('')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const fullText = "So tell me, which one describes your mood this Valentine?"

  // Typing effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, 40)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  const handleMoodSelect = (moodId: string) => {
    setSelectedMood(moodId)
    setTimeout(() => {
      onMoodSelected(moodId)
    }, 500)
  }

  return (
    <div className="mood-screen">
      <div className="valentine-bg" />

      <div className="mood-content">
        <h2 className="mood-question">
          {typedText}
          <span className="cursor">|</span>
        </h2>

        <div className="mood-carousel-container">
          <div className="mood-carousel">
            {moodOptions.map((mood, index) => (
              <button
                key={mood.id}
                className={`mood-card ${selectedMood === mood.id ? 'selected' : ''}`}
                onClick={() => handleMoodSelect(mood.id)}
                style={{ animationDelay: `${0.8 + index * 0.15}s` }}
              >
                <img src={mood.image} alt="Valentine mood" className="mood-image" />
              </button>
            ))}
          </div>
        </div>

        <p className="select-hint">👆 Tap to select one</p>
      </div>

      <style jsx>{`
        .mood-screen {
          min-height: 100dvh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 1.5rem 0;
          box-sizing: border-box;
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

        .mood-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          width: 100%;
        }

        .mood-question {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(1.25rem, 5vw, 1.75rem);
          font-weight: 600;
          color: white;
          margin: 0;
          text-align: center;
          min-height: 3.5rem;
          line-height: 1.4;
          padding: 0 1.5rem;
        }

        .cursor {
          display: inline-block;
          color: #ff6b9d;
          animation: blink 0.8s ease-in-out infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }

        .mood-carousel-container {
          width: 100%;
          overflow-x: auto;
          overflow-y: hidden;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .mood-carousel-container::-webkit-scrollbar {
          display: none;
        }

        .mood-carousel {
          display: flex;
          gap: 1rem;
          padding: 1rem 1.5rem;
          scroll-snap-type: x mandatory;
        }

        .mood-card {
          flex: 0 0 75vw;
          max-width: 320px;
          background: rgba(255, 255, 255, 0.05);
          border: 3px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          padding: 0;
          cursor: pointer;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
          -webkit-tap-highlight-color: transparent;
          overflow: hidden;
          scroll-snap-align: center;
        }

        .mood-card:hover {
          border-color: rgba(255, 107, 157, 0.6);
          transform: scale(1.03);
        }

        .mood-card:active {
          transform: scale(0.97);
        }

        .mood-card.selected {
          border-color: #ff6b9d;
          box-shadow: 0 0 50px rgba(255, 107, 157, 0.5);
          transform: scale(1.02);
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

        .mood-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .select-hint {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
