'use client'

import { useParams } from 'next/navigation'
import { useState } from 'react'
import IntroScreen from './components/IntroScreen'
import TeaserScreen from './components/TeaserScreen'
import ProposalScreen from './components/ProposalScreen'
import ReactionScreen from './components/ReactionScreen'
import AcknowledgementScreen from './components/AcknowledgementScreen'
import MoodScreen from './components/MoodScreen'
import MoodResultScreen from './components/MoodResultScreen'
import FeedbackScreen from './components/FeedbackScreen'
import OutroScreen from './components/OutroScreen'

type Screen = 'intro' | 'teaser' | 'proposal' | 'reaction' | 'acknowledgement' | 'mood' | 'result' | 'feedback' | 'outro'

const SCREEN_ORDER: Screen[] = [
  'intro',
  'teaser',
  'proposal',
  'reaction',
  'acknowledgement',
  'mood',
  'result',
  'feedback',
  'outro'
]

export default function ValentinePage() {
  const params = useParams()
  const name = params.name as string
  const displayName = name.charAt(0).toUpperCase() + name.slice(1)

  const [currentScreen, setCurrentScreen] = useState<Screen>('intro')
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const currentIndex = SCREEN_ORDER.indexOf(currentScreen)
  const progressPercentage = ((currentIndex + 1) / SCREEN_ORDER.length) * 100

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentScreen(SCREEN_ORDER[currentIndex - 1])
    }
  }

  const handleMoodSelected = (moodId: string) => {
    setSelectedMood(moodId)
    setCurrentScreen('result')
  }

  // Render current screen content
  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return (
          <IntroScreen
            displayName={displayName}
            onContinue={() => setCurrentScreen('teaser')}
          />
        )

      case 'teaser':
        return (
          <TeaserScreen
            onContinue={() => setCurrentScreen('proposal')}
          />
        )

      case 'proposal':
        return (
          <ProposalScreen
            onContinue={() => setCurrentScreen('reaction')}
          />
        )

      case 'reaction':
        return (
          <ReactionScreen
            onContinue={() => setCurrentScreen('acknowledgement')}
          />
        )

      case 'acknowledgement':
        return (
          <AcknowledgementScreen
            onContinue={() => setCurrentScreen('mood')}
          />
        )

      case 'mood':
        return (
          <MoodScreen
            onMoodSelected={handleMoodSelected}
          />
        )

      case 'result':
        return (
          <MoodResultScreen
            moodId={selectedMood || 'in-love'}
            onContinue={() => setCurrentScreen('feedback')}
          />
        )

      case 'feedback':
        return (
          <FeedbackScreen
            displayName={displayName}
            onContinue={() => setCurrentScreen('outro')}
          />
        )

      case 'outro':
        return (
          <OutroScreen displayName={displayName} />
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>

      {/* Back Button */}
      {currentIndex > 0 && currentScreen !== 'outro' && (
        <button className="back-button" onClick={handleBack}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back</span>
        </button>
      )}

      {/* Spinning Logo - matches main website sidepanel */}
      <div style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        zIndex: 100,
        pointerEvents: 'none'
      }}>
        <img
          src="/icons/brand-shine-website.png"
          alt="Shinettw"
          style={{
            width: '64px',
            height: '64px',
            animation: 'spin 3s linear infinite',
            filter: 'drop-shadow(0 0 10px rgba(255, 107, 157, 0.5))'
          }}
        />
      </div>

      <div className="content-wrap">
        {renderScreen()}
      </div>

      <style jsx>{`
        .content-wrap {
          width: 100%;
          min-height: 100dvh;
          padding-top: 5rem; /* Safe area for back button & progress bar */
          display: flex;
          flex-direction: column;
        }

        .progress-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(to right, #ff6b9d, #ff9a7b);
          transition: width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 0 12px rgba(255, 107, 157, 0.5);
        }

        .back-button {
          position: fixed;
          top: 1.5rem;
          left: 1.5rem;
          z-index: 100;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          padding: 0.6rem 1rem 0.6rem 0.6rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          font-family: 'Bricolage Grotesque', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-3px);
          border-color: rgba(255, 107, 157, 0.3);
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      {renderScreen()}
    </>
  )
}
