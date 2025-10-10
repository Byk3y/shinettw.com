'use client'

import React from 'react'
import { blogConfig } from '../config/blog'

interface BlogCategoryFilterProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
  className?: string
}

export default function BlogCategoryFilter({ activeCategory, onCategoryChange, className = '' }: BlogCategoryFilterProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-3 ${className}`}>
      {/* All Posts Button */}
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
          activeCategory === 'all'
            ? 'bg-chrome text-black border border-chrome'
            : 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-chrome hover:text-chrome'
        }`}
      >
        All posts
      </button>

      {/* Category Buttons */}
      {blogConfig.categories.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            activeCategory === category.slug
              ? `${category.color} text-white border ${category.color}`
              : 'bg-gray-800 text-gray-300 border border-gray-600 hover:border-chrome hover:text-chrome'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}