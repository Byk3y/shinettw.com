import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogFrontmatter } from '../types/blog'

const contentDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        return getPostBySlug(slug)
      })
      .filter((post): post is BlogPost => post !== null && post.frontmatter.published !== false)
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date)
        const dateB = new Date(b.frontmatter.date)
        return dateB.getTime() - dateA.getTime()
      })

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const frontmatter = data as BlogFrontmatter
    const readingTimeResult = readingTime(content)
    
    return {
      frontmatter,
      content,
      slug,
      readingTime: Math.ceil(readingTimeResult.minutes)
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.filter(post => post.frontmatter.category === category)
}

export function getFeaturedPosts(limit: number = 3): BlogPost[] {
  const allPosts = getAllPosts()
  return allPosts.slice(0, limit)
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  const categoryPosts = getPostsByCategory(category)
  return categoryPosts
    .filter(post => post.slug !== currentSlug)
    .slice(0, limit)
}

export function getAllSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(contentDirectory)
    return fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''))
  } catch (error) {
    console.error('Error reading blog slugs:', error)
    return []
  }
}

export function getCategorySlugs(): string[] {
  return ['music', 'events', 'stories', 'news']
}
