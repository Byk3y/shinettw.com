# Video Management Guide

## How to Add/Remove/Update Videos

### File Location
All video data is managed in: `app/config/videos.ts`

### Adding a New Video

1. **Get YouTube Video ID:**
   - Go to your YouTube video
   - Copy the video ID from the URL (e.g., `KqTW4uTwV18` from `https://youtu.be/KqTW4uTwV18`)

2. **Add to videos.ts:**
   ```typescript
   {
     id: 4, // Next sequential number
     title: "Your Video Title",
     thumbnail: "https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg",
     youtubeId: "YOUR_VIDEO_ID",
     description: "Description of your video"
   }
   ```

### Removing a Video

1. **Delete the video object** from the `videosData` array in `app/config/videos.ts`
2. **Update IDs** to maintain sequential numbering (optional but recommended)

### Updating Video Information

1. **Edit the video object** in `app/config/videos.ts`
2. **Change title, description, or YouTube ID** as needed
3. **Thumbnail updates automatically** when you change the YouTube ID

### Video Object Structure

```typescript
interface Video {
  id: number          // Unique identifier (1, 2, 3, etc.)
  title: string       // Video title (e.g., "TIME - Official Music Video")
  thumbnail: string   // YouTube thumbnail URL (auto-generated)
  youtubeId: string   // YouTube video ID (e.g., "KqTW4uTwV18")
  description: string // Short description of the video
}
```

### YouTube Thumbnail URLs

YouTube provides different thumbnail qualities:
- `maxresdefault.jpg` - Highest quality (1280x720)
- `hqdefault.jpg` - High quality (480x360)
- `mqdefault.jpg` - Medium quality (320x180)
- `sddefault.jpg` - Standard quality (640x480)

**Recommendation:** Use `maxresdefault.jpg` for best quality.

### Best Practices

1. **Keep IDs sequential** for easier management
2. **Use descriptive titles** that match your branding
3. **Keep descriptions concise** (1-2 sentences max)
4. **Test videos** after adding to ensure they play correctly
5. **Update this README** if you change the structure

### Example: Adding a New Video

```typescript
// In app/config/videos.ts
export const videosData: Video[] = [
  // ... existing videos ...
  {
    id: 4,
    title: "New Song - Music Video",
    thumbnail: "https://img.youtube.com/vi/NEW_VIDEO_ID/maxresdefault.jpg",
    youtubeId: "NEW_VIDEO_ID",
    description: "Official music video for New Song"
  }
]
```

### Troubleshooting

- **Video not playing?** Check if the YouTube ID is correct
- **Thumbnail not showing?** Verify the YouTube ID and thumbnail URL
- **Video opens in new tab?** This is normal YouTube behavior on some devices
- **Mobile issues?** The component is optimized for mobile, but some devices may behave differently

### Future Enhancements

Consider these improvements for production:
- **CMS Integration** (Contentful, Strapi, etc.)
- **Admin Panel** for non-technical users
- **Video Categories** (Music Videos, Live Performances, etc.)
- **Video Metadata** (Release date, duration, etc.)
- **Analytics Integration** (track video views)
