'use client'

import React from 'react'
import { blogConfig } from '../config/blog'

interface NewBlogCategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export default function NewBlogCategoryFilter({ activeCategory, onCategoryChange, className = '' }: NewBlogCategoryFilterProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          activeCategory === 'all'
            ? 'bg-chrome text-black'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
        }`}
      >
        All posts
      </button>

      {blogConfig.categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category.slug
              ? `${category.color} text-white`
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
