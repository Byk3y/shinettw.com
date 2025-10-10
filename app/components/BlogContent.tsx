'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NewBlogCard from './NewBlogCard'
import NewBlogCategoryFilter from './NewBlogCategoryFilter'
import { getAllPostsClient } from '../lib/blog-client'

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const allPosts = getAllPostsClient()

  const featuredPost = allPosts[0]
  const remainingPosts = allPosts.slice(1)

  const filteredPosts = useMemo(() => {
    let postsToFilter = remainingPosts;
    if (searchTerm) {
        postsToFilter = allPosts.filter(post => 
        post.frontmatter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.frontmatter.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (activeCategory === 'all') {
      return postsToFilter;
    }

    return postsToFilter.filter(post => post.frontmatter.category === activeCategory)
  }, [activeCategory, searchTerm, allPosts, remainingPosts])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      {featuredPost && !searchTerm && (
        <section className="relative h-[50vh] w-full flex items-center justify-center text-white mb-16">
              <Image
                src={featuredPost.frontmatter.featuredImage}
            alt={featuredPost.frontmatter.title}
            fill
            style={{ objectFit: 'cover' }}
            className="absolute inset-0 z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 text-center p-4">
            <span className={`inline-flex items-center px-3 py-1 mb-4 rounded-full text-sm font-medium ${allPosts[0] && allPosts[0].frontmatter.category ? 'bg-chrome text-black' : 'bg-gray-600 text-white'}`}>
              {allPosts[0] && allPosts[0].frontmatter.category.toUpperCase()}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-shadow-lg">
              {featuredPost.frontmatter.title}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-shadow-lg">
              {featuredPost.frontmatter.excerpt}
            </p>
            <Link href={`/blog/${featuredPost.slug}`} className="bg-chrome text-black font-bold py-3 px-8 rounded-full hover:bg-gray-200 transition-colors duration-300">
                Read More
            </Link>
          </div>
        </section>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto">
            <input 
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-4 border border-gray-600 rounded-full text-lg focus:ring-2 focus:ring-chrome focus:outline-none bg-gray-900 text-white placeholder-gray-400"
            />
          </div>
          <NewBlogCategoryFilter 
            activeCategory={activeCategory} 
            onCategoryChange={setActiveCategory}
            className="mt-8 justify-center"
          />
        </section>

        {/* All Posts Grid */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">{!searchTerm ? 'Latest Articles' : 'Search Results'}</h2>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2 text-white">No posts found</h3>
              <p className="text-gray-400">Try a different search or category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <NewBlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}