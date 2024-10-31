import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

interface TermThumbnailProps {
  thumbnail: string;
  term: string;
  category: string;
}

export function TermThumbnail({ thumbnail, term, category }: TermThumbnailProps) {
  return (
    <div className="relative">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={term}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
          <ImageIcon className="h-12 w-12 text-gray-400" />
        </div>
      )}
      <div className="absolute top-2 right-2 bg-white/90 px-3 py-1 rounded-full text-sm">
        {category}
      </div>
    </div>
  );
}