interface Crop {
  name: string;
  growthTime: number;
  regrowth?: number;
  seedPrice: number;
  basePrice: number;
  minYield: number;
  maxYield: number;
  description: string;
  profitTips: string[];
}

interface Fish {
  name: string;
  location: string;
  time: string;
  weather?: 'Any' | 'Rain' | 'Sun';
  difficulty: 1 | 2 | 3 | 4 | 5;
  basePrice: number;
  description: string;
  tips: string[];
}

interface Activity {
  name: string;
  type: 'Foraging' | 'Mining' | 'Social' | 'Festival';
  date?: number;
  profitPotential: 1 | 2 | 3 | 4 | 5;
  description: string;
  requirements?: string[];
  tips: string[];
}

interface SeasonData {
  name: 'Spring' | 'Summer' | 'Fall' | 'Winter';
  description: string;
  crops: Crop[];
  fish: Fish[];
  activities: Activity[];
  birthdays: Array<{
    day: number;
    villager: string;
  }>;
}

export const seasons: SeasonData[] = [
  {
    name: 'Spring',
    description: 'The season of new beginnings and the start of the farming year. Most crops thrive in this mild weather.',
    crops: [
      {
        name: 'Strawberry',
        growthTime: 8,
        regrowth: 4,
        seedPrice: 100,
        basePrice: 120,
        minYield: 1,
        maxYield: 3,
        description: 'High-value spring crop with multiple harvests. Best bought at Egg Festival.',
        profitTips: [
          'Buy seeds at Egg Festival (Year 1)',
          'Save some berries for Seed Makers',
          'Plant immediately after festival for multiple harvests',
          'Use Quality Fertilizer for better prices'
        ]
      },
      {
        name: 'Cauliflower',
        growthTime: 12,
        seedPrice: 80,
        basePrice: 175,
        minYield: 1,
        maxYield: 1,
        description: 'High-value single harvest crop. Popular for giant crop potential.',
        profitTips: [
          'Plant in 3x3 grid for giant crop chance',
          'Use Quality Fertilizer',
          'Save some for Community Center'
        ]
      },
      {
        name: 'Potato',
        growthTime: 6,
        seedPrice: 50,
        basePrice: 80,
        minYield: 1,
        maxYield: 4,
        description: 'Fast-growing crop with chance of multiple potatoes per harvest.',
        profitTips: [
          'Multiple yield chance makes it profitable',
          'Good early game crop',
          'Use Speed-Gro for more harvests'
        ]
      }
    ],
    fish: [
      {
        name: 'Rainbow Trout',
        location: 'Mountain Lake',
        time: '6am - 7pm',
        weather: 'Sun',
        difficulty: 3,
        basePrice: 65,
        description: 'Sunny day lake fish, good for beginners.',
        tips: [
          'Use Bait to increase bite rate',
          'Fish on sunny days only',
          'Save for Fish Pond potential'
        ]
      },
      {
        name: 'Herring',
        location: 'Ocean',
        time: 'All Day',
        weather: 'Any',
        difficulty: 1,
        basePrice: 30,
        description: 'Common ocean fish, easy to catch.',
        tips: [
          'Good for building fishing skill',
          'Turn into Fish Food for profit',
          'Use in Fishing Bundle'
        ]
      }
    ],
    activities: [
      {
        name: 'Egg Festival',
        type: 'Festival',
        date: 13,
        profitPotential: 5,
        description: 'Annual spring festival featuring egg hunt and strawberry seeds.',
        requirements: ['Attend between 9am - 2pm'],
        tips: [
          'Buy Strawberry Seeds',
          'Plant seeds same day',
          'Participate in egg hunt for rare hat'
        ]
      },
      {
        name: 'Spring Foraging',
        type: 'Foraging',
        profitPotential: 3,
        description: 'Collect spring wild plants and flowers.',
        tips: [
          'Focus on Salmonberries (15-18)',
          'Save Spring Onions for energy',
          'Check forest daily for respawns'
        ]
      }
    ],
    birthdays: [
      { day: 4, villager: 'Lewis' },
      { day: 7, villager: 'Vincent' },
      { day: 26, villager: 'Pierre' }
    ]
  },
  {
    name: 'Summer',
    description: 'Peak growing season with the most profitable crops. Perfect for establishing your farm\'s economy.',
    crops: [
      {
        name: 'Blueberry',
        growthTime: 13,
        regrowth: 4,
        seedPrice: 80,
        basePrice: 50,
        minYield: 3,
        maxYield: 3,
        description: 'Multiple harvest crop with guaranteed triple yield.',
        profitTips: [
          'Plant early for maximum harvests',
          'Use Quality Fertilizer',
          'Process in Preserves Jars',
          'Save some for Seed Makers'
        ]
      },
      {
        name: 'Starfruit',
        growthTime: 13,
        seedPrice: 400,
        basePrice: 750,
        minYield: 1,
        maxYield: 1,
        description: 'Extremely valuable single harvest crop. Best for wine production.',
        profitTips: [
          'Buy seeds from Oasis',
          'Use Deluxe Speed-Gro for extra harvest',
          'Save for Wine production',
          'Plant in Greenhouse when available'
        ]
      }
    ],
    fish: [
      {
        name: 'Super Cucumber',
        location: 'Ocean',
        time: '6pm - 2am',
        weather: 'Any',
        difficulty: 4,
        basePrice: 250,
        description: 'Valuable night fish with unique properties.',
        tips: [
          'Fish during night market for better chances',
          'Use trap bobber for easier catch',
          'Save for Fish Pond'
        ]
      }
    ],
    activities: [
      {
        name: 'Luau',
        type: 'Festival',
        date: 11,
        profitPotential: 2,
        description: 'Beach festival with communal soup pot.',
        requirements: ['Bring high-quality ingredient'],
        tips: [
          'Bring Gold Star vegetable',
          'Network with villagers',
          'Good opportunity for gifting'
        ]
      }
    ],
    birthdays: [
      { day: 10, villager: 'Maru' },
      { day: 19, villager: 'Demetrius' }
    ]
  },
  {
    name: 'Fall',
    description: 'Last chance for outdoor crops with some unique high-value options.',
    crops: [
      {
        name: 'Pumpkin',
        growthTime: 13,
        seedPrice: 100,
        basePrice: 320,
        minYield: 1,
        maxYield: 1,
        description: 'High-value crop with giant crop potential.',
        profitTips: [
          'Plant in 3x3 grid for giant crop chance',
          'Save some for villager gifts',
          'Process into Juice for profit'
        ]
      },
      {
        name: 'Cranberries',
        growthTime: 7,
        regrowth: 5,
        seedPrice: 240,
        basePrice: 75,
        minYield: 2,
        maxYield: 2,
        description: 'Multiple harvest crop with double yield.',
        profitTips: [
          'Plant early for maximum harvests',
          'Process into Juice or Jelly',
          'Good greenhouse candidate'
        ]
      }
    ],
    fish: [
      {
        name: 'Salmon',
        location: 'River',
        time: '6am - 7pm',
        weather: 'Any',
        difficulty: 3,
        basePrice: 75,
        description: 'Migratory fish available only in fall.',
        tips: [
          'Fish near river mouth',
          'Save for sashimi',
          'Required for Community Center'
        ]
      }
    ],
    activities: [
      {
        name: 'Spirit\'s Eve',
        type: 'Festival',
        date: 27,
        profitPotential: 3,
        description: 'Halloween-themed maze festival.',
        requirements: ['Attend between 10pm - 11:50pm'],
        tips: [
          'Complete maze for rare reward',
          'Good opportunity for socializing',
          'Stock up on pumpkins'
        ]
      }
    ],
    birthdays: [
      { day: 2, villager: 'Penny' },
      { day: 5, villager: 'Elliott' },
      { day: 13, villager: 'Abigail' }
    ]
  },
  {
    name: 'Winter',
    description: 'Focus on non-farming activities. Perfect for mining, fishing, and relationship building.',
    crops: [
      {
        name: 'Winter Seeds',
        growthTime: 7,
        seedPrice: 30,
        basePrice: 70,
        minYield: 1,
        maxYield: 1,
        description: 'Craftable seeds from winter forage items.',
        profitTips: [
          'Craft from foraged items',
          'Use Quality Fertilizer',
          'Good source of winter income'
        ]
      }
    ],
    fish: [
      {
        name: 'Glacierfish',
        location: 'Mountain Lake',
        time: '6am - 8pm',
        weather: 'Any',
        difficulty: 5,
        basePrice: 1000,
        description: 'Legendary winter fish. Extremely challenging to catch.',
        tips: [
          'Use trap bobber',
          'Level 10 fishing recommended',
          'Eat fishing buff food'
        ]
      }
    ],
    activities: [
      {
        name: 'Ice Fishing',
        type: 'Festival',
        date: 8,
        profitPotential: 4,
        description: 'Winter fishing competition.',
        requirements: ['Attend between 9am - 2pm'],
        tips: [
          'Practice fishing beforehand',
          'Use good bait and tackle',
          'Aim for competition win'
        ]
      },
      {
        name: 'Winter Mining',
        type: 'Mining',
        profitPotential: 5,
        description: 'Best season for deep mine exploration.',
        tips: [
          'Focus on reaching lower levels',
          'Bring plenty of food',
          'Save rare minerals for spring'
        ]
      }
    ],
    birthdays: [
      { day: 3, villager: 'Linus' },
      { day: 10, villager: 'Sebastian' },
      { day: 14, villager: 'Harvey' },
      { day: 23, villager: 'Leah' }
    ]
  }
];

export type { SeasonData, Crop, Fish, Activity }; 