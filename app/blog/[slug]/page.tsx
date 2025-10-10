import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { format } from 'date-fns'
import { getPostBySlugClient, getRelatedPostsClient } from '../../lib/blog-client'
import { getCategoryColor } from '../../config/blog'
import BlogCard from '../../components/BlogCard'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = ['behind-scenes-aunty-mary', 'time-music-video-release', 'encore-bi-monthly-performance-recap', 'apple-music-up-next-recognition']
  return slugs.map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlugClient(params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found - Shine TTW',
      description: 'The requested blog post could not be found.',
    }
  }

  return {
    title: `${post.frontmatter.title} - Shine TTW Blog`,
    description: post.frontmatter.excerpt,
    keywords: `${post.frontmatter.category}, ${post.frontmatter.title}, Shine TTW, blog, music, events, stories, news`,
    openGraph: {
      title: `${post.frontmatter.title} - Shine TTW Blog`,
      description: post.frontmatter.excerpt,
      url: `https://shinettw.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.frontmatter.date).toISOString(),
      authors: [post.frontmatter.author],
      images: [
        {
          url: post.frontmatter.coverImage,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.frontmatter.title} - Shine TTW Blog`,
      description: post.frontmatter.excerpt,
      creator: '@shinettw_',
      images: [post.frontmatter.coverImage],
    },
    alternates: {
      canonical: `https://shinettw.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlugClient(params.slug)
  
  if (!post) {
      return (
        <>
          <Navigation />
          <main className="min-h-screen pt-20">
            <div className="container mx-auto px-6 text-center py-16">
              <h1 className="text-3xl font-bold text-white mb-4">Post Not Found</h1>
              <p className="text-gray-400 mb-8">
                The blog post you&apos;re looking for doesn&apos;t exist.
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

  const categoryColor = getCategoryColor(post.frontmatter.category)
  const relatedPosts = getRelatedPostsClient(post.slug, post.frontmatter.category, 3)

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

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Post Header */}
            <div className="max-w-4xl mx-auto">
              <div className="text-sm text-gray-400 mb-4">
                {post.frontmatter.author} • {format(new Date(post.frontmatter.date), 'MMMM dd, yyyy')}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                {post.frontmatter.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-8">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${categoryColor} text-white`}>
                  {post.frontmatter.category.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Post Content */}
        <section className="py-16">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700 p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {post.frontmatter.excerpt}
                  </p>
                  <p className="text-gray-400 mb-6">
                    This is a preview of the blog post content. The full post will be available soon with rich formatting, embedded media, and interactive elements.
                  </p>
                  <div className="bg-gray-800/50 border border-gray-600 rounded-lg p-6 my-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Coming Soon</h3>
                    <p className="text-gray-300 mb-4">
                      Full blog post content with MDX support, embedded Spotify tracks, YouTube videos, and interactive elements will be available in the next update.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16">
              <h2 className="text-2xl font-bold text-white text-center mb-12">More from {post.frontmatter.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}