import { useState } from 'react';
import { villagers } from '../data/villagers';
import VillagerCard from '../components/VillagerCard';
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';

export default function Villagers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<'All' | 'Spring' | 'Summer' | 'Fall' | 'Winter'>('All');
  const [showMarriageableOnly, setShowMarriageableOnly] = useState(false);

  const filteredVillagers = villagers.filter(villager => {
    const matchesSearch = villager.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      villager.personality.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSeason = selectedSeason === 'All' || villager.birthday.season === selectedSeason;
    
    const matchesMarriageable = !showMarriageableOnly || villager.marriageable;

    return matchesSearch && matchesSeason && matchesMarriageable;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Villager Directory</h1>
        <div className="flex items-center space-x-2 text-gray-500">
          <FunnelIcon className="h-5 w-5" />
          <span>Filter and Search</span>
        </div>
      </div>

      <div className="mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search villagers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:w-48">
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value as typeof selectedSeason)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="All">All Seasons</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
          </div>

          <div className="sm:w-auto flex items-center">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showMarriageableOnly}
                onChange={(e) => setShowMarriageableOnly(e.target.checked)}
                className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
              <span className="ml-2 text-sm text-gray-600">Marriageable Only</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredVillagers.map(villager => (
          <VillagerCard key={villager.id} villager={villager} />
        ))}
      </div>

      {filteredVillagers.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No villagers match your search criteria.</p>
        </div>
      )}
    </div>
  );
} 