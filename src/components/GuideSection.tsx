import { type GuideSection } from '../data/guide';

interface GuideSectionProps {
  section: GuideSection;
}

export default function GuideSection({ section }: GuideSectionProps) {
  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden border-2 border-amber-200">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-4xl">{section.emoji}</span>
          <h2 className="text-2xl font-bold text-amber-800">{section.title}</h2>
        </div>

        {/* Main Content */}
        <p className="text-gray-700 mb-6 leading-relaxed">{section.content}</p>

        {/* Subsections */}
        {section.subsections && (
          <div className="space-y-4">
            {section.subsections.map((subsection, index) => (
              <div
                key={index}
                className="bg-amber-50 rounded-lg p-4 border border-amber-100"
              >
                <h3 className="text-lg font-semibold text-amber-900 mb-2">
                  {subsection.title}
                </h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {subsection.content}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 