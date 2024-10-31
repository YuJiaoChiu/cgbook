import React from 'react';
import { Book, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About 3D Terms Dictionary
        </h1>
        <p className="text-xl text-gray-600">
          Bridging language barriers in the 3D industry through comprehensive
          bilingual terminology.
        </p>
      </section>

      <section className="bg-white rounded-xl p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-4">
              We aim to provide clear, accurate, and accessible explanations of 3D
              industry terminology for professionals and learners worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Book className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Comprehensive Coverage
                  </h3>
                  <p className="text-gray-600">
                    Detailed explanations with visual examples for better
                    understanding
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Community Driven
                  </h3>
                  <p className="text-gray-600">
                    Continuously updated with input from industry professionals
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Globe className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    Global Access
                  </h3>
                  <p className="text-gray-600">
                    Bilingual support for international accessibility
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              alt="3D Design Process"
              className="rounded-lg shadow-md mb-6"
            />
            <p className="text-gray-600">
              Our dictionary serves as a bridge between different languages and
              cultures in the 3D industry, helping professionals communicate more
              effectively across borders.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}