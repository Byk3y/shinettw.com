<!-- 88374f88-15e6-4bb8-b98c-8d31e3327208 6d80472e-5154-4d28-8d09-02d61d2bcf66 -->
# QR Code Generator with Logo Overlay

## Overview

Add functionality to generate and download customized QR codes for shinettw.com/links using the `qrcode` npm library with Shine TTW logo overlay in the center. This will allow the team to create branded QR codes for event materials with professional quality.

## Implementation Steps

### 1. Create QR Code Component with Logo

Create `app/components/QRCodeWithLogo.tsx` - a reusable component that generates QR codes with logo overlay:

- Accept props: `url`, `size`, `logoPath`, `logoSize`, `errorCorrectionLevel`
- Default to `https://shinettw.com/links`
- Use `qrcode` library to generate QR code on canvas
- Load and overlay Shine TTW logo from `/icons/brand-shine-website.png`
- Use high error correction level (H) to ensure QR code works with logo covering center
- Position logo in center with proper sizing (20-30% of QR code size)
- Add white background/border around logo for better contrast

### 2. Create QR Download Page

Create `app/qr-download/page.tsx` - a dedicated page for generating and downloading QR codes:

- Input field to customize URL (default: `https://shinettw.com/links`)
- Size selector dropdown (300x300, 500x500, 800x800, 1000x1000, 1200x1200)
- Logo size slider (10% to 30% of QR code size)
- Toggle to show/hide logo overlay
- Error correction level selector (L, M, Q, H)
- Live preview of the QR code with logo
- Download button to save the QR code as high-quality PNG
- Style consistently with the links page design (gray gradient background, white cards)

### 3. Create Layout File

Create `app/qr-download/layout.tsx` with appropriate metadata:

- Page title: "QR Code Generator - Shine TTW"
- Description for SEO
- Open Graph tags

### 4. Add Link from Links Page (Optional)

Optionally add a small link/button on the links page to access the QR download page for easy discovery.

## Key Files to Create

- `app/components/QRCodeWithLogo.tsx` - Reusable QR code component with logo overlay
- `app/qr-download/page.tsx` - Download page with customization UI
- `app/qr-download/layout.tsx` - Metadata and layout

## Technical Details

- Uses `qrcode` npm library (free, open source) - INSTALLED ✓
- Canvas-based rendering for high-quality output
- Logo overlay with configurable size and position
- High error correction level to ensure QR codes scan reliably with logo
- Download functionality via canvas.toBlob() or canvas.toDataURL()
- Client-side generation for privacy and speed
- No external API calls required

## Logo Integration

- Logo file: `/icons/brand-shine-website.png`
- Logo size: 20-30% of QR code dimensions (configurable)
- White background circle around logo for better contrast
- Centered positioning

### To-dos

- [x] Create QRCodeWithLogo component with canvas-based rendering and logo overlay
- [x] Create QR download page with customization options (size, logo size, error correction)
- [x] Add layout file with metadata for QR download page
- [x] Test QR codes scan correctly with logo overlay at different sizes

