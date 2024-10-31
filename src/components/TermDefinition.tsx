import React from 'react';
import { Term } from '../types/term';

interface TermDefinitionProps {
  term: Term;
}

export function TermDefinition({ term }: TermDefinitionProps) {
  return (
    <div className="grid grid-cols-2 gap-8 border-t border-b py-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Definition</h3>
        <p className="text-gray-600">{term.definition}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">定义</h3>
        <p className="text-gray-600">{term.definition_chinese}</p>
      </div>
    </div>
  );
}