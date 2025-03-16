import { useState } from 'react';
import { seasons } from '../data/seasons';
import CropCard from '../components/CropCard';
import FishCard from '../components/FishCard';
import ActivityCard from '../components/ActivityCard';

export default function Seasons() {
  const [selectedSeason, setSelectedSeason] = useState('Spring');
  const [selectedTab, setSelectedTab] = useState<'crops' | 'fish' | 'activities'>('crops');

  const currentSeason = seasons.find(season => season.name === selectedSeason);

  if (!currentSeason) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        {/* Season Selection */}
        <div className="flex space-x-4">
          {seasons.map(season => (
            <button
              key={season.name}
              onClick={() => setSelectedSeason(season.name)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors
                ${selectedSeason === season.name
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {season.name}
            </button>
          ))}
        </div>

        {/* Tab Selection */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {(['crops', 'fish', 'activities'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`py-4 px-1 border-b-2 font-medium text-sm
                  ${selectedTab === tab
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedTab === 'crops' && currentSeason.crops.map(crop => (
            <CropCard key={crop.name} crop={crop} />
          ))}

          {selectedTab === 'fish' && currentSeason.fish.map(fish => (
            <FishCard key={fish.name} fish={fish} />
          ))}

          {selectedTab === 'activities' && currentSeason.activities.map(activity => (
            <ActivityCard key={activity.name} activity={activity} />
          ))}
        </div>

        {/* Birthdays Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Birthdays This Season</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {currentSeason.birthdays.map(birthday => (
                <div key={birthday.villager} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-900 font-medium">{birthday.villager}</span>
                  <span className="text-gray-500">Day {birthday.day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 