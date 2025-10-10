import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '../types/blog'
import { getCategoryColor } from '../config/blog'

interface BlogCardProps {
  post: BlogPost
  className?: string
}

export default function BlogCard({ post, className = '' }: BlogCardProps) {
  const categoryColor = getCategoryColor(post.frontmatter.category)

  return (
    <Link href={`/blog/${post.slug}`} className={`block group ${className}`}>
      <article className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-chrome/50 transition-all duration-200 hover:shadow-lg hover:shadow-chrome/20 overflow-hidden">
        {/* Dark Image Container */}
        <div className="relative h-48 overflow-hidden">
              <Image
                src={post.frontmatter.featuredImage}
            alt={post.frontmatter.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-200 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Dark Content */}
        <div className="p-6">
          {/* Author & Date */}
          <div className="text-sm text-gray-400 mb-2">
            {post.frontmatter.author} • {format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}
          </div>
          
          {/* Title */}
          <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-chrome transition-colors duration-200">
            {post.frontmatter.title}
          </h3>
          
          {/* Excerpt */}
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.frontmatter.excerpt}
          </p>
          
          {/* Category Tag */}
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColor} text-white`}>
              {post.frontmatter.category.toUpperCase()}
            </span>
            
            {/* External Link Icon */}
            <svg className="w-4 h-4 text-gray-400 group-hover:text-chrome transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}