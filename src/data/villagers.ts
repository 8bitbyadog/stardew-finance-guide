interface Gift {
  name: string;
  type: 'Love' | 'Like' | 'Neutral' | 'Dislike' | 'Hate';
  description?: string;
}

interface Villager {
  id: string;
  name: string;
  birthday: {
    season: 'Spring' | 'Summer' | 'Fall' | 'Winter';
    day: number;
  };
  address: string;
  schedule: string;
  gifts: {
    love: Gift[];
    like: Gift[];
    dislike: Gift[];
    hate: Gift[];
  };
  personality: string;
  marriageable: boolean;
}

export const villagers: Villager[] = [
  {
    id: 'leah',
    name: 'Leah',
    birthday: {
      season: 'Winter',
      day: 23
    },
    address: 'Cottage south of Marnie\'s Ranch',
    schedule: 'Often found at her cottage or the Stardrop Saloon',
    personality: 'Artistic, nature-loving, and independent',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Goat Cheese', type: 'Love', description: 'Artisanal dairy product' },
        { name: 'Salad', type: 'Love', description: 'Fresh and healthy' },
        { name: 'Wine', type: 'Love', description: 'Any type' },
        { name: 'Truffle', type: 'Love', description: 'Foraged by pigs' }
      ],
      like: [
        { name: 'All Fruits', type: 'Like', description: 'Except Salmonberry' },
        { name: 'All Vegetables', type: 'Like' },
        { name: 'All Eggs', type: 'Like' },
        { name: 'All Milk', type: 'Like' }
      ],
      dislike: [
        { name: 'Bread', type: 'Dislike' },
        { name: 'Hash Browns', type: 'Dislike' },
        { name: 'Pancakes', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Joja Cola', type: 'Hate', description: 'Represents corporate consumption' },
        { name: 'Pizza', type: 'Hate' },
        { name: 'Ice Cream', type: 'Hate' }
      ]
    }
  },
  {
    id: 'pierre',
    name: 'Pierre',
    birthday: {
      season: 'Spring',
      day: 26
    },
    address: 'Pierre\'s General Store',
    schedule: 'Usually in his shop during business hours',
    personality: 'Hardworking businessman, competitive with JojaMart',
    marriageable: false,
    gifts: {
      love: [
        { name: 'Fried Calamari', type: 'Love' },
        { name: 'Gold Bar', type: 'Love', description: 'Values precious metals' }
      ],
      like: [
        { name: 'All Cooking', type: 'Like', description: 'Except Fried Calamari' },
        { name: 'All Gems', type: 'Like' },
        { name: 'All Minerals', type: 'Like' }
      ],
      dislike: [
        { name: 'All Foraged Items', type: 'Dislike', description: 'Competes with his business' },
        { name: 'Holly', type: 'Dislike' }
      ],
      hate: [
        { name: 'Joja Cola', type: 'Hate', description: 'Represents his competition' },
        { name: 'Corn', type: 'Hate' },
        { name: 'Wheat', type: 'Hate' }
      ]
    }
  },
  {
    id: 'linus',
    name: 'Linus',
    birthday: {
      season: 'Winter',
      day: 3
    },
    address: 'Tent north of the Carpenter\'s Shop',
    schedule: 'Often foraging or near his tent',
    personality: 'Kind-hearted, nature-loving, but shy due to prejudice',
    marriageable: false,
    gifts: {
      love: [
        { name: 'Yam', type: 'Love' },
        { name: 'Coconut', type: 'Love' },
        { name: 'Cactus Fruit', type: 'Love' },
        { name: 'All Foraged Items', type: 'Love', description: 'Values natural items' }
      ],
      like: [
        { name: 'All Vegetables', type: 'Like' },
        { name: 'All Fruits', type: 'Like' },
        { name: 'All Cooked Dishes', type: 'Like' }
      ],
      dislike: [
        { name: 'All Gems', type: 'Dislike', description: 'Values simplicity over wealth' },
        { name: 'Gold Bar', type: 'Dislike' },
        { name: 'Diamond', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Joja Products', type: 'Hate', description: 'Dislikes corporate products' },
        { name: 'Bread', type: 'Hate' },
        { name: 'Cake', type: 'Hate' }
      ]
    }
  },
  {
    id: 'sebastian',
    name: 'Sebastian',
    birthday: { season: 'Winter', day: 10 },
    address: 'Carpenter\'s Shop Basement',
    schedule: 'Often in his room, visits lake in evenings',
    personality: 'Introverted programmer who loves technology and motorcycles',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Frozen Tear', type: 'Love', description: 'Found in the mines' },
        { name: 'Sashimi', type: 'Love', description: 'Any fish will do' },
        { name: 'Obsidian', type: 'Love' },
        { name: 'Pumpkin Soup', type: 'Love' }
      ],
      like: [
        { name: 'Quartz', type: 'Like' },
        { name: 'All Gems', type: 'Like' },
        { name: 'Coffee', type: 'Like', description: 'For late night coding' }
      ],
      dislike: [
        { name: 'All Clay', type: 'Dislike' },
        { name: 'All Vegetables', type: 'Dislike', description: 'Except Pumpkin' }
      ],
      hate: [
        { name: 'Complete Breakfast', type: 'Hate', description: 'Too morning person' },
        { name: 'Clay', type: 'Hate' }
      ]
    }
  },
  {
    id: 'abigail',
    name: 'Abigail',
    birthday: { season: 'Fall', day: 13 },
    address: 'Pierre\'s General Store',
    schedule: 'Often at home or the graveyard',
    personality: 'Alternative, spiritual, and adventurous',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Amethyst', type: 'Love', description: 'Her favorite gem' },
        { name: 'Pumpkin', type: 'Love', description: 'Especially during fall' },
        { name: 'Chocolate Cake', type: 'Love' },
        { name: 'Spicy Eel', type: 'Love' }
      ],
      like: [
        { name: 'All Gems', type: 'Like' },
        { name: 'All Minerals', type: 'Like' },
        { name: 'Pufferfish', type: 'Like' }
      ],
      dislike: [
        { name: 'All Vegetables', type: 'Dislike', description: 'Except Pumpkin' },
        { name: 'Clay', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Cooking', type: 'Hate', description: 'Except her loved items' },
        { name: 'Sugar', type: 'Hate' }
      ]
    }
  },
  {
    id: 'penny',
    name: 'Penny',
    birthday: { season: 'Fall', day: 2 },
    address: 'Trailer near river',
    schedule: 'Teaching children or reading in town',
    personality: 'Kind, nurturing teacher who loves books',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Diamond', type: 'Love', description: 'Represents escape from poverty' },
        { name: 'Emerald', type: 'Love' },
        { name: 'Poppy', type: 'Love' },
        { name: 'Melon', type: 'Love' }
      ],
      like: [
        { name: 'All Gems', type: 'Like' },
        { name: 'All Flowers', type: 'Like' },
        { name: 'All Cooking', type: 'Like', description: 'Except Seafood' }
      ],
      dislike: [
        { name: 'All Alcohol', type: 'Dislike', description: 'Due to family history' },
        { name: 'Rabbit\'s Foot', type: 'Dislike' }
      ],
      hate: [
        { name: 'Beer', type: 'Hate', description: 'Strong aversion to alcohol' },
        { name: 'Pale Ale', type: 'Hate' },
        { name: 'Wine', type: 'Hate' }
      ]
    }
  },
  {
    id: 'harvey',
    name: 'Harvey',
    birthday: { season: 'Winter', day: 14 },
    address: 'Medical Clinic',
    schedule: 'Working at clinic or taking walks',
    personality: 'Caring doctor with a passion for health',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Coffee', type: 'Love', description: 'For long clinic hours' },
        { name: 'Wine', type: 'Love' },
        { name: 'Truffle Oil', type: 'Love' },
        { name: 'Pickles', type: 'Love' }
      ],
      like: [
        { name: 'All Vegetables', type: 'Like', description: 'Promotes health' },
        { name: 'All Fruits', type: 'Like' },
        { name: 'All Cooking', type: 'Like' }
      ],
      dislike: [
        { name: 'All Artifacts', type: 'Dislike' },
        { name: 'Coral', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Algae', type: 'Hate' },
        { name: 'Quartz', type: 'Hate' }
      ]
    }
  },
  {
    id: 'maru',
    name: 'Maru',
    birthday: { season: 'Summer', day: 10 },
    address: 'Carpenter\'s Shop',
    schedule: 'Working at clinic or tinkering',
    personality: 'Intelligent, scientific, and optimistic',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Diamond', type: 'Love', description: 'For scientific study' },
        { name: 'Gold Bar', type: 'Love', description: 'For inventions' },
        { name: 'Strawberry', type: 'Love' },
        { name: 'Battery Pack', type: 'Love' }
      ],
      like: [
        { name: 'All Minerals', type: 'Like' },
        { name: 'All Gems', type: 'Like' },
        { name: 'Copper Bar', type: 'Like' }
      ],
      dislike: [
        { name: 'All Fish', type: 'Dislike' },
        { name: 'Holly', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Alcohol', type: 'Hate' },
        { name: 'Seaweed', type: 'Hate' }
      ]
    }
  },
  {
    id: 'elliott',
    name: 'Elliott',
    birthday: { season: 'Fall', day: 5 },
    address: 'Beach Cabin',
    schedule: 'Writing at cabin or library',
    personality: 'Romantic writer with poetic soul',
    marriageable: true,
    gifts: {
      love: [
        { name: 'Crab Cakes', type: 'Love', description: 'Beach favorite' },
        { name: 'Duck Feather', type: 'Love', description: 'For writing' },
        { name: 'Pomegranate', type: 'Love' },
        { name: 'Tom Kha Soup', type: 'Love' }
      ],
      like: [
        { name: 'All Fruit', type: 'Like' },
        { name: 'All Vegetables', type: 'Like' },
        { name: 'Squid Ink', type: 'Like' }
      ],
      dislike: [
        { name: 'All Eggs', type: 'Dislike' },
        { name: 'All Fish', type: 'Dislike', description: 'Except squid and crab' }
      ],
      hate: [
        { name: 'Amaranth', type: 'Hate' },
        { name: 'Quartz', type: 'Hate' }
      ]
    }
  },
  {
    id: 'demetrius',
    name: 'Demetrius',
    birthday: { season: 'Summer', day: 19 },
    address: 'Carpenter\'s Shop',
    schedule: 'Conducting research or in lab',
    personality: 'Scientific researcher focused on local wildlife',
    marriageable: false,
    gifts: {
      love: [
        { name: 'Strawberry', type: 'Love', description: 'For research' },
        { name: 'Ice Cream', type: 'Love' },
        { name: 'Bean Hotpot', type: 'Love' }
      ],
      like: [
        { name: 'All Fruits', type: 'Like' },
        { name: 'All Vegetables', type: 'Like' },
        { name: 'Purple Mushroom', type: 'Like' }
      ],
      dislike: [
        { name: 'All Fish', type: 'Dislike' },
        { name: 'All Artifacts', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Alcohol', type: 'Hate' },
        { name: 'Rice Pudding', type: 'Hate' }
      ]
    }
  },
  {
    id: 'marnie',
    name: 'Marnie',
    birthday: { season: 'Fall', day: 18 },
    address: 'Marnie\'s Ranch',
    schedule: 'Tending to animals or at shop',
    personality: 'Caring animal lover and rancher',
    marriageable: false,
    gifts: {
      love: [
        { name: 'Diamond', type: 'Love' },
        { name: 'Pumpkin Pie', type: 'Love' },
        { name: 'Pink Cake', type: 'Love', description: 'Sweet tooth' }
      ],
      like: [
        { name: 'All Eggs', type: 'Like' },
        { name: 'All Milk', type: 'Like' },
        { name: 'All Flowers', type: 'Like' }
      ],
      dislike: [
        { name: 'All Fish', type: 'Dislike' },
        { name: 'All Artifacts', type: 'Dislike' }
      ],
      hate: [
        { name: 'All Alcohol', type: 'Hate', description: 'Except for special occasions' },
        { name: 'Seaweed', type: 'Hate' }
      ]
    }
  }
];

export type { Villager, Gift }; 