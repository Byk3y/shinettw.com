import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { BlogPost } from '../types/blog'
import { getCategoryColor } from '../config/blog'

interface NewBlogCardProps {
  post: BlogPost
  className?: string
}

export default function NewBlogCard({ post, className = '' }: NewBlogCardProps) {
  const categoryColor = getCategoryColor(post.frontmatter.category)

  return (
    <Link href={`/blog/${post.slug}`} className={`block group ${className}`}>
      <article className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:shadow-chrome/20 transition-all duration-300 ease-in-out border border-gray-700 hover:border-chrome/50">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={post.frontmatter.coverImage}
            alt={post.frontmatter.title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        <div className="p-6">
          <div className="text-sm text-gray-400 mb-2">
            {post.frontmatter.author} • {format(new Date(post.frontmatter.date), 'MMM dd, yyyy')}
          </div>
          
          <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-chrome transition-colors duration-200">
            {post.frontmatter.title}
          </h3>
          
          <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.frontmatter.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColor} text-white`}>
              {post.frontmatter.category.toUpperCase()}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
