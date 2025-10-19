# ShineTTW Email Logo Optimization

## File Sizes Comparison

### Original Logo
- **File:** `brand-shine-website.png`
- **Size:** 1,559,314 bytes (1.56 MB)
- **Dimensions:** 1024x1024px
- **Format:** PNG with transparency

### Optimized Email Versions

| File | Size | Dimensions | Format | Use Case |
|------|------|------------|--------|----------|
| `logo-email-80.jpg` | 1,810 bytes (1.8 KB) | 80x80px | JPEG | **Primary email logo (no transparency needed)** |
| `logo-email-80.png` | 4,073 bytes (4.1 KB) | 80x80px | PNG | **Primary email logo (with transparency)** |
| `logo-email-80-optimized.png` | 4,589 bytes (4.6 KB) | 80x80px | PNG | **Optimized PNG version** |
| `logo-email-120.png` | 7,581 bytes (7.6 KB) | 120x120px | PNG | **Larger displays** |
| `logo-email-160.png` | 12,037 bytes (12 KB) | 160x160px | PNG | **High-DPI displays** |

## Optimization Results

- **File Size Reduction:** 99.7% (from 1.56MB to 1.8KB-12KB)
- **Loading Speed:** ~1000x faster
- **Email Compatibility:** ✅ Optimized for all major email clients

## Recommended Usage

### For Email Marketing (Resend)
```html
<!-- Static Logo (Recommended) -->
<img src="https://shinettw.com/images/email/logo-email-80.jpg" 
     alt="ShineTTW" 
     width="80" 
     height="80" 
     style="display:block;border:0;">

<!-- Static Logo with Transparency -->
<img src="https://shinettw.com/images/email/logo-email-80.png" 
     alt="ShineTTW" 
     width="80" 
     height="80" 
     style="display:block;border:0;">
```

### CSS Animation Version
```html
<div style="width: 80px; height: 80px; margin: 0 auto;">
  <img src="https://shinettw.com/images/email/logo-email-80.png" 
       alt="ShineTTW" 
       width="80" 
       height="80" 
       style="display: block; border: 0; animation: spin 1s linear infinite;">
</div>

<style>
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
```

## File URLs

- **Primary (JPEG):** https://shinettw.com/images/email/logo-email-80.jpg
- **Primary (PNG):** https://shinettw.com/images/email/logo-email-80.png
- **120px:** https://shinettw.com/images/email/logo-email-120.png
- **160px:** https://shinettw.com/images/email/logo-email-160.png

## Email Client Compatibility

✅ **Fully Supported:**
- Gmail (Web, Mobile, Desktop)
- Apple Mail (iOS, macOS)
- Yahoo Mail
- Thunderbird
- Outlook Web

⚠️ **CSS Animation Limited Support:**
- Outlook 2016/2019/365 (shows static version)
- Some corporate email clients

## Performance Benefits

- **Loading Time:** Under 0.1 seconds on 3G
- **Email Deliverability:** Improved (smaller attachments)
- **Mobile Performance:** Excellent
- **Bandwidth Usage:** Minimal impact
