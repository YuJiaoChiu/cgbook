import { useState, useEffect } from 'react';
import { Term, SearchResult } from '../types/term';
import { searchTerms } from '../lib/api';

export function useTermSearch(query: string): SearchResult {
  const [result, setResult] = useState<SearchResult>({
    data: null,
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    if (!query.trim()) {
      setResult({ data: [], error: null, isLoading: false });
      return;
    }

    const fetchData = async () => {
      setResult(prev => ({ ...prev, isLoading: true }));
      try {
        const data = await searchTerms(query);
        setResult({ data, error: null, isLoading: false });
      } catch (error) {
        setResult({ 
          data: null, 
          error: error instanceof Error ? error : new Error('An unknown error occurred'), 
          isLoading: false 
        });
      }
    };

    const debounceTimeout = setTimeout(fetchData, 300);
    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return result;
}