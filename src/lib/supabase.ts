import { createClient } from '@supabase/supabase-js';
import { Term } from '../types/term';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function searchTerms(query: string): Promise<Term[]> {
  const { data, error } = await supabase
    .from('terms')
    .select(`
      id,
      term,
      term_chinese,
      definition,
      definition_chinese,
      simplified_explanation,
      software_use,
      category,
      thumbnail,
      images
    `)
    .or(`term.ilike.%${query}%,term_chinese.ilike.%${query}%`)
    .limit(10);

  if (error) {
    console.error('Error searching terms:', error);
    throw error;
  }

  return data || [];
}