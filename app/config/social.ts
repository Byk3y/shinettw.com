import { 
  FaInstagram, 
  FaTiktok, 
  FaYoutube, 
  FaApple, 
  FaSpotify, 
  FaFacebook,
  FaSnapchat
} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export interface SocialLink {
  platform: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  analyticsEvent?: string
}

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/shinettw?igsh=MXN3eTMxMmN3MWh1Ng==',
    icon: FaInstagram,
    analyticsEvent: 'Instagram'
  },
  {
    platform: 'TikTok',
    url: 'https://www.tiktok.com/@shinettw?_t=8nortgxpdt0&_r=1',
    icon: FaTiktok
  },
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@shinettw?si=sgNtwCtr5W7zk07p?sub_confirmation=1',
    icon: FaYoutube
  },
  {
    platform: 'Apple Music',
    url: 'https://music.apple.com/ng/artist/shine-ttw/1649199436',
    icon: FaApple
  },
  {
    platform: 'Spotify',
    url: 'https://open.spotify.com/artist/5MMagWgGKYleThIlmQp6wn?si=-TBksCz9QZ2NVDL7kaPo_Q',
    icon: FaSpotify
  },
  {
    platform: 'X (Twitter)',
    url: 'https://x.com/shinettw_?s=11&t=Et70zsgSPUZVCQ4SiLBz9A',
    icon: FaXTwitter
  },
  {
    platform: 'Snapchat',
    url: 'https://www.snapchat.com/add/shinettw1',
    icon: FaSnapchat
  },
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/shinetotheworlds',
    icon: FaFacebook
  }
]

// Desktop social links (subset for desktop navigation)
export const desktopSocialLinks = socialLinks.filter(link => 
  ['Instagram', 'TikTok', 'YouTube', 'Apple Music', 'Spotify', 'X (Twitter)', 'Snapchat', 'Facebook'].includes(link.platform)
)

// Mobile social links (subset for mobile navigation)
export const mobileSocialLinks = socialLinks.filter(link => 
  ['Instagram', 'X (Twitter)', 'Facebook', 'YouTube', 'TikTok', 'Snapchat'].includes(link.platform)
)
