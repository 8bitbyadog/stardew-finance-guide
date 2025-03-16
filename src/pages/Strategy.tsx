import { useState } from 'react';
import { strategies, type Strategy } from '../data/strategies';
import StrategyCard from '../components/StrategyCard';
import { FunnelIcon } from '@heroicons/react/24/outline';

type Category = Strategy['category'];
type RiskLevel = Strategy['riskLevel'];
type Season = Strategy['season'];

export default function Strategy() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [selectedRisk, setSelectedRisk] = useState<RiskLevel | 'All'>('All');
  const [selectedSeason, setSelectedSeason] = useState<Season | 'All'>('All');

  const categories: Category[] = ['Farming', 'Mining', 'Foraging', 'Fishing', 'Animal Husbandry'];
  const riskLevels: RiskLevel[] = ['Low', 'Medium', 'High'];
  const seasons: Season[] = ['Any', 'Spring', 'Summer', 'Fall', 'Winter'];

  const filteredStrategies = strategies.filter(strategy => {
    if (selectedCategory !== 'All' && strategy.category !== selectedCategory) return false;
    if (selectedRisk !== 'All' && strategy.riskLevel !== selectedRisk) return false;
    if (selectedSeason !== 'All' && strategy.season !== selectedSeason && strategy.season !== 'Any') return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Investment Strategies</h1>
        <div className="flex items-center space-x-2 text-gray-500">
          <FunnelIcon className="h-5 w-5" />
          <span>Filter by:</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value as Category | 'All')}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>

        <select
          value={selectedRisk}
          onChange={(e) => setSelectedRisk(e.target.value as RiskLevel | 'All')}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="All">All Risk Levels</option>
          {riskLevels.map(risk => (
            <option key={risk} value={risk}>{risk} Risk</option>
          ))}
        </select>

        <select
          value={selectedSeason}
          onChange={(e) => setSelectedSeason(e.target.value as Season | 'All')}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="All">All Seasons</option>
          {seasons.map(season => (
            <option key={season} value={season}>{season}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredStrategies.map(strategy => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>

      {filteredStrategies.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No strategies match your filters.</p>
        </div>
      )}
    </div>
  );
} 