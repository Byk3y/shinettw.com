import { BlogConfig, Category } from '../types/blog'

export const blogConfig: BlogConfig = {
  postsPerPage: 9,
  featuredPostCount: 3,
  categories: [
    {
      name: 'Music',
      slug: 'music',
      description: 'New releases, streaming milestones, and music announcements',
      color: '#EF4444'
    },
    {
      name: 'Events',
      slug: 'events',
      description: 'Concert recaps, festival coverage, and tour updates',
      color: '#10B981'
    },
    {
      name: 'Stories',
      slug: 'stories',
      description: 'Behind the scenes, collaborations, and personal posts',
      color: '#8B5CF6'
    },
    {
      name: 'News',
      slug: 'news',
      description: 'Press coverage, interviews, awards, and announcements',
      color: '#F59E0B'
    }
  ]
}

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return blogConfig.categories.find(category => category.slug === slug)
}

export const getCategoryColor = (categorySlug: string): string => {
  const category = getCategoryBySlug(categorySlug)
  return category?.color || '#C0C0C0'
}
