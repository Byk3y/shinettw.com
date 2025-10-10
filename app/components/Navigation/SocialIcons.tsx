'use client'

import React from 'react'
import { socialLinks, desktopSocialLinks, mobileSocialLinks, type SocialLink } from '../../config/social'
import { trackSocialClick } from '../../config/analytics'

interface SocialIconsProps {
  variant?: 'desktop' | 'mobile' | 'footer'
  className?: string
  orientation?: 'horizontal' | 'vertical'
}

export default function SocialIcons({ 
  variant = 'desktop', 
  className = '',
  orientation = 'horizontal'
}: SocialIconsProps) {
  const getSocialLinks = (): SocialLink[] => {
    switch (variant) {
      case 'mobile':
        return mobileSocialLinks
      case 'footer':
        return socialLinks
      default:
        return desktopSocialLinks
    }
  }

  const links = getSocialLinks()
  
  const handleSocialClick = (platform: string) => {
    if (platform === 'Instagram') {
      trackSocialClick('Instagram')
    }
  }

  const containerClasses = orientation === 'vertical' 
    ? 'flex flex-col space-y-4'
    : 'flex space-x-4'

  return (
    <div className={`${containerClasses} ${className}`}>
      {links.map((link) => {
        const IconComponent = link.icon
        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-chrome transition-colors"
            onClick={() => handleSocialClick(link.platform)}
          >
            <IconComponent className="w-6 h-6" />
          </a>
        )
      })}
    </div>
  )
}
