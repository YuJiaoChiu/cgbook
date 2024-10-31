import React from 'react';
import { Term } from '../types/term';

interface TermHeaderProps {
  term: Term;
}

export function TermHeader({ term }: TermHeaderProps) {
  return (
    <div className="flex justify-between items-start">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{term.term}</h2>
        <p className="text-2xl text-gray-700">{term.term_chinese}</p>
      </div>
      <span className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full">
        {term.category}
      </span>
    </div>
  );
}