import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '../../../components/BlogCard'
import BlogCategoryFilter from '../../../components/BlogCategoryFilter'
import { getPostsByCategoryClient } from '../../../lib/blog-client'
import { getCategoryBySlug, blogConfig } from '../../../config/blog'
import Navigation from '../../../components/Navigation'
import Footer from '../../../components/Footer'

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateStaticParams() {
  return blogConfig.categories.map((category) => ({
    category: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategoryBySlug(params.category)
  
  if (!category) {
    return {
      title: 'Category Not Found - Shine TTW Blog',
      description: 'The requested blog category could not be found.',
    }
  }

  return {
    title: `${category.name} - Shine TTW Blog`,
    description: category.description,
    keywords: `${category.name.toLowerCase()}, shine ttw blog, afro beats ${category.name.toLowerCase()}`,
    openGraph: {
      title: `${category.name} - Shine TTW Blog`,
      description: category.description,
      url: `https://shinettw.com/blog/category/${category.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://shinettw.com/blog/category/${category.slug}`,
    },
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategoryBySlug(params.category)
  
  if (!category) {
      return (
        <>
          <Navigation />
          <main className="min-h-screen pt-20">
            <div className="container mx-auto px-6 text-center py-16">
              <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
              <p className="text-gray-400 mb-8">
                The blog category you&apos;re looking for doesn&apos;t exist.
              </p>
              <Link
                href="/blog"
                className="bg-chrome text-black font-semibold py-3 px-8 rounded-lg hover:bg-chrome/90 transition-colors duration-200"
              >
                Back to Blog
              </Link>
            </div>
          </main>
          <Footer />
        </>
      )
  }

  const posts = getPostsByCategoryClient(params.category)

  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-20">
        {/* Dark Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link 
                href="/blog" 
                className="text-gray-400 hover:text-chrome transition-colors duration-200 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
            </nav>

            {/* Section Title */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category.name}
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${category.color} text-white`}>
                  {category.name.toUpperCase()}
                </span>
                <span className="text-gray-400 text-sm">
                  {posts.length} {posts.length === 1 ? 'post' : 'posts'}
                </span>
              </div>
              
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            {/* Category Filter */}
            <BlogCategoryFilter 
              activeCategory={params.category} 
              onCategoryChange={(newCategory) => {
                if (newCategory === 'all') {
                  window.location.href = '/blog'
                } else {
                  window.location.href = `/blog/category/${newCategory}`
                }
              }}
              className="mb-0"
            />
          </div>
        </section>

        {/* Dark Grid Layout */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            {posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No posts yet</h3>
                <p className="text-gray-400 mb-8">
                  No posts found in the {category.name} category yet. Check back soon!
                </p>
                <Link 
                  href="/blog" 
                  className="bg-chrome text-black font-semibold py-3 px-8 rounded-lg hover:bg-chrome/90 transition-colors duration-200"
                >
                  View All Posts
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Category Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": `${category.name} - Shine TTW Blog`,
              "description": category.description,
              "url": `https://shinettw.com/blog/category/${category.slug}`,
              "mainEntity": {
                "@type": "ItemList",
                "name": `${category.name} Posts`,
                "description": category.description,
                "numberOfItems": posts.length,
                "itemListElement": posts.map((post, index) => ({
                  "@type": "BlogPosting",
                  "position": index + 1,
                  "headline": post.frontmatter.title,
                  "description": post.frontmatter.excerpt,
                  "url": `https://shinettw.com/blog/${post.slug}`,
                  "datePublished": post.frontmatter.date,
                  "author": {
                    "@type": "Person",
                    "name": post.frontmatter.author
                  },
                  "image": `https://shinettw.com${post.frontmatter.featuredImage}`
                }))
              }
            })
          }}
        />
      </main>
      <Footer />
    </>
  )
}