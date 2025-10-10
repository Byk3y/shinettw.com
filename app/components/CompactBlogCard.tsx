import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '../types/blog'
import { getCategoryColor } from '../config/blog'

interface CompactBlogCardProps {
  post: BlogPost
  className?: string
}

export default function CompactBlogCard({ post, className = '' }: CompactBlogCardProps) {
  const categoryColor = getCategoryColor(post.frontmatter.category)

  return (
    <Link href={`/blog/${post.slug}`} className={`block group ${className}`}>
      <article className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-chrome/50 transition-all duration-200 hover:shadow-lg hover:shadow-chrome/20 overflow-hidden">
        <div className="flex">
          {/* Image - Left Side */}
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
            <Image
              src={post.frontmatter.coverImage}
              alt={post.frontmatter.title}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-200 group-hover:scale-105"
              sizes="96px"
            />
          </div>
          
          {/* Content - Right Side */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              {/* Author & Date */}
              <div className="text-xs text-gray-400 mb-1">
                {post.frontmatter.author} • {format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}
              </div>
              
              {/* Title */}
              <h3 className="text-sm font-semibold text-white mb-2 leading-tight group-hover:text-chrome transition-colors duration-200 line-clamp-2">
                {post.frontmatter.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-gray-300 text-xs leading-relaxed mb-2 line-clamp-2">
                {post.frontmatter.excerpt}
              </p>
            </div>
            
            {/* Category Tags */}
            <div className="flex flex-wrap gap-1">
              <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${categoryColor} text-white`}>
                {post.frontmatter.category.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
