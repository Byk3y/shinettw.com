'use client'

export default function LagosEncorePlaylist() {
  const playlists = {
    apple: {
      name: 'Apple Music',
      url: 'https://music.apple.com/ng/playlist/shine-ttw-set-encore-lagos/pl.u-AkAmPgmC2dqNDDq',
      icon: '🍎',
      color: 'bg-red-500 hover:bg-red-600'
    },
    spotify: {
      name: 'Spotify',
      url: 'https://open.spotify.com/playlist/53ve59Us8YgmdGMy4N4MTs?si=v52k-wv4SF-0Gii8rMRBvA&pi=es7ySrAkSuCwv',
      icon: '🎵',
      color: 'bg-green-500 hover:bg-green-600'
    },
    audiomack: {
      name: 'Audiomack',
      url: 'https://audiomack.com/tife-badass/playlist/shine-ttw-set-encore-lagos?share-user-id=7661739',
      icon: '🎧',
      color: 'bg-yellow-500 hover:bg-yellow-600'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lagos Encore</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">Live Set Playlist</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Listen to the 6 songs that will be performed live at Lagos Encore
          </p>
        </div>

        {/* Playlist Buttons */}
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-6">
            {Object.entries(playlists).map(([key, playlist]) => (
              <a
                key={key}
                href={playlist.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${playlist.color} text-white px-8 py-6 rounded-2xl text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center gap-4`}
              >
                <span className="text-3xl">{playlist.icon}</span>
                <span>Listen on {playlist.name}</span>
                <span className="text-2xl">→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
          <a 
            href="/#events"
            className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            ← Back to Events
          </a>
        </div>
      </div>
    </div>
  )
}
