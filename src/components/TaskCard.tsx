import React from 'react';
import type { DailyTask } from '../data/calendar';
import { 
  CalendarIcon, 
  MapPinIcon, 
  SunIcon, 
  BoltIcon, 
  WrenchScrewdriverIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

interface TaskCardProps {
  task: DailyTask;
}

const priorityColors = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Low: 'bg-green-100 text-green-800',
};

const categoryIcons = {
  Farming: '🌾',
  Mining: '⛏️',
  Fishing: '🎣',
  Foraging: '🍄',
  Social: '👥',
  Other: '📝',
};

export default function TaskCard({ task }: TaskCardProps) {
  const hasTools = task.requiredTools && task.requiredTools.length > 0;
  const toolsList = task.requiredTools?.join(', ') ?? '';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xl">{categoryIcons[task.category]}</span>
            <h3 className="text-lg font-semibold">{task.title}</h3>
          </div>
          <p className="text-gray-600 mt-1">{task.description}</p>
        </div>
        <span className={`px-2 py-1 rounded-full text-sm font-medium ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-gray-600">
        {task.timeOfDay && (
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{task.timeOfDay}</span>
          </div>
        )}
        {task.weather && (
          <div className="flex items-center gap-1">
            <SunIcon className="w-4 h-4" />
            <span>{task.weather}</span>
          </div>
        )}
        {task.location && (
          <div className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            <span>{task.location}</span>
          </div>
        )}
        {task.requiredEnergy && (
          <div className="flex items-center gap-1">
            <BoltIcon className="w-4 h-4" />
            <span>{task.requiredEnergy} Energy</span>
          </div>
        )}
      </div>

      {(hasTools || task.estimatedProfit) && (
        <div className="mt-3 flex items-center justify-between text-sm border-t pt-3">
          {hasTools && (
            <div className="flex items-center gap-1">
              <WrenchScrewdriverIcon className="w-4 h-4 text-gray-600" />
              <span className="text-gray-600">{toolsList}</span>
            </div>
          )}
          {task.estimatedProfit && (
            <div className="flex items-center gap-1 text-emerald-600">
              <BanknotesIcon className="w-4 h-4" />
              <span>{task.estimatedProfit}g</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
} 