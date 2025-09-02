export interface Video {
  id: number
  title: string
  thumbnail: string
  youtubeId: string
  description: string
}

export const videosData: Video[] = [
  {
    id: 1,
    title: "TIME - Official Music Video",
    thumbnail: "https://img.youtube.com/vi/KqTW4uTwV18/maxresdefault.jpg",
    youtubeId: "KqTW4uTwV18",
    description: "Official music video for TIME"
  },
  {
    id: 2,
    title: "No Religion",
    thumbnail: "https://img.youtube.com/vi/QgBb4Nyu4JE/maxresdefault.jpg",
    youtubeId: "QgBb4Nyu4JE",
    description: "No Religion - Official Video"
  },
  {
    id: 3,
    title: "Sakura (Official Visualizer)",
    thumbnail: "https://img.youtube.com/vi/rmONv8HIfFo/maxresdefault.jpg",
    youtubeId: "rmONv8HIfFo",
    description: "Official visualizer for Sakura"
  },
  {
    id: 4,
    title: "Hiii! (Official Visualizer)",
    thumbnail: "https://img.youtube.com/vi/7hOd2SSx5KI/maxresdefault.jpg",
    youtubeId: "7hOd2SSx5KI",
    description: "Official visualizer for Hiii!"
  },
  {
    id: 5,
    title: "AMG (Official Music Video)",
    thumbnail: "https://img.youtube.com/vi/qLyYc4vMQ9I/maxresdefault.jpg",
    youtubeId: "qLyYc4vMQ9I",
    description: "Official music video for AMG"
  },
  {
    id: 6,
    title: "Glory (Official Visualizer)",
    thumbnail: "https://img.youtube.com/vi/v6ZcTgttqOU/maxresdefault.jpg",
    youtubeId: "v6ZcTgttqOU",
    description: "Official visualizer for Glory"
  }
]
