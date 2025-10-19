# Music Management Guide

## Overview
The music section is now managed through a configuration file to avoid hardcoding and make updates easier.

## File Structure
```
app/
├── config/
│   └── music.ts          # Music data configuration
└── components/
    └── MusicCarousel.tsx # Music carousel component
```

## How to Update Music Data

### 1. Edit `app/config/music.ts`
This file contains all music tracks with their metadata:

```typescript
export const musicData: MusicItem[] = [
  {
    id: 1,
    title: "The Chosen One",
    subtitle: "Debut EP",
    coverArt: "/music/ep-the-chosen-one.jpg",
    streamingLinks: {
      primary: "https://example.com/track", // Optional: specific track link
      appleMusic: "https://music.apple.com/...",
      spotify: "https://open.spotify.com/...",
      youtube: "https://www.youtube.com/..."
    }
  }
]
```

### 2. Adding New Tracks
1. Add cover art to `public/music/` folder
2. Add new track object to `musicData` array
3. Include all required fields: `id`, `title`, `subtitle`, `coverArt`, `streamingLinks`

### 3. Updating Streaming Links
- **Primary Link**: Use for specific track releases (like "I Go" with Bob Sinclar)
- **Platform Links**: Use for general artist pages
- The LISTEN button will use `primary` link if available, otherwise falls back to `appleMusic`

### 4. Cover Art Requirements
- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 1000x1000px or higher
- **Location**: `public/music/` folder
- **Naming**: Use descriptive names (e.g., `ep-the-chosen-one.jpg`)

## Current Tracks
1. **The Chosen One** - Debut EP
2. **I Go** - feat. Bob Sinclar (with primary streaming link)
3. **AUNTY MARY** - feat. Spinall, Darkoo
4. **TIME** - Single
5. **LOCO** - Single (presave track)

## Features
- **Smart LISTEN Button**: Uses primary link when available
- **Carousel Navigation**: Arrow buttons to browse tracks
- **Responsive Design**: Works on mobile and desktop
- **Easy Updates**: All data managed in one configuration file

## Best Practices
- Keep cover art files optimized for web
- Use consistent naming conventions
- Always provide fallback streaming links
- Test all links before deployment
