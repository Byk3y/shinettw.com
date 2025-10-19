# Shine TTW Website Assets

This document outlines the asset folder structure and naming conventions for the Shine TTW website.

## Folder Structure

```
public/
├── videos/           # Video content (hero.mp4, hero-poster.jpg)
├── music/            # Music cover art (singles, EPs, albums, collaborations)
├── images/           # General artist visuals (press shots, backgrounds, blog, events)
│   ├── backgrounds/  # Background images
│   ├── blog/         # Blog-related images
│   └── events/       # Event-related images
├── icons/            # Website icons (favicons, brand icons)
├── fonts/            # Font files and font-related assets
└── audio/            # Audio files for previews
```

## Naming Conventions

### Music Cover Art (`/music/`)
- **Singles**: `single-[title].jpg` (e.g., `single-time.jpg`)
- **EPs**: `ep-[title].jpg` (e.g., `ep-the-chosen-one.jpg`)
- **Albums**: `album-[title].jpg`
- **Collaborations**: `collab-[artist]-[title].jpg` (e.g., `collab-spinall-aunty-mary.jpg`)
- **Rules**: Always lowercase, hyphen-separated, no spaces, no special characters

### Event Images (`/images/events/`)
- **Event Posters**: `event-[event-name]-poster.jpg` (e.g., `event-lagos-encore-poster.jpg`)
- **Event Photos**: `event-[event-name]-[description].jpg` (e.g., `event-lagos-encore-photo.jpg`)
- **Rules**: Descriptive names, lowercase, hyphen-separated

### Blog Images (`/images/blog/`)
- **Blog Featured Images**: `blog-[slug]-featured.jpg`
- **Blog Content Images**: `blog-[slug]-[description].jpg`
- **Rules**: Match blog post slug, descriptive, lowercase

### Background Images (`/images/backgrounds/`)
- **Website Backgrounds**: `bg-[description].jpg` (e.g., `bg-website.jpg`)
- **Rules**: Descriptive, lowercase, hyphen-separated

### Icons (`/icons/`)
- **Favicons**: `favicon-[size].png` (e.g., `favicon-32x32.png`)
- **App Icons**: `app-icon-[size].png` (e.g., `app-icon-192x192.png`)
- **Brand Icons**: `brand-[name].png` (e.g., `brand-shine-website.png`)
- **Rules**: Descriptive purpose, lowercase, hyphen-separated

## URL Access

- **Music**: `/music/[filename].jpg` (e.g., `/music/single-time.jpg`)
- **Images**: `/images/[subfolder]/[filename].jpg`
- **Icons**: `/icons/[filename].png`
- **Videos**: `/videos/[filename].mp4`
- **Audio**: `/audio/[filename].mp3`

## File Formats

- **Images**: JPG for photos, PNG for graphics with transparency
- **Icons**: PNG for web compatibility
- **Videos**: MP4 for web compatibility
- **Audio**: MP3 for web compatibility

## Current Asset Inventory

### Music Cover Art
- `single-time.jpg` - TIME single cover (372KB)
- `single-loco.jpg` - LOCO single cover (504KB)
- `ep-the-chosen-one.jpg` - The Chosen One EP cover (184KB)
- `ep-the-chosen-one-original.jpg` - Original EP cover (292KB)
- `collab-bob-sinclar-i-go.jpg` - I Go collaboration cover (300KB)
- `collab-spinall-aunty-mary.jpg` - AUNTY MARY collaboration cover (336KB)

### Event Images
- `event-lagos-encore-poster.jpg` - LagosEncore event poster (116KB)
- `event-lagos-encore-photo.jpg` - LagosEncore event photo (44KB)
- `event-lagos-encore-photo-converted.jpg` - Converted AVIF to JPG (148KB)

### Blog Images
- `blog-apple-music-feature.jpg` - Apple Music feature image (184KB)
- `blog-audience-energy.jpg` - Audience energy photo (528KB)
- `blog-encore-performance.jpg` - Encore performance photo (528KB)

### Icons
- `favicon-32x32.png` - 32x32 favicon
- `favicon-16x16.png` - 16x16 favicon
- `icon-144x144.png` - 144x144 app icon
- `icon-152x152.png` - 152x152 app icon
- `icon-192x192.png` - 192x192 app icon
- `icon-512x512.png` - 512x512 app icon
- `brand-shine-website.png` - Main brand icon
- `brand-shine-website-alt.png` - Alternative brand icon

## File Size Optimization Results

### Before Optimization:
- **Total Size**: ~70MB
- **Largest Files**: 
  - `ep-the-chosen-one-original.jpg`: 45MB
  - `single-time.jpg`: 13MB
  - `encore-performance.jpg`: 13MB
  - `audience-energy.jpg`: 13MB

### After Optimization:
- **Total Size**: ~3.5MB (95% reduction!)
- **All Files**: Under 600KB
- **Format Consistency**: All images properly formatted as JPG
- **Quality Maintained**: Visual quality preserved while dramatically reducing file sizes

### Performance Benefits:
- **Faster Loading**: 95% reduction in total image size
- **Better SEO**: Optimized images improve page load speeds
- **Mobile Friendly**: Smaller files load faster on mobile devices
- **Bandwidth Savings**: Reduced data usage for users

## Best Practices

1. **Consistent Naming**: Always use lowercase, hyphen-separated names
2. **Descriptive Names**: Include context and purpose in filename
3. **No Special Characters**: Avoid spaces, parentheses, commas in filenames
4. **Format Consistency**: Use appropriate formats for each asset type
5. **Size Optimization**: Compress images for web performance
6. **Version Control**: Keep original high-res files separate from web-optimized versions
