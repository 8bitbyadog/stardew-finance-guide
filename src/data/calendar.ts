export interface DailyTask {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Farming' | 'Mining' | 'Fishing' | 'Foraging' | 'Social' | 'Other';
  timeOfDay?: 'Morning' | 'Afternoon' | 'Evening' | 'Any';
  weather?: 'Any' | 'Sunny' | 'Rainy';
  location?: string;
  estimatedProfit?: number;
  requiredTools?: string[];
  requiredEnergy?: number;
}

export interface CalendarDay {
  day: number;
  tasks: DailyTask[];
  specialEvents?: {
    title: string;
    description: string;
  }[];
}

export interface SeasonCalendar {
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter';
  days: CalendarDay[];
}

// Example data for Spring
export const springCalendar: SeasonCalendar = {
  season: 'Spring',
  days: [
    {
      day: 1,
      tasks: [
        {
          id: 'spring-1-1',
          title: 'Clear Farm Land',
          description: 'Clear debris and till soil for parsnips from starter seeds',
          priority: 'High',
          category: 'Farming',
          timeOfDay: 'Morning',
          weather: 'Any',
          location: 'Farm',
          estimatedProfit: 220,
          requiredTools: ['Hoe', 'Axe'],
          requiredEnergy: 50
        },
        {
          id: 'spring-1-2',
          title: 'Forage Spring Onions',
          description: 'Collect spring onions in Cindersap Forest',
          priority: 'Medium',
          category: 'Foraging',
          timeOfDay: 'Any',
          weather: 'Any',
          location: 'Cindersap Forest',
          estimatedProfit: 100,
          requiredEnergy: 20
        }
      ],
      specialEvents: [
        {
          title: 'New Year Festival',
          description: 'Visit town square to meet villagers and get to know the community'
        }
      ]
    },
    {
      day: 2,
      tasks: [
        {
          id: 'spring-2-1',
          title: 'Fish for Spring Fish',
          description: 'Focus on catching spring-specific fish',
          priority: 'Medium',
          category: 'Fishing',
          timeOfDay: 'Any',
          weather: 'Any',
          location: 'Mountain Lake',
          estimatedProfit: 500,
          requiredTools: ['Bamboo Pole'],
          requiredEnergy: 40
        }
      ]
    }
    // Add more days as needed
  ]
};

// Helper function to get tasks for a specific day
export function getDayTasks(season: string, day: number): CalendarDay | undefined {
  const calendar = {
    Spring: springCalendar,
    // Add other seasons here
  }[season];

  return calendar?.days.find(d => d.day === day);
}

// Helper function to get all tasks for a season
export function getSeasonTasks(season: string): SeasonCalendar | undefined {
  return {
    Spring: springCalendar,
    // Add other seasons here
  }[season];
} 