import { createClient } from '@supabase/supabase-js';
import { Term } from '../types/term';

if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export async function searchTerms(query: string): Promise<Term[]> {
  try {
    const { data, error } = await supabase
      .from('terms')
      .select(`
        id,
        term,
        term_chinese,
        definition,
        definition_chinese,
        simplified_explanation,
        simplified_explanation_chinese,
        category,
        thumbnail,
        images
      `)
      .or(`term.ilike.%${query}%,term_chinese.ilike.%${query}%,definition.ilike.%${query}%`)
      .limit(10);

    if (error) {
      console.error('Database error:', error);
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error searching terms:', error);
    throw error;
  }
}