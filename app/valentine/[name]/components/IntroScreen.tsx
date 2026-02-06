'use client'

interface IntroScreenProps {
  displayName: string
  onContinue: () => void
}

export default function IntroScreen({ displayName, onContinue }: IntroScreenProps) {
  return (
    <div className="valentine-intro">
      {/* Background gradient */}
      <div className="valentine-bg" />

      {/* Floating hearts animation */}
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="heart"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              fontSize: `${1.5 + Math.random()}rem`
            }}
          >
            💕
          </span>
        ))}
      </div>

      {/* Main content */}
      <div className="valentine-content">
        <h1 className="valentine-greeting">
          Hi {displayName}!
          <span className="wave">👋</span>
        </h1>

        <div className="valentine-gif-container">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeGJrdTNud3U3Nzc4NXVsZHc4Y2VwNWx2aHc5OHkyY3FpMXJraXdvdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XD9o33QG9BoMis7iM4/giphy.gif"
            alt="Welcome"
            className="valentine-gif"
          />
        </div>

        <button className="valentine-button" onClick={onContinue}>
          Let&apos;s Go! 💕
        </button>
      </div>

      <style jsx>{`
        .valentine-intro {
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

        .floating-hearts {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .heart {
          position: absolute;
          bottom: -50px;
          animation: floatUp 8s ease-in-out infinite;
          opacity: 0.6;
        }

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .valentine-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          text-align: center;
        }

        .valentine-greeting {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: clamp(2.5rem, 10vw, 4rem);
          font-weight: 800;
          color: white;
          margin: 0;
          text-shadow: 0 0 40px rgba(255, 100, 150, 0.5);
          animation: fadeInUp 0.8s ease-out;
        }

        .wave {
          display: inline-block;
          animation: wave 1.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .valentine-gif-container {
          width: 85vw;
          max-width: 400px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 
            0 20px 60px rgba(255, 50, 100, 0.3),
            0 0 0 1px rgba(255, 255, 255, 0.1);
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .valentine-gif {
          width: 100%;
          height: auto;
          display: block;
        }

        .valentine-button {
          font-family: 'Bricolage Grotesque', system-ui, sans-serif;
          font-size: 1.25rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0a0a0a;
          background: linear-gradient(135deg, #ff6b9d 0%, #ffb347 50%, #ff6b9d 100%);
          background-size: 200% 200%;
          animation: fadeInUp 0.8s ease-out 0.4s both, shimmer 3s ease infinite;
          border: none;
          border-radius: 16px;
          padding: 1.25rem 3rem;
          cursor: pointer;
          box-shadow: 
            0 10px 30px rgba(255, 107, 157, 0.5),
            0 0 0 0 rgba(255, 107, 157, 0.5);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .valentine-button:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 
            0 20px 50px rgba(255, 107, 157, 0.6),
            0 0 0 0 rgba(255, 107, 157, 0.5);
        }

        .valentine-button:active {
          transform: translateY(-2px) scale(0.98);
        }
      `}</style>
    </div>
  )
}
