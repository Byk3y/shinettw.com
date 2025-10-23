'use client';

import React, { useState } from 'react';
import QRCodeWithLogo from '../components/QRCodeWithLogo';

export default function QRDownloadPage() {
  const [url, setUrl] = useState('https://shinettw.com/links');
  const [size, setSize] = useState(500);
  const [logoSize, setLogoSize] = useState(20);
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<'L' | 'M' | 'Q' | 'H'>('H');
  const [showLogo, setShowLogo] = useState(true);

  const sizeOptions = [
    { value: 300, label: '300x300 (Small)' },
    { value: 500, label: '500x500 (Medium)' },
    { value: 800, label: '800x800 (Large)' },
    { value: 1000, label: '1000x1000 (Extra Large)' },
    { value: 1200, label: '1200x1200 (Print Quality)' }
  ];

  const errorCorrectionOptions = [
    { value: 'L', label: 'Low (L) - ~7% recovery' },
    { value: 'M', label: 'Medium (M) - ~15% recovery' },
    { value: 'Q', label: 'Quartile (Q) - ~25% recovery' },
    { value: 'H', label: 'High (H) - ~30% recovery' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/90 to-gray-100/80" />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">QR Code Generator</h1>
          <p className="text-gray-600">Create branded QR codes for your events</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Controls */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6 space-y-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Customize Your QR Code</h2>
            
            {/* URL Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                URL to encode:
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                placeholder="https://shinettw.com/links"
              />
            </div>

            {/* Size Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                QR Code Size:
              </label>
              <select
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {sizeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Logo Toggle */}
            <div>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={showLogo}
                  onChange={(e) => setShowLogo(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Include Shine TTW logo
                </span>
              </label>
            </div>

            {/* Logo Size Slider */}
            {showLogo && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Logo Size: {logoSize}% of QR code
                </label>
                <input
                  type="range"
                  min="10"
                  max="30"
                  value={logoSize}
                  onChange={(e) => setLogoSize(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Small</span>
                  <span>Large</span>
                </div>
              </div>
            )}

            {/* Error Correction Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Error Correction Level:
              </label>
              <select
                value={errorCorrectionLevel}
                onChange={(e) => setErrorCorrectionLevel(e.target.value as 'L' | 'M' | 'Q' | 'H')}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              >
                {errorCorrectionOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Higher levels allow more data recovery if the QR code is damaged or partially covered.
              </p>
            </div>
          </div>

          {/* Preview */}
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Preview</h2>
            <div className="flex justify-center">
              <QRCodeWithLogo
                url={url}
                size={Math.min(size, 400)} // Limit preview size for better UI
                logoSize={logoSize}
                errorCorrectionLevel={errorCorrectionLevel}
                showLogo={showLogo}
                className="max-w-full"
              />
            </div>
            
            {/* Full Size Download */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-2">
                Download full size ({size}x{size}px) QR code
              </p>
              <p className="text-xs text-gray-500">
                Use the download button above the preview to save the QR code
              </p>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Tips</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Use High (H) error correction when including a logo for better scanning reliability</li>
            <li>• For print materials, use 1000x1000 or 1200x1200 size for crisp quality</li>
            <li>• Logo size of 20-25% works best for most applications</li>
            <li>• Test your QR code with different devices before printing</li>
          </ul>
        </div>

        {/* Back to Links */}
        <div className="text-center mt-8">
          <a
            href="/links"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors duration-300 font-body"
          >
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            <span>Back to Links Page</span>
          </a>
        </div>
      </div>
    </div>
  );
}
