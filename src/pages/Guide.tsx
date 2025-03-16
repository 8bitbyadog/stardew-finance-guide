import { useState } from 'react';
import { guideData } from '../data/guide';
import GuideSection from '../components/GuideSection';

export default function Guide() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Table of Contents - Sticky Sidebar */}
        <div className="md:w-64 flex-shrink-0">
          <div className="sticky top-4">
            <div className="bg-white rounded-lg shadow-md p-4 border-2 border-amber-200">
              <h2 className="text-xl font-bold text-amber-800 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                {guideData.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors
                      ${activeSection === index
                        ? 'bg-amber-100 text-amber-900'
                        : 'text-gray-600 hover:bg-amber-50'
                      }`}
                  >
                    <span className="mr-2">{section.emoji}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="prose max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-amber-900 mb-2">Beginner's Guide to Stardew Valley</h1>
              <p className="text-gray-600">
                Welcome to your new life in Stardew Valley! This guide will help you get started and make the most of your farming adventure. Remember, there's no wrong way to play - take your time and enjoy the journey! 🌱
              </p>
            </div>

            {guideData.map((section, index) => (
              <div
                key={index}
                id={`section-${index}`}
                className={`scroll-mt-4 transition-opacity duration-300
                  ${activeSection === null || activeSection === index ? 'opacity-100' : 'opacity-50'}`}
              >
                <GuideSection section={section} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 