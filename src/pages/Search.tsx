import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchTerms } from '../lib/supabase';
import { Term } from '../types/term';
import SearchResults from '../components/SearchResults';
import SearchBar from '../components/SearchBar';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<Term[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function performSearch() {
      if (!query) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const searchResults = await searchTerms(query);
        setResults(searchResults);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'));
      } finally {
        setIsLoading(false);
      }
    }

    performSearch();
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="mb-12">
        <SearchBar initialQuery={query} />
      </div>
      <div className="mt-8">
        <SearchResults
          results={results}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
}