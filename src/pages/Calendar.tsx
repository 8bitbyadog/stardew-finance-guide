import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import { getSeasonTasks } from '../data/calendar';
import type { DailyTask } from '../data/calendar';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
const daysInSeason = 28;

export default function Calendar() {
  const [selectedSeason, setSelectedSeason] = useState('Spring');
  const [selectedDay, setSelectedDay] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const seasonData = getSeasonTasks(selectedSeason);
  const dayData = seasonData?.days.find(d => d.day === selectedDay);

  const filteredTasks = dayData?.tasks.filter(task => {
    const matchesCategory = !selectedCategory || task.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.location?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }) ?? [];

  const categories = Array.from(
    new Set(dayData?.tasks.map(task => task.category) ?? [])
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Stardew Valley Calendar</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Season Selection */}
      <div className="flex space-x-4 mb-6">
        {seasons.map(season => (
          <button
            key={season}
            onClick={() => setSelectedSeason(season)}
            className={`px-4 py-2 rounded-lg ${
              selectedSeason === season
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {season}
          </button>
        ))}
      </div>

      {/* Day Selection */}
      <div className="grid grid-cols-7 gap-2 mb-6">
        {Array.from({ length: daysInSeason }, (_, i) => i + 1).map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`p-2 rounded-lg text-center ${
              selectedDay === day
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg ${
            !selectedCategory
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Tasks Display */}
      <div className="space-y-4">
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task: DailyTask) => (
            <TaskCard key={task.id} task={task} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-8">
            No tasks found for the current filters.
          </p>
        )}
      </div>

      {/* Special Events */}
      {dayData?.specialEvents && dayData.specialEvents.length > 0 && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Special Events</h2>
          <div className="space-y-4">
            {dayData.specialEvents.map((event, index) => (
              <div
                key={index}
                className="bg-purple-100 rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold text-purple-800">
                  {event.title}
                </h3>
                <p className="text-purple-600 mt-1">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 