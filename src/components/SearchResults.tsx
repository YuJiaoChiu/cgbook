import React from 'react';
import { Term } from '../types/term';
import TermCard from './TermCard';

interface SearchResultsProps {
  results: Term[];
  isLoading: boolean;
  error: Error | null;
}

export default function SearchResults({ results, isLoading, error }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-pulse text-gray-600">Searching...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 py-8">
        An error occurred while searching. Please try again.
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((term) => (
        <TermCard key={term.id} term={term} />
      ))}
    </div>
  );
}