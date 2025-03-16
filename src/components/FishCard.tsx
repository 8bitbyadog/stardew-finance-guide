import { type Fish } from '../data/seasons';
import { CurrencyDollarIcon, MapPinIcon, ClockIcon, CloudIcon, StarIcon } from '@heroicons/react/24/outline';

interface FishCardProps {
  fish: Fish;
}

export default function FishCard({ fish }: FishCardProps) {
  const getDifficultyStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon
        key={i}
        className={`h-4 w-4 ${i < fish.difficulty ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{fish.name}</h3>
        
        <p className="mt-2 text-gray-600">{fish.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <MapPinIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Location</div>
              <div className="font-medium">{fish.location}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Time</div>
              <div className="font-medium">{fish.time}</div>
            </div>
          </div>

          {fish.weather && (
            <div className="flex items-center space-x-2">
              <CloudIcon className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Weather</div>
                <div className="font-medium">{fish.weather}</div>
              </div>
            </div>
          )}

          <div className="flex items-center space-x-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Base Price</div>
              <div className="font-medium">{fish.basePrice}g</div>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 bg-blue-50 rounded-md">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-blue-800">Difficulty</h4>
            <div className="flex space-x-1">
              {getDifficultyStars()}
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="font-medium text-gray-900">Fishing Tips</h4>
          <ul className="mt-2 space-y-2">
            {fish.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                <span className="ml-2 text-sm text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 