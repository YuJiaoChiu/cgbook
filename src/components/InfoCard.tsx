import React from 'react';

interface InfoCardProps {
  title: string;
  titleChinese: string;
  description: string;
  descriptionChinese: string;
  icon: React.ReactNode;
}

export default function InfoCard({ title, titleChinese, description, descriptionChinese, icon }: InfoCardProps) {
  return (
    <div className="glass-effect rounded-xl shadow-lg overflow-hidden p-6 transform transition-all hover:scale-105 duration-300">
      <div className="flex items-center justify-center mb-4">
        <div className="p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold gradient-text mb-1">{title}</h3>
      <h4 className="text-lg font-medium text-gray-700 mb-2">{titleChinese}</h4>
      <p className="text-gray-600 mb-1">{description}</p>
      <p className="text-gray-500">{descriptionChinese}</p>
    </div>
  );
}