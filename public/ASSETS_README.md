# ShineTTW Website Assets

This document outlines the asset folder structure and naming conventions for the ShineTTW website.

## Folder Structure

```
public/
├── videos/           # Video content (hero.mp4, hero-poster.jpg)
├── music/            # Music cover art (singles, EPs, albums)
├── images/           # General artist visuals (press shots, backgrounds)
└── icons/            # Platform icons (Spotify, Apple Music, YouTube, etc.)
```

## Naming Conventions

### Music Cover Art (`/music/`)
- **Singles**: `single-[title].jpg` (e.g., `single-wahala.jpg`)
- **EPs**: `ep-[title].jpg` (e.g., `ep-the-chosen-one.jpg`)
- **Albums**: `album-[title].jpg`
- **Rules**: Always lowercase, hyphen-separated, no spaces

### Images (`/images/`)
- **Press Shots**: `press-[description].jpg`
- **Backgrounds**: `bg-[description].jpg`
- **Artist Photos**: `artist-[description].jpg`

### Icons (`/icons/`)
- **Platform Icons**: `[platform]-icon.svg` (e.g., `spotify-icon.svg`)
- **UI Icons**: `[description]-icon.svg`

## URL Access

- **Music**: `/music/[filename].jpg` (e.g., `/music/single-wahala.jpg`)
- **Images**: `/images/[filename].jpg`
- **Icons**: `/icons/[filename].svg`
- **Videos**: `/videos/[filename].mp4`

## File Formats

- **Images**: JPG for photos, PNG for graphics with transparency
- **Icons**: SVG for scalability, PNG for fallback
- **Videos**: MP4 for web compatibility

## Git Tracking

Each folder contains a `.gitkeep` file to ensure Git tracks empty folders. Remove these files once assets are added.
