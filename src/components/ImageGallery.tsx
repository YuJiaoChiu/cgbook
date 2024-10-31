import React from 'react';
import { Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  term: string;
  onImageClick: (imageUrl: string) => void;
}

export function ImageGallery({ images, term, onImageClick }: ImageGalleryProps) {
  return (
    <div>
      <h4 className="font-semibold text-gray-900 mb-3">Reference Images</h4>
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, index) => (
          <div key={index} className="group relative">
            <img
              src={img}
              alt={`${term} example ${index + 1}`}
              onClick={() => onImageClick(img)}
              className="rounded-lg shadow-sm cursor-zoom-in hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="h-6 w-6 text-white drop-shadow-lg" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}