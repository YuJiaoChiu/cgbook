import React from 'react';
import { Wand2, Shapes, MessagesSquare, Lightbulb } from 'lucide-react';

export default function LostInTranslation() {
  return (
    <div className="glass-effect rounded-2xl shadow-lg overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 p-8">
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Wand2 className="h-8 w-8 text-indigo-600" />
            <h2 className="text-3xl font-bold gradient-text">Lost in Translation?</h2>
          </div>

          <div className="relative">
            {/* Comic Scene */}
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-white rounded-lg p-4 shadow-md transform -rotate-2">
                  <MessagesSquare className="h-6 w-6 text-indigo-600 mb-2" />
                  <p className="text-sm">
                    "Please fix the <span className="font-bold text-indigo-600">face</span> normals"
                  </p>
                </div>
                <div className="mt-8 bg-white rounded-lg p-4 shadow-md transform rotate-2">
                  <Shapes className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm">
                    "脸部法线？人脸？表面？"
                    <br />
                    <span className="text-gray-500">(Face normals? Human face? Surface?)</span>
                  </p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-white rounded-lg p-4 shadow-md transform rotate-1 max-w-xs">
                  <Lightbulb className="h-6 w-6 text-yellow-500 mb-2" />
                  <p className="text-sm text-gray-600">
                    In 3D modeling, "face" means a polygon surface, not a human face! 
                    <br />
                    <span className="text-gray-500">
                      在3D建模中，"face"指的是多边形表面，而不是人脸！
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-indigo-900">
                Breaking Language Barriers
                <br />
                <span className="text-lg">打破语言障碍</span>
              </h3>
              <p className="text-gray-600">
                We bridge the gap between English and Chinese 3D terminology
                <br />
                <span className="text-gray-500">
                  我们架起中英文3D术语之间的桥梁
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <img
            src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80"
            alt="3D Design Process"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
          <div className="gradient-border p-6">
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">
              Clear Communication
              <br />
              <span className="text-lg">清晰沟通</span>
            </h3>
            <p className="text-gray-600">
              Precise explanations in both languages
              <br />
              <span className="text-gray-500">
                双语精确解释
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}