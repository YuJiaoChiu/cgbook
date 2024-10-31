import React from 'react';
import { Lightbulb } from 'lucide-react';

const examples = [
  {
    term: "Topology",
    context: "Clean topology is crucial for animation",
    explanation: "Not about maps - it's about the flow of your 3D model's structure!",
  },
  {
    term: "UV Mapping",
    context: "Fix the UV mapping to prevent texture stretching",
    explanation: "Nothing to do with ultraviolet - it's like gift wrapping your 3D model!",
  },
];

export default function ExampleUseCases() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {examples.map((example, index) => (
        <div
          key={index}
          className="glass-effect rounded-lg shadow-md p-6 gradient-border"
        >
          <div className="flex items-start space-x-3">
            <Lightbulb className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold gradient-text">{example.term}</h3>
              <p className="text-sm text-gray-600 italic mt-1">"{example.context}"</p>
              <p className="text-sm text-gray-500 mt-2">{example.explanation}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}