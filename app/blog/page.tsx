import React from 'react'
import { Metadata } from 'next'
import BlogContent from '../components/BlogContent'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Blog - Shine TTW | Latest News & Stories',
  description: 'Read the latest news, behind-the-scenes stories, music releases, and event updates from Shine TTW. Stay connected with your favorite Afro Beats artist.',
  keywords: 'Shine TTW blog, afro beats news, music stories, behind the scenes, artist updates, Nigerian music blog',
  openGraph: {
    title: 'Blog - Shine TTW | Latest News & Stories',
    description: 'Read the latest news, behind-the-scenes stories, music releases, and event updates from Shine TTW.',
    url: 'https://shinettw.com/blog',
    type: 'website',
  },
}

export default function BlogPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
