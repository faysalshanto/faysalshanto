'use client';

import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}: LightboxProps) {
  const currentImage = images[currentIndex];

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (images.length <= 1) return;
      const nextIndex = (currentIndex - 1 + images.length) % images.length;
      onNavigate(nextIndex);
    },
    [currentIndex, images.length, onNavigate]
  );

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation();
      if (images.length <= 1) return;
      const nextIndex = (currentIndex + 1) % images.length;
      onNavigate(nextIndex);
    },
    [currentIndex, images.length, onNavigate]
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Top Bar with Counter and Close Button */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <div className="text-xs font-mono text-gray-300 bg-gray-900/80 border border-gray-800 px-3 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          onClick={onClose}
          className="p-2.5 bg-gray-900/80 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white rounded-full transition cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.src}
          alt={currentImage.alt || 'Lightbox Image'}
          className="max-h-[75vh] w-auto object-contain rounded-2xl border border-gray-800 shadow-2xl"
        />

        {/* Caption/Title */}
        {(currentImage.title || currentImage.caption || currentImage.alt) && (
          <div className="mt-4 text-center space-y-1 max-w-xl">
            {currentImage.title && (
              <h4 className="text-sm font-bold text-white">{currentImage.title}</h4>
            )}
            <p className="text-xs text-gray-400">
              {currentImage.caption || currentImage.alt}
            </p>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white rounded-full transition cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-900/80 border border-gray-800 hover:border-gray-600 text-gray-300 hover:text-white rounded-full transition cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}
