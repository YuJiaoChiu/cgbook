import React, { useState, useEffect, useRef } from 'react';
import { Term } from '../types/term';
import { X } from 'lucide-react';
import { TermHeader } from './TermHeader';
import { TermDefinition } from './TermDefinition';
import { TermImages } from './TermImages';

interface TermCardProps {
  term: Term;
}

export default function TermCard({ term }: TermCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded && cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  return (
    <>
      <div 
        className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${
          !isExpanded ? 'hover:shadow-lg cursor-pointer transform hover:-translate-y-1' : 'hidden'
        }`}
        onClick={() => setIsExpanded(true)}
      >
        <div className="relative h-48">
          {term.thumbnail && (
            <img
              src={term.thumbnail}
              alt={term.term}
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute top-2 right-2">
            <span className="px-3 py-1 bg-white/90 rounded-full text-sm text-gray-700">
              {term.category}
            </span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{term.term}</h3>
            <p className="text-lg text-gray-700">{term.term_chinese}</p>
          </div>
          
          <p className="text-sm text-gray-600 mb-2">{term.simplified_explanation}</p>
          {term.software_use && (
            <p className="text-sm text-gray-500 mt-2">
              <span className="font-medium">Software: </span>
              {term.software_use}
            </p>
          )}
        </div>
      </div>

      {isExpanded && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40 animate-fadeIn" />
          <div
            ref={cardRef}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-2xl z-50 animate-scaleIn"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-gray-100 transition-colors"
            >
              <X className="h-6 w-6 text-gray-600" />
            </button>

            <div className="p-8 space-y-8">
              <TermHeader term={term} />
              
              {term.thumbnail && (
                <img
                  src={term.thumbnail}
                  alt={term.term}
                  className="w-full h-64 object-cover rounded-lg"
                />
              )}

              <TermDefinition term={term} />

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Simplified Explanation</h3>
                <p className="text-gray-600">{term.simplified_explanation}</p>
                
                {term.software_use && (
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Software Usage</h3>
                    <p className="text-gray-600">{term.software_use}</p>
                  </div>
                )}
              </div>

              {term.images && term.images.length > 0 && (
                <TermImages images={term.images} alt={term.term} />
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}