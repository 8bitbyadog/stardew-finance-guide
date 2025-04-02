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
        },
        {
          id: 'spring-1-3',
          title: 'Meet the Townspeople',
          description: 'Introduce yourself to villagers in Pelican Town',
          priority: 'High',
          category: 'Social',
          timeOfDay: 'Any',
          weather: 'Any',
          location: 'Pelican Town',
          requiredEnergy: 10
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
        },
        {
          id: 'spring-2-2',
          title: 'Water Crops',
          description: 'Water your newly planted parsnips',
          priority: 'High',
          category: 'Farming',
          timeOfDay: 'Morning',
          weather: 'Sunny',
          location: 'Farm',
          requiredTools: ['Watering Can'],
          requiredEnergy: 15
        }
      ]
    },
    {
      day: 13,
      tasks: [
        {
          id: 'spring-13-1',
          title: 'Egg Festival Preparation',
          description: 'Prepare for tomorrow\'s Egg Festival',
          priority: 'Medium',
          category: 'Other',
          timeOfDay: 'Any',
          weather: 'Any',
          location: 'Pelican Town',
          requiredEnergy: 10
        }
      ],
      specialEvents: [
        {
          title: 'Egg Festival Eve',
          description: 'Get ready for tomorrow\'s egg hunt!'
        }
      ]
    },
    {
      day: 14,
      tasks: [
        {
          id: 'spring-14-1',
          title: 'Attend Egg Festival',
          description: 'Participate in the egg hunt and shop at festival stands',
          priority: 'High',
          category: 'Social',
          timeOfDay: 'Morning',
          weather: 'Any',
          location: 'Town Square',
          requiredEnergy: 20
        }
      ],
      specialEvents: [
        {
          title: 'Egg Festival',
          description: 'Annual spring celebration featuring an egg hunt competition'
        }
      ]
    },
    {
      day: 24,
      tasks: [
        {
          id: 'spring-24-1',
          title: 'Flower Dance Preparation',
          description: 'Get ready for tomorrow\'s Flower Dance',
          priority: 'Medium',
          category: 'Social',
          timeOfDay: 'Any',
          weather: 'Any',
          location: 'Farm',
          requiredEnergy: 10
        }
      ]
    },
    {
      day: 25,
      tasks: [
        {
          id: 'spring-24-1',
          title: 'Attend Flower Dance',
          description: 'Join the spring dance festival and try to find a dance partner',
          priority: 'High',
          category: 'Social',
          timeOfDay: 'Morning',
          weather: 'Any',
          location: 'Cindersap Forest',
          requiredEnergy: 20
        }
      ],
      specialEvents: [
        {
          title: 'Flower Dance',
          description: 'Annual spring dance celebration in the Cindersap Forest'
        }
      ]
    }
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