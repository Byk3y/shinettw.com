// Google Analytics 4 Configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Custom event tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Music-specific tracking
export const trackMusicPlay = (trackName: string, platform: string) => {
  trackEvent('music_play', 'Music', `${trackName} - ${platform}`)
}

// Video-specific tracking
export const trackVideoPlay = (videoTitle: string) => {
  trackEvent('video_play', 'Video', videoTitle)
}

// Newsletter signup tracking
export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', 'Engagement', 'Newsletter Form')
}

// Event RSVP tracking
export const trackEventRSVP = (eventName: string) => {
  trackEvent('event_rsvp', 'Events', eventName)
}

// Social media link tracking
export const trackSocialClick = (platform: string) => {
  trackEvent('social_click', 'Social Media', platform)
}

// Booking inquiry tracking
export const trackBookingInquiry = () => {
  trackEvent('booking_inquiry', 'Business', 'Email Contact')
}

// Page view tracking
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
