'use client'

import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import MobileMenu from './Navigation/MobileMenu'
import DesktopNav from './Navigation/DesktopNav'
import BookingButton from './Navigation/BookingButton'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection()
  const pathname = usePathname()
  
  // Hide social media icons on blog pages
  const isBlogPage = pathname?.startsWith('/blog')

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        activeSection={activeSection}
        isBlogPage={isBlogPage}
      />
      
      <DesktopNav activeSection={activeSection} />
      
      <BookingButton variant="mobile" />
      <BookingButton variant="desktop" />
    </>
  )
}
