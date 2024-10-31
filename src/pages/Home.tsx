import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, Globe, Languages } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import InfoCard from '../components/InfoCard';
import ExampleUseCases from '../components/ExampleUseCases';
import LostInTranslation from '../components/LostInTranslation';

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className="space-y-12 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold gradient-text">
            3D Industry Terminology
          </h1>
          <h2 className="text-4xl font-bold text-gray-700">
            3D行业术语词典
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your comprehensive bilingual guide to understanding 3D industry terms
            <br />
            <span className="text-gray-500">
              您的3D行业双语术语指南
            </span>
          </p>
        </div>

        <div className="glass-effect rounded-2xl p-8 shadow-lg">
          <SearchBar onSearch={handleSearch} />
          <ExampleUseCases />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <InfoCard
          icon={<Book className="h-8 w-8 text-indigo-600" />}
          title="Comprehensive Dictionary"
          titleChinese="全面的词典"
          description="Access detailed explanations and visual examples"
          descriptionChinese="获取详细解释和视觉示例"
        />
        <InfoCard
          icon={<Languages className="h-8 w-8 text-indigo-600" />}
          title="Bilingual Support"
          titleChinese="双语支持"
          description="All terms available in English and Chinese"
          descriptionChinese="所有术语均提供中英文解释"
        />
        <InfoCard
          icon={<Globe className="h-8 w-8 text-indigo-600" />}
          title="Industry Standard"
          titleChinese="行业标准"
          description="Stay up-to-date with professional terminology"
          descriptionChinese="及时了解专业术语"
        />
      </section>

      <LostInTranslation />
    </div>
  );
}