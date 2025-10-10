export interface BlogFrontmatter {
  title: string
  slug: string
  date: string
  category: 'music' | 'events' | 'stories' | 'news'
  author: string
  excerpt: string
  featuredImage: string
  tags: string[]
  published?: boolean
}

export interface BlogPost {
  frontmatter: BlogFrontmatter
  content: string
  slug: string
  readingTime: number
}

export interface Category {
  name: string
  slug: string
  description: string
  color: string
}

export interface BlogConfig {
  categories: Category[]
  postsPerPage: number
  featuredPostCount: number
}
