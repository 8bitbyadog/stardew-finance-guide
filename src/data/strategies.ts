interface Strategy {
  id: string;
  title: string;
  category: 'Farming' | 'Mining' | 'Foraging' | 'Fishing' | 'Animal Husbandry';
  description: string;
  financialConcept: string;
  initialInvestment: number;
  potentialReturn: number;
  timeToReturn: string;
  riskLevel: 'Low' | 'Medium' | 'High';
  season: 'Any' | 'Spring' | 'Summer' | 'Fall' | 'Winter';
  tips: string[];
}

export const strategies: Strategy[] = [
  {
    id: 'blueberry-farming',
    title: 'Blueberry Mass Production',
    category: 'Farming',
    description: 'Plant and maintain a large blueberry farm during summer. Blueberries produce multiple harvests and have a high profit margin.',
    financialConcept: 'Dividend Investing - Like dividend stocks, blueberries provide regular payouts (multiple harvests) from a single investment.',
    initialInvestment: 80, // per seed
    potentialReturn: 600, // per plant over the season
    timeToReturn: '13 days for first harvest, then every 4 days',
    riskLevel: 'Low',
    season: 'Summer',
    tips: [
      'Buy seeds from Pierre\'s Shop',
      'Use Quality Fertilizer to increase chance of higher quality crops',
      'Consider Farming level and perks for better yields',
      'Process in Preserves Jar or Keg for higher profits'
    ]
  },
  {
    id: 'ancient-fruit',
    title: 'Ancient Fruit Greenhouse',
    category: 'Farming',
    description: 'Convert the greenhouse into an Ancient Fruit farm for year-round passive income.',
    financialConcept: 'Compound Interest & Long-term Investment - Initial setup is challenging but provides consistent, growing returns.',
    initialInvestment: 1000, // seeds + greenhouse repair
    potentialReturn: 1100, // per fruit when processed
    timeToReturn: '28 days initial, then every 7 days',
    riskLevel: 'Medium',
    season: 'Any',
    tips: [
      'Donate Ancient Seed to museum to get crafting recipe',
      'Use Seed Makers to multiply Ancient Seeds',
      'Install sprinklers for automation',
      'Process in Kegs for maximum profit'
    ]
  },
  {
    id: 'skull-cavern',
    title: 'Skull Cavern Mining',
    category: 'Mining',
    description: 'Deep diving into Skull Cavern for iridium and precious stones.',
    financialConcept: 'High-Risk High-Reward Investment - Like volatile stocks or crypto, high potential returns with significant risk.',
    initialInvestment: 500, // bombs + food + supplies
    potentialReturn: 10000, // potential daily return
    timeToReturn: 'Same day',
    riskLevel: 'High',
    season: 'Any',
    tips: [
      'Bring plenty of bombs and staircases',
      'Pack high-energy food',
      'Go on high luck days',
      'Bring a Desert Warp Totem for maximum time'
    ]
  },
  {
    id: 'crab-pot-empire',
    title: 'Crab Pot Empire',
    category: 'Fishing',
    description: 'Set up a large network of crab pots for passive daily income from seafood.',
    financialConcept: 'Passive Income Stream - Similar to rental properties or vending machines, crab pots generate daily income with minimal maintenance.',
    initialInvestment: 1500, // 15 crab pots at 100g each
    potentialReturn: 750, // daily potential from 15 pots
    timeToReturn: 'Daily returns after initial setup',
    riskLevel: 'Low',
    season: 'Any',
    tips: [
      'Place pots in high-traffic water areas',
      'Use Worm Bins for free bait',
      'Get the Luremaster profession for no bait requirement',
      'Process low-value catches into Fish Food'
    ]
  },
  {
    id: 'truffle-oil-business',
    title: 'Truffle Oil Business',
    category: 'Animal Husbandry',
    description: 'Raise pigs to find truffles and process them into valuable truffle oil.',
    financialConcept: 'Value-Added Processing - Like manufacturing, converting raw materials (truffles) into finished products (oil) increases profit margins.',
    initialInvestment: 20000, // barn + pigs + oil maker
    potentialReturn: 1250, // per truffle oil
    timeToReturn: '10 days for pig maturity, then daily returns',
    riskLevel: 'Medium',
    season: 'Spring',
    tips: [
      'Build deluxe barn for maximum pig happiness',
      'Get Gatherer profession for double truffles',
      'Process all truffles into oil unless iridium quality',
      'Keep pigs well-fed and pet them daily',
      'Works in Spring, Summer, and Fall (pigs don\'t forage in Winter)'
    ]
  },
  {
    id: 'mushroom-cave',
    title: 'Mushroom Cave Investment',
    category: 'Foraging',
    description: 'Convert your cave into a mushroom farm for daily common and rare mushrooms.',
    financialConcept: 'Portfolio Diversification - Different mushroom types represent different asset classes, spreading risk and ensuring steady returns.',
    initialInvestment: 0, // free cave choice
    potentialReturn: 350, // daily average
    timeToReturn: 'Daily returns after setup',
    riskLevel: 'Low',
    season: 'Any',
    tips: [
      'Choose mushrooms over fruit bats for consistency',
      'Check cave daily for best returns',
      'Save rare mushrooms for Life Elixir crafting',
      'Use mushrooms in cooking for added value'
    ]
  },
  {
    id: 'seasonal-forage-flipping',
    title: 'Seasonal Forage Flipping',
    category: 'Foraging',
    description: 'Collect seasonal items and store them for off-season premium prices.',
    financialConcept: 'Market Timing & Arbitrage - Buy low (collect in season) and sell high (during off-season) to maximize profits.',
    initialInvestment: 0, // just energy and time
    potentialReturn: 1000, // per stack of rare items
    timeToReturn: '1-3 seasons',
    riskLevel: 'Medium',
    season: 'Any',
    tips: [
      'Focus on rare seasonal items like Sweet Pea and Crystal Fruit',
      'Store items until they become scarce',
      'Get Botanist profession for iridium quality',
      'Watch for needed items in quest board'
    ]
  }
];

export type { Strategy }; 