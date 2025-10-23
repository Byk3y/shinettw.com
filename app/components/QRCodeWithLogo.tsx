'use client';

import React, { useRef, useEffect, useState } from 'react';
import QRCode from 'qrcode';

interface QRCodeWithLogoProps {
  url?: string;
  size?: number;
  logoPath?: string;
  logoSize?: number; // percentage of QR code size (10-30)
  errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
  className?: string;
  showLogo?: boolean;
}

export default function QRCodeWithLogo({
  url = 'https://shinettw.com/links',
  size = 300,
  logoPath = '/icons/brand-shine-website.png',
  logoSize = 20, // 20% of QR code size
  errorCorrectionLevel = 'H', // High error correction for logo overlay
  className = '',
  showLogo = true
}: QRCodeWithLogoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateQRCode = async () => {
      if (!canvasRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        // Set a timeout to prevent infinite loading
        const timeoutId = setTimeout(() => {
          setError('QR code generation timed out');
          setIsLoading(false);
        }, 10000); // 10 second timeout

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setError('Canvas context not available');
          setIsLoading(false);
          return;
        }

        // Set canvas size
        canvas.width = size;
        canvas.height = size;

        // Generate QR code
        const qrDataURL = await QRCode.toDataURL(url, {
          width: size,
          margin: 2,
          errorCorrectionLevel: errorCorrectionLevel,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });

        // Draw QR code
        const qrImage = new Image();
        qrImage.onload = () => {
          ctx.drawImage(qrImage, 0, 0, size, size);

          // Add logo overlay if enabled
          if (showLogo) {
            const logoImage = new Image();
            logoImage.onload = () => {
              try {
                const logoSizePixels = Math.floor((size * logoSize) / 100);
                const logoX = (size - logoSizePixels) / 2;
                const logoY = (size - logoSizePixels) / 2;

                // Draw white background circle for logo
                ctx.fillStyle = '#FFFFFF';
                ctx.beginPath();
                ctx.arc(size / 2, size / 2, logoSizePixels / 2 + 8, 0, 2 * Math.PI);
                ctx.fill();

                // Draw white border around logo
                ctx.strokeStyle = '#FFFFFF';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(size / 2, size / 2, logoSizePixels / 2 + 8, 0, 2 * Math.PI);
                ctx.stroke();

                // Draw logo
                ctx.drawImage(logoImage, logoX, logoY, logoSizePixels, logoSizePixels);
              } catch (logoError) {
                console.warn('Error drawing logo:', logoError);
              } finally {
                clearTimeout(timeoutId);
                setIsLoading(false);
              }
            };
            logoImage.onerror = (error) => {
              console.warn('Logo could not be loaded, showing QR code without logo:', error);
              clearTimeout(timeoutId);
              setIsLoading(false);
            };
            logoImage.src = logoPath;
          } else {
            clearTimeout(timeoutId);
            setIsLoading(false);
          }
        };
        qrImage.src = qrDataURL;
      } catch (err) {
        clearTimeout(timeoutId);
        setError('Failed to generate QR code');
        setIsLoading(false);
        console.error('QR Code generation error:', err);
      }
    };

    generateQRCode();
  }, [url, size, logoPath, logoSize, errorCorrectionLevel, showLogo]);

  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const link = document.createElement('a');
    link.download = `shinettw-qr-code-${size}x${size}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 border border-gray-300 rounded ${className}`} style={{ width: size, height: size }}>
        <p className="text-red-600 text-sm text-center p-4">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className={`border border-gray-200 rounded-lg ${isLoading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`}
        style={{ width: size, height: size }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-75 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}
      <button
        onClick={downloadQRCode}
        disabled={isLoading}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {isLoading ? 'Generating...' : 'Download QR Code'}
      </button>
    </div>
  );
}
