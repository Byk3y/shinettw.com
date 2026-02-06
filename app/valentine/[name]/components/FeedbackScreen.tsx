'use client'

import { useState } from 'react'
import { saveValentineFeedback } from '../../../actions'

interface FeedbackScreenProps {
    displayName: string
    onContinue: () => void
}

export default function FeedbackScreen({ displayName, onContinue }: FeedbackScreenProps) {
    const [feedback, setFeedback] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = async () => {
        if (!feedback.trim()) {
            setError('Please write something first! ✍️')
            return
        }

        setIsSubmitting(true)
        setError('')

        try {
            const result = await saveValentineFeedback(displayName, feedback)
            if (result.success) {
                setIsSubmitted(true)
                setTimeout(() => {
                    onContinue()
                }, 2000)
            } else {
                setError(result.message)
            }
        } catch (err) {
            setError('Something went wrong. Try again! 💫')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="feedback-screen">
            <div className="valentine-bg" />

            <div className="content-container">
                {!isSubmitted ? (
                    <>
                        <div className="header">
                            <h2 className="title">One thing you want from me this year...</h2>
                            <p className="subtitle">Music, videos, shows, anything! 🚀</p>
                        </div>

                        <div className="input-container">
                            <textarea
                                value={feedback}
                                onChange={(e) => {
                                    setFeedback(e.target.value)
                                    if (error) setError('')
                                }}
                                placeholder="Type your ideas here..."
                                disabled={isSubmitting}
                                className="feedback-input"
                            />
                            {error && <p className="error-text">{error}</p>}
                        </div>

                        <button
                            className={`submit-button ${isSubmitting ? 'loading' : ''}`}
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send to Shinettw 🕊️'}
                        </button>
                    </>
                ) : (
                    <div className="success-message">
                        <h2 className="success-icon">🕊️</h2>
                        <h2 className="title">Got it!</h2>
                        <p className="subtitle">Can't wait to make 2026 epic with you.</p>
                    </div>
                )}
            </div>

            <style jsx>{`
        .feedback-screen {
          min-height: 100dvh;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          background: #0a0a0a;
          overflow: hidden;
          font-family: 'Bricolage Grotesque', sans-serif;
          padding: 2rem;
        }

        .valentine-bg {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 50, 100, 0.15) 0%, transparent 70%);
        }

        .content-container {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
          text-align: center;
        }

        .header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .title {
          font-size: 2rem;
          font-weight: 800;
          color: white;
          margin: 0;
          line-height: 1.2;
        }

        .subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }

        .input-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feedback-input {
          width: 100%;
          min-height: 150px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          color: white;
          font-family: inherit;
          font-size: 1.1rem;
          resize: none;
          transition: all 0.3s ease;
          outline: none;
        }

        .feedback-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 50, 100, 0.5);
          box-shadow: 0 0 20px rgba(255, 50, 100, 0.1);
        }

        .error-text {
          color: #ff4d4d;
          font-size: 0.9rem;
          margin: 0;
        }

        .submit-button {
          width: 100%;
          padding: 1.25rem;
          background: linear-gradient(135deg, #ff6b9d 0%, #ff9a7b 100%);
          border: none;
          border-radius: 100px;
          color: white;
          font-size: 1.1rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(255, 107, 157, 0.3);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(255, 107, 157, 0.5);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(1px);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .loading {
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }

        .success-message {
          animation: fadeUp 0.6s ease-out;
        }

        .success-icon {
          font-size: 4rem;
          margin: 0 0 1.5rem 0;
          animation: wave 1s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(10deg); }
          75% { transform: rotate(-10deg); }
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    )
}
