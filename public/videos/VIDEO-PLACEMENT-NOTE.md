# Video File Placement Note

## IMPORTANT: Large Video File

The Instagram preview video `SHINE 2a.mp4` (262.59 MB) is too large for GitHub's 100 MB file size limit and has been excluded from the repository.

## How to Add Your Video

1. **Place your video file** at: `/public/videos/SHINE 2a.mp4`
2. **File name must be exactly:** `SHINE 2a.mp4` (case-sensitive)
3. **The LOCO landing page will automatically use this video**

## Video Specifications

- **Format:** MP4 with H.264 codec
- **Size:** Currently 262.59 MB (consider compressing for web)
- **Recommended size:** Under 10MB for optimal web performance
- **Aspect ratio:** Instagram standard (1:1 or 4:5)

## Compression Recommendation

To reduce file size for better web performance:

```bash
# Using FFmpeg to compress the video
ffmpeg -i "SHINE 2a.mp4" -c:v libx264 -crf 28 -c:a aac -b:a 128k "SHINE 2a-compressed.mp4"
```

## Current Status

- ✅ LOCO landing page is ready and functional
- ✅ Video player is implemented and styled
- ✅ PRESAVE button links to: https://shinettw.ffm.to/loco
- ⏳ **Waiting for video file placement**

Once you place the video file, the LOCO landing page will be fully functional!
