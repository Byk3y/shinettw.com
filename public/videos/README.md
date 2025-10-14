# Video Directory for LOCO Landing Page

This directory contains video files for the LOCO single landing page.

## Required Files

- `SHINE 2a.mp4` - Instagram preview video of the LOCO single ✅ **IMPLEMENTED**
  - Should be the same video Shine used to preview the song on Instagram
  - Format: MP4 (H.264 codec)
  - Quality: Optimized for web (recommended <10MB)
  - Aspect ratio: 1:1 or 4:5 (Instagram standard)
  - Duration: 15-60 seconds recommended

## How to Add Your Video

1. **Export your Instagram preview video:**
   - Format: MP4 with H.264 codec
   - Resolution: 1080x1080 (square) or 1080x1350 (4:5)
   - File size: Under 10MB for fast loading
   - Duration: Keep it concise (15-60 seconds)

2. **Video is now implemented:**
   - Video file: `SHINE 2a.mp4` ✅
   - Location: `/public/videos/SHINE 2a.mp4` ✅
   - The video player on the landing page is now using this file ✅

## Video Features

- **Video thumbnail:** Uses first frame of video as thumbnail (no poster image)
- **Responsive:** Works on both desktop and mobile
- **Custom controls:** Styled to match your brand (gold accents)
- **Mobile-optimized:** Uses `playsinline` for iOS compatibility
- **Performance:** Preloads only metadata for fast initial load

## Technical Notes

- The video will replace the static cover image on the LOCO landing page
- Audio player is removed since the video includes audio
- Video's first frame serves as thumbnail (no separate poster image)
- Video controls are styled to match your brand aesthetic
- Maintains responsive layout (side-by-side on desktop, stacked on mobile)

## Current Status
- ✅ Landing page created at `/loco`
- ✅ Video player implemented with `SHINE 2a.mp4`
- ✅ Video thumbnail uses first frame (no poster image needed)
- ✅ UTM parameter tracking implemented
- ✅ Environment variable configured
- ✅ **Instagram preview video implemented** - `SHINE 2a.mp4` is now live!

## Next Steps
1. ✅ Video implemented - `SHINE 2a.mp4` is live!
2. Set `NEXT_PUBLIC_ENCORE_URL` in your `.env.local` file (for presave link)
3. ✅ Test the page at `http://localhost:3000/loco`
