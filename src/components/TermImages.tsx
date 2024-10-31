import React from 'react';

interface TermImagesProps {
  images: string[];
  alt: string;
}

export function TermImages({ images, alt }: TermImagesProps) {
  if (!images?.length) return null;

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Reference Images</h3>
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${alt} example ${index + 1}`}
            className="rounded-lg w-full h-48 object-cover"
          />
        ))}
      </div>
    </div>
  );
}