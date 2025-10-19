// Client-side blog utilities - static data for now
import { BlogPost } from '../types/blog'

// Static blog posts data for client-side rendering
const staticPosts: BlogPost[] = [
  {
    frontmatter: {
      title: "Behind the Scenes: Making AUNTY MARY",
      slug: "behind-scenes-aunty-mary",
      date: "2024-10-15",
      category: "stories" as const,
      author: "Shine TTW",
      excerpt: "An inside look at the creative process behind the collaboration with Spinall and Darkoo on AUNTY MARY",
      featuredImage: "/music/collab-spinall-aunty-mary.jpg",
      tags: ["collaboration", "spinall", "darkoo", "studio", "afro beats"],
      published: true
    },
    content: "",
    slug: "behind-scenes-aunty-mary",
    readingTime: 5
  },
  {
    frontmatter: {
      title: "TIME Music Video Release",
      slug: "time-music-video-release",
      date: "2024-10-10",
      category: "music" as const,
      author: "Shine TTW",
      excerpt: "The official music video for TIME is finally here! Watch the visual story that brings the song to life",
      featuredImage: "/music/single-time.jpg",
      tags: ["music video", "time", "release", "visual", "afro beats"],
      published: true
    },
    content: "",
    slug: "time-music-video-release",
    readingTime: 4
  },
  {
    frontmatter: {
      title: "Encore Bi-Monthly Live Performance Recap",
      slug: "encore-bi-monthly-performance-recap",
      date: "2024-10-05",
      category: "events" as const,
      author: "Shine TTW",
      excerpt: "Recap of the incredible Encore Bi-Monthly Live Performance - the energy was absolutely electric!",
      featuredImage: "/images/blog/encore-performance.jpg",
      tags: ["live performance", "encore", "concert", "lagos", "afro beats"],
      published: true
    },
    content: "",
    slug: "encore-bi-monthly-performance-recap",
    readingTime: 6
  },
  {
    frontmatter: {
      title: "Apple Music Up Next Recognition",
      slug: "apple-music-up-next-recognition",
      date: "2024-09-28",
      category: "news" as const,
      author: "Shine TTW",
      excerpt: "I'm honored to be featured in Apple Music's Up Next program - a recognition that means everything to me",
      featuredImage: "/music/ep-the-chosen-one.jpg",
      tags: ["apple music", "up next", "recognition", "achievement", "afro beats"],
      published: true
    },
    content: "",
    slug: "apple-music-up-next-recognition",
    readingTime: 5
  }
]

export function getAllPostsClient(): BlogPost[] {
  return staticPosts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date)
    const dateB = new Date(b.frontmatter.date)
    return dateB.getTime() - dateA.getTime()
  })
}

export function getPostsByCategoryClient(category: string): BlogPost[] {
  if (category === 'all') {
    return getAllPostsClient()
  }
  return getAllPostsClient().filter(post => post.frontmatter.category === category)
}

export function getPostBySlugClient(slug: string): BlogPost | null {
  return staticPosts.find(post => post.slug === slug) || null
}

export function getRelatedPostsClient(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  const categoryPosts = getPostsByCategoryClient(category)
  return categoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}
