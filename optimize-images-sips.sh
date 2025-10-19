#!/bin/bash
# Image Optimization Script using macOS sips
# This script optimizes images using built-in macOS tools

echo "🖼️  Starting image optimization with macOS sips..."

# Create optimized directories
mkdir -p "/Users/francischukwuma/shinettw website/public/music/optimized"
mkdir -p "/Users/francischukwuma/shinettw website/public/images/blog/optimized"
mkdir -p "/Users/francischukwuma/shinettw website/public/images/events/optimized"

echo "📁 Created optimization directories"

# Function to get file size in human readable format
get_file_size() {
    ls -lh "$1" | awk '{print $5}'
}

# Function to optimize image with sips
optimize_image() {
    local input="$1"
    local output="$2"
    local width="$3"
    local height="$4"
    local quality="$5"
    
    echo "🔄 Optimizing: $(basename "$input")"
    echo "   Input size: $(get_file_size "$input")"
    
    # Use sips to resize and optimize
    sips -s format jpeg -s formatOptions "$quality" -Z "$width" "$input" --out "$output"
    
    echo "   Output size: $(get_file_size "$output")"
    echo ""
}

# Convert AVIF to JPG (this might not work with sips, but let's try)
echo "🔄 Converting AVIF to JPG..."
if sips -s format jpeg "/Users/francischukwuma/shinettw website/public/images/events/event-lagos-encore-photo.jpg" --out "/Users/francischukwuma/shinettw website/public/images/events/event-lagos-encore-photo-converted.jpg" 2>/dev/null; then
    echo "✅ AVIF conversion successful"
else
    echo "⚠️  AVIF conversion failed - file might already be JPG or need manual conversion"
fi

# Compress large music files (45MB and 13MB files)
echo "🗜️  Compressing large music files..."
optimize_image "/Users/francischukwuma/shinettw website/public/music/ep-the-chosen-one-original.jpg" "/Users/francischukwuma/shinettw website/public/music/optimized/ep-the-chosen-one-original.jpg" 1000 85
optimize_image "/Users/francischukwuma/shinettw website/public/music/single-time.jpg" "/Users/francischukwuma/shinettw website/public/music/optimized/single-time.jpg" 1000 85

# Compress large blog images (13MB files)
echo "🗜️  Compressing large blog images..."
optimize_image "/Users/francischukwuma/shinettw website/public/images/blog/encore-performance.jpg" "/Users/francischukwuma/shinettw website/public/images/blog/optimized/encore-performance.jpg" 1200 85
optimize_image "/Users/francischukwuma/shinettw website/public/images/blog/audience-energy.jpg" "/Users/francischukwuma/shinettw website/public/images/blog/optimized/audience-energy.jpg" 1200 85

# Optimize medium music files
echo "⚡ Optimizing medium music files..."
optimize_image "/Users/francischukwuma/shinettw website/public/music/collab-bob-sinclar-i-go.jpg" "/Users/francischukwuma/shinettw website/public/music/optimized/collab-bob-sinclar-i-go.jpg" 1000 90
optimize_image "/Users/francischukwuma/shinettw website/public/music/loco-cover.jpg" "/Users/francischukwuma/shinettw website/public/music/optimized/loco-cover.jpg" 1000 90

# Optimize event images
echo "📸 Optimizing event images..."
optimize_image "/Users/francischukwuma/shinettw website/public/images/events/event-lagos-encore-poster.jpg" "/Users/francischukwuma/shinettw website/public/images/events/optimized/event-lagos-encore-poster.jpg" 800 85

echo "✅ Optimization complete!"
echo ""
echo "📊 Summary of optimized files:"
echo "=============================="
echo "Music files:"
ls -lh "/Users/francischukwuma/shinettw website/public/music/optimized/" 2>/dev/null || echo "No music files optimized"
echo ""
echo "Blog images:"
ls -lh "/Users/francischukwuma/shinettw website/public/images/blog/optimized/" 2>/dev/null || echo "No blog images optimized"
echo ""
echo "Event images:"
ls -lh "/Users/francischukwuma/shinettw website/public/images/events/optimized/" 2>/dev/null || echo "No event images optimized"
echo ""
echo "🎯 Next steps:"
echo "1. Review the optimized files"
echo "2. Replace original files with optimized versions"
echo "3. Test the website to ensure images load correctly"
