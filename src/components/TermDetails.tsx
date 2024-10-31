import React from 'react';
import { Code2, BookOpen, Link } from 'lucide-react';

interface TermDetailsProps {
  usageRecommendations?: string[];
  softwareExamples?: string[];
  exampleSentences?: {
    english: string;
    chinese: string;
  }[];
  relatedTerms?: string[];
}

export function TermDetails({
  usageRecommendations,
  softwareExamples,
  exampleSentences,
  relatedTerms,
}: TermDetailsProps) {
  return (
    <div className="space-y-8 max-w-3xl">
      {usageRecommendations && (
        <div className="animate-slideIn">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Code2 className="h-5 w-5" />
            Usage Recommendations
          </h4>
          <ul className="list-disc list-inside space-y-3 text-gray-600">
            {usageRecommendations.map((rec, index) => (
              <li key={index} className="leading-relaxed">{rec}</li>
            ))}
          </ul>
        </div>
      )}

      {softwareExamples && (
        <div className="animate-slideIn">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">Software Examples</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softwareExamples.map((software, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-gray-600">
                {software}
              </div>
            ))}
          </div>
        </div>
      )}

      {exampleSentences && (
        <div className="animate-slideIn">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Example Usage
          </h4>
          <div className="space-y-4">
            {exampleSentences.map((sentence, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-3 leading-relaxed">{sentence.english}</p>
                <p className="text-gray-600 leading-relaxed">{sentence.chinese}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {relatedTerms && (
        <div className="animate-slideIn">
          <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <Link className="h-5 w-5" />
            Related Terms
          </h4>
          <div className="flex flex-wrap gap-3">
            {relatedTerms.map((term, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full"
              >
                {term}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}