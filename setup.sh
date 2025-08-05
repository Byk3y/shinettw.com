#!/bin/bash

echo "🎵 Setting up ShineTTW Event Landing Page..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "   Visit: https://nodejs.org/"
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cp env.example .env.local
    echo "✅ .env.local created from template"
    echo "   Please edit .env.local with your Mailchimp credentials"
else
    echo "✅ .env.local already exists"
fi

echo ""

# Check for security vulnerabilities
echo "🔒 Checking for security vulnerabilities..."
npm audit

echo ""

echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your Mailchimp credentials"
echo "2. Run 'npm run dev' to start the development server"
echo "3. Visit http://localhost:3000 to see your landing page"
echo ""
echo "For deployment instructions, see DEPLOYMENT.md"
echo "" 