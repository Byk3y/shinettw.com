# Website Background Image Setup

## Overview
The website now supports a custom background image that applies to all sections except the Hero section.

## How to Add Your Background Image

### 1. Place Your Image
Drop your background image file into:
```
public/images/backgrounds/
```

### 2. Recommended Naming
Name your file `website-bg.jpg` (or update the CSS if using a different name)

### 3. Supported Formats
- **JPG/JPEG** (recommended for photos)
- **PNG** (good for graphics with transparency)
- **WebP** (modern, smaller file size)

## Current Implementation

### CSS Class
The background is applied using the `.bg-website` class in `app/globals.css`:

```css
.bg-website {
  background-image: url('/images/backgrounds/website-bg.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
```

### Page Structure
The background is applied to all sections except the Hero:
```tsx
<main className="min-h-screen">
  <Hero /> {/* No background - keeps original styling */}
  <div className="bg-website"> {/* Background applied here */}
    <MusicCarousel />
    <VideosCarousel />
    <Events />
    <Connect />
    <Footer />
  </div>
</main>
```

## Customization Options

### Change Background Image
1. Replace the file in `public/images/backgrounds/`
2. Update the filename in `app/globals.css` if needed

### Adjust Background Properties
Modify the CSS in `app/globals.css`:

```css
.bg-website {
  background-image: url('/images/backgrounds/your-image.jpg');
  background-size: cover;        /* cover, contain, auto */
  background-position: center;   /* center, top, bottom, left, right */
  background-attachment: fixed;  /* fixed, scroll, local */
  background-repeat: no-repeat;  /* no-repeat, repeat, repeat-x, repeat-y */
}
```

### Add Overlay
To add a dark overlay over the background:
```css
.bg-website {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/images/backgrounds/website-bg.jpg');
  /* ... other properties */
}
```

## Best Practices

### Image Size
- **Recommended**: 1920x1080px or larger
- **Minimum**: 1200x800px
- **Format**: JPG for photos, PNG for graphics

### Performance
- **File size**: Keep under 2MB for optimal loading
- **Compression**: Use tools like TinyPNG or ImageOptim
- **Responsive**: Consider providing different sizes for mobile/desktop

### Accessibility
- Ensure sufficient contrast between background and text
- Test readability on different devices
- Consider adding a fallback background color

## Troubleshooting

### Image Not Showing
1. Check file path in `public/images/backgrounds/`
2. Verify filename matches CSS
3. Clear browser cache
4. Check browser console for 404 errors

### Performance Issues
1. Reduce image file size
2. Use WebP format if supported
3. Consider lazy loading for large images
4. Test on slower connections

### Mobile Issues
1. Test `background-attachment: fixed` on mobile
2. Consider mobile-specific background sizing
3. Test touch scrolling behavior
