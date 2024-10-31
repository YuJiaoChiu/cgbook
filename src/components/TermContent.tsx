import React from 'react';
import { Term } from '../types/term';
import { TermHeader } from './TermHeader';
import { TermDefinition } from './TermDefinition';
import { TermDetails } from './TermDetails';
import { TermGallery } from './TermGallery';

interface TermContentProps {
  term: Term;
}

export function TermContent({ term }: TermContentProps) {
  return (
    <div className="space-y-8 p-6">
      <section className="space-y-6">
        <TermHeader
          term={term.term}
          termChinese={term.term_chinese}
          simplifiedExplanation={term.simplified_explanation}
          isExpanded={true}
        />

        {term.images?.main && (
          <div className="aspect-video rounded-lg overflow-hidden max-w-3xl mx-auto">
            <img
              src={term.images.main}
              alt={term.term}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </section>

      <section className="border-t pt-8">
        <TermDefinition
          englishDefinition={term.definition}
          chineseDefinition={term.definition_chinese}
        />
      </section>

      {term.etymology && (
        <section className="border-t pt-8 animate-slideIn">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Etymology</h4>
          <div className="bg-gray-50 rounded-lg p-6 max-w-3xl">
            <p className="text-gray-600 mb-4">{term.etymology.english}</p>
            <p className="text-gray-600">{term.etymology.chinese}</p>
          </div>
        </section>
      )}

      <section className="border-t pt-8">
        <TermDetails
          usageRecommendations={term.usage_recommendations}
          softwareExamples={term.software_examples}
          exampleSentences={term.example_sentences}
          relatedTerms={term.related_terms}
        />
      </section>

      {term.images?.examples && term.images.examples.length > 0 && (
        <section className="border-t pt-8">
          <TermGallery images={term.images.examples} term={term.term} />
        </section>
      )}
    </div>
  );
}