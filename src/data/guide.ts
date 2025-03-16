interface GuideSection {
  title: string;
  emoji: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export const guideData: GuideSection[] = [
  {
    title: "Welcome to the Valley! 🌱",
    emoji: "🏡",
    content: "First and foremost, remember: Stardew Valley is not a linear game. There's no true ending, and you can't fall behind! You left the rat race of Joja Corporation - don't create a new one for yourself. Take your time, enjoy the journey, and create your own story.",
    subsections: [
      {
        title: "Important Terms",
        content: "SDV = Stardew Valley\nY# = Year Number\nCC = Community Center\nMC = Marriage Candidate"
      }
    ]
  },
  {
    title: "Essential Skills",
    emoji: "⚒️",
    content: "Master these five core skills to thrive in the valley:",
    subsections: [
      {
        title: "🌾 Farming",
        content: "Level up by harvesting crops and caring for animals. Each level grants +1 hoe and watering can proficiency. Unlocks ranch and artisan crafting recipes."
      },
      {
        title: "⛏️ Mining",
        content: "Break rocks to level up. Each level grants +1 pickaxe proficiency. Unlocks valuable spelunking recipes."
      },
      {
        title: "🍄 Foraging",
        content: "Gather wild goods and chop wood. Each level grants +1 axe proficiency. Focus on reaching Level 6 for the crucial Lightning Rod recipe!"
      },
      {
        title: "🎣 Fishing",
        content: "Master the fishing mini-game or use crab pots. Each level improves rod proficiency. Great source of early income!"
      },
      {
        title: "⚔️ Combat",
        content: "Fight monsters to unlock ring recipes and improve your survival abilities. Essential for deep mine exploration."
      }
    ]
  },
  {
    title: "Your First Spring",
    emoji: "🌸",
    content: "Welcome to your new life! Don't stress about being successful - focus on learning the mechanics and getting your bearings.",
    subsections: [
      {
        title: "Day 1 Priorities",
        content: "1. Plant your parsnip seeds\n2. Clear some basic farm space\n3. Meet the townspeople\n4. Craft a chest (50 wood)\n5. Start collecting resources"
      },
      {
        title: "Money Management 💰",
        content: "• Keep at least one of everything you find\n• Fish and forage for early income\n• Start with 3-5 of each crop type\n• Watch for artifact spots (wiggly worms)"
      }
    ]
  },
  {
    title: "Summer & Fall",
    emoji: "☀️",
    content: "By now you're getting comfortable with the basics. Time to start planning bigger harvests and preparing for your first winter!",
    subsections: [
      {
        title: "Summer Goals 🌻",
        content: "• Plant a full crop harvest\n• Start building relationships\n• Consider getting animals\n• Build a silo before getting animals\n• Start exploring the mines"
      },
      {
        title: "Fall Preparation 🍂",
        content: "• Stock up on hay for winter\n• Collect resources for tool upgrades\n• Consider building a barn or coop\n• Plant wheat for extra hay\n• Gather tree seeds for winter planting"
      }
    ]
  },
  {
    title: "Winter Survival",
    emoji: "❄️",
    content: "Winter isn't the end - it's an opportunity! With no crops to water, you can focus on other activities.",
    subsections: [
      {
        title: "Winter Activities ⛄",
        content: "• Upgrade your tools (especially watering can)\n• Focus on mining and fishing\n• Build relationships with villagers\n• Craft winter seeds (Foraging 7)\n• Plan next year's farm layout"
      },
      {
        title: "Animal Care 🐮",
        content: "• Install heaters in barns/coops (2,000g each)\n• Ensure you have enough hay stored\n• Keep animals inside during storms\n• Continue collecting resources"
      }
    ]
  },
  {
    title: "Building Relationships",
    emoji: "💝",
    content: "Building friendships and finding romance is a big part of life in Stardew Valley. Take your time getting to know everyone!",
    subsections: [
      {
        title: "Friendship Basics",
        content: "• Talk to villagers daily (+10 points)\n• Give birthday gifts (8x normal points)\n• Check the calendar outside Pierre's\n• Most villagers love receiving artisan goods\n• Keep a gift diary to remember preferences"
      },
      {
        title: "Marriage Candidates 💍",
        content: "• Build friendship to 10 hearts\n• Buy Mermaid's Pendant (rain day at beach)\n• Upgrade your house first\n• Each spouse has unique benefits\n• Don't rush - get to know everyone!"
      },
      {
        title: "Special Events",
        content: "• Flower Dance (Spring 24)\n• Luau (Summer 11)\n• Stardew Valley Fair (Fall 16)\n• Spirit's Eve (Fall 27)\n• Festival of Ice (Winter 8)\n• Night Market (Winter 15-17)"
      }
    ]
  },
  {
    title: "Mining Guide",
    emoji: "⛰️",
    content: "The mines are dangerous but rewarding. Each 5 levels contains similar resources and monsters. Take it slow and stay safe!",
    subsections: [
      {
        title: "Preparation 🎒",
        content: "• Bring food for health/energy\n• Pack basic resources for stairs\n• Carry a weapon at all times\n• Consider bringing stone for emergency stairs\n• Check your luck on TV"
      },
      {
        title: "Mining Tips ⛏️",
        content: "• Focus on reaching elevator levels (5, 10, etc)\n• Break all gem nodes (colored rocks)\n• Kill monsters for useful drops\n• Use bombs for large ore clusters\n• Always face monsters when swinging weapons"
      },
      {
        title: "Resource Guide",
        content: "• Levels 1-39: Copper Ore\n• Levels 40-79: Iron Ore\n• Levels 80+: Gold Ore\n• Levels 100+: Iridium Ore (rare)\n• Infested levels have more monsters"
      }
    ]
  },
  {
    title: "Fishing Mastery",
    emoji: "🎣",
    content: "Fishing can be challenging at first, but it's one of the best ways to make money early in the game. Practice makes perfect!",
    subsections: [
      {
        title: "Getting Started",
        content: "• Start with Training Rod (25g from Willy)\n• Tap button for small movements\n• Hold button to move bar faster\n• Perfect catches give bonus XP\n• Use food buffs to increase fishing level"
      },
      {
        title: "Location Guide 🗺️",
        content: "• Ocean: Best in Spring/Fall\n• Mountain Lake: Consistent year-round\n• River: Changes with seasons\n• Secret Woods: Special fish\n• Beach Tide Pools: Morning/Evening fish"
      },
      {
        title: "Advanced Tips",
        content: "• Use tackle when available\n• Trap bobber helps with hard fish\n• Cork bobber increases bar size\n• Bait increases bite rate\n• Legendary fish need special conditions"
      }
    ]
  },
  {
    title: "Pro Tips",
    emoji: "💡",
    content: "These tips will help you make the most of your farm life:",
    subsections: [
      {
        title: "Farm Management",
        content: "• Use basic fertilizer (2 sap each)\n• Plant grass starters on season's last day\n• Use paths to prevent debris spread\n• Fence in your pet's water bowl\n• Save mixed seeds for early crops"
      },
      {
        title: "Time Management",
        content: "• It's okay to go to bed early\n• Prioritize backpack upgrades\n• Check the calendar for birthdays\n• Keep materials for quests\n• Don't stress about 'perfect' choices"
      }
    ]
  },
  {
    title: "Tool Mastery",
    emoji: "🔨",
    content: "Your tools are essential for success in Stardew Valley. Each upgrade makes your daily tasks more efficient and opens up new possibilities!",
    subsections: [
      {
        title: "Upgrade Materials",
        content: "• Copper: 5 bars + 2,000g\n• Iron: 5 bars + 5,000g\n• Gold: 5 bars + 10,000g\n• Iridium: 5 bars + 25,000g\n• Visit Clint's shop between 9am-4pm"
      },
      {
        title: "Upgrade Priority 📊",
        content: "1. Watering Can (efficiency + coverage)\n2. Pickaxe (mine deeper + break boulders)\n3. Axe (hardwood access)\n4. Hoe (till larger areas)\n5. Trash Can (better sell value)"
      },
      {
        title: "Tool Tips ⭐",
        content: "• Upgrade watering can on rain days\n• Hold button for increased area effect\n• Tools don't lose durability\n• Keep basic tools for early game\n• Upgraded tools use more energy"
      }
    ]
  },
  {
    title: "Community Center",
    emoji: "🏛️",
    content: "Restoring the Community Center is one of the most rewarding journeys in Stardew Valley. Each bundle you complete helps revitalize the town!",
    subsections: [
      {
        title: "Bundle Rooms 📦",
        content: "• Crafts Room (Foraging + Wood)\n• Pantry (Farming + Animal Products)\n• Fish Tank (Fishing)\n• Boiler Room (Mining)\n• Bulletin Board (Mixed Items)\n• Vault (Gold Only)"
      },
      {
        title: "Strategy Tips",
        content: "• Check bundles before selling items\n• Focus on season-specific items first\n• Plant at least one of each crop\n• Save high-quality items\n• Check traveling cart on Fri/Sun"
      },
      {
        title: "Rewards 🎁",
        content: "• Bridge Repair (Beach Access)\n• Minecarts (Fast Travel)\n• Greenhouse (Year-round Growing)\n• Desert Bus (New Area)\n• Friendship with Town\n• Special Items"
      }
    ]
  },
  {
    title: "Farm Planning",
    emoji: "📐",
    content: "A well-planned farm layout can save you time and energy while maximizing your profits. Take time to design your perfect farm!",
    subsections: [
      {
        title: "Layout Basics",
        content: "• Keep frequently used items near house\n• Create dedicated crop zones\n• Plan for sprinkler coverage\n• Leave space for buildings\n• Consider seasonal changes"
      },
      {
        title: "Efficient Design 🎯",
        content: "• Group similar activities together\n• Create paths for faster movement\n• Place scarecrows strategically\n• Plan for future expansions\n• Consider aesthetic appeal"
      },
      {
        title: "Building Placement",
        content: "• Barns/Coops near grass fields\n• Silos close to animal buildings\n• Wells near crop fields\n• Sheds for artisan goods\n• Fish ponds in unused spaces"
      }
    ]
  },
  {
    title: "Money Making Guide",
    emoji: "💰",
    content: "There are many ways to make money in Stardew Valley. The best approach is to diversify your income streams!",
    subsections: [
      {
        title: "Early Game (Year 1)",
        content: "• Forage everything you see\n• Fish during rainy days\n• Grow high-value crops\n• Collect and sell spring onions\n• Complete town board quests"
      },
      {
        title: "Mid Game (Year 2)",
        content: "• Process crops into artisan goods\n• Raise animals for products\n• Mine gems and minerals\n• Make wine and pale ale\n• Tap oak trees for resin"
      },
      {
        title: "Late Game",
        content: "• Ancient Fruit wine production\n• Truffle oil from pigs\n• Crystalariums with diamonds\n• Starfruit in greenhouse\n• Fish pond roe production"
      }
    ]
  },
  {
    title: "Advanced Tips",
    emoji: "🌟",
    content: "Once you've mastered the basics, these advanced strategies will help you optimize your farm life:",
    subsections: [
      {
        title: "Time Optimization",
        content: "• Stack similar activities\n• Use rain for tool upgrades\n• Process items overnight\n• Plan routes through town\n• Use minecarts and warp totems"
      },
      {
        title: "Resource Management",
        content: "• Create tree farms\n• Stockpile winter resources\n• Use crystalariums strategically\n• Preserve rare items\n• Maintain emergency funds"
      },
      {
        title: "Quality of Life",
        content: "• Build multiple chests\n• Label chests with signs\n• Keep farm organized\n• Use seasonal plant markers\n• Create dedicated storage areas"
      }
    ]
  },
  {
    title: "Crop Optimization",
    emoji: "🌾",
    content: "Maximize your farming profits by understanding crop mechanics and planning your harvests strategically!",
    subsections: [
      {
        title: "Most Profitable Crops 💫",
        content: "Spring:\n• Strawberries (after Y1)\n• Cauliflower\n• Potatoes\n• Kale\n\nSummer:\n• Blueberries\n• Melons\n• Hops\n• Starfruit (late game)\n\nFall:\n• Cranberries\n• Pumpkins\n• Grape\n• Sweet Gem Berry"
      },
      {
        title: "Growth Boosters",
        content: "• Basic Fertilizer: +1 quality level\n• Quality Fertilizer: +2 quality levels\n• Speed-Gro: -10% growth time\n• Deluxe Speed-Gro: -25% growth time\n• Agricultural profession: +10% crop value"
      },
      {
        title: "Planting Patterns 🌱",
        content: "• Iridium Sprinkler: 24 tiles (5x5 minus corners)\n• Quality Sprinkler: 8 tiles (3x3 minus center)\n• Scarecrow: Protects 8-tile radius\n• Junimo Hut: Harvests 17x17 area\n• Leave paths for movement"
      }
    ]
  },
  {
    title: "Animal Husbandry",
    emoji: "🐄",
    content: "Animals can provide a steady income stream and valuable resources for crafting and bundles. Keep them happy for the best results!",
    subsections: [
      {
        title: "Animal Products 🥚",
        content: "Chickens:\n• Regular Egg → Mayo (190g)\n• Large Egg → Large Mayo (285g)\n• Golden Egg → Gold Mayo (380g)\n\nCows:\n• Milk → Cheese (230g)\n• Large Milk → Gold Cheese (345g)\n\nPigs:\n• Truffles → Truffle Oil (1,065g)"
      },
      {
        title: "Happiness Factors",
        content: "• Pet daily (+5 friendship)\n• Feed daily (grass or hay)\n• Keep heater in winter\n• Let them outside (except rain/winter)\n• Close barn/coop doors at night"
      },
      {
        title: "Building Guide 🏠",
        content: "Starting Setup:\n• Silo first (stores 240 hay)\n• Coop (chickens, easy start)\n• Barn (cows, steady income)\n\nUpgrades Priority:\n• Big Barn (pigs for truffles)\n• Deluxe Coop (auto-feed)\n• Auto-grabber (2,500g at Marnie's)"
      }
    ]
  },
  {
    title: "Crafting Guide",
    emoji: "⚒️",
    content: "Crafting is essential for farm automation, resource processing, and quality of life improvements. Learn what to craft and when!",
    subsections: [
      {
        title: "Essential Crafts",
        content: "Early Game:\n• Chest (50 wood)\n• Scarecrow (50 wood, 20 fiber, 1 coal)\n• Basic Fertilizer (2 sap)\n• Field Snack (1 each: acorn, maple seed, pine cone)\n\nMid Game:\n• Preserve Jars (50 wood, 40 stone, 8 coal)\n• Kegs (30 wood, 1 copper bar, 1 iron bar, 1 oak resin)\n• Quality Sprinklers (1 iron bar, 1 gold bar, 1 refined quartz)"
      },
      {
        title: "Resource Processing 🏭",
        content: "• Furnace: Smelting ores\n• Charcoal Kiln: Wood → Coal\n• Crystalarium: Gem duplication\n• Recycling Machine: Trash → Resources\n• Worm Bin: Produces bait"
      },
      {
        title: "Advanced Projects",
        content: "• Iridium Sprinkler (1 iridium bar, 1 battery pack)\n• Garden Pot (clay, stone, refined quartz)\n• Oil Maker (50 slime, hardwood, gold bar)\n• Warp Totem (hardwood, honey, solar essence)\n• Rain Totem (hardwood, truffle oil, pine tar)"
      }
    ]
  },
  {
    title: "Seasonal Checklists",
    emoji: "📋",
    content: "Stay organized and make the most of each season with these comprehensive checklists!",
    subsections: [
      {
        title: "Spring Tasks 🌸",
        content: "Week 1:\n• Clear farm space\n• Plant parsnips\n• Collect spring onions\n• Meet townspeople\n\nWeek 2:\n• Buy strawberry seeds at festival\n• Start mining\n• Build first scarecrow\n\nWeek 3-4:\n• Upgrade watering can\n• Start fishing\n• Plan summer crops"
      },
      {
        title: "Summer Tasks ☀️",
        content: "Early Summer:\n• Plant blueberries\n• Build quality sprinklers\n• Start bee houses\n\nMid Summer:\n• Mine for gold\n• Start animal buildings\n• Plant wheat for fall\n\nLate Summer:\n• Stock up on hay\n• Save for fall seeds\n• Complete summer bundles"
      },
      {
        title: "Fall/Winter Prep 🍂",
        content: "Fall:\n• Plant cranberries\n• Complete bundles\n• Upgrade tools\n• Stock up resources\n\nWinter Prep:\n• Install heaters\n• Plant winter seeds\n• Plan mine trips\n• Organize storage"
      }
    ]
  },
  {
    title: "Museum Collection",
    emoji: "🏺",
    content: "The Museum needs your help to restore its collection! Donate artifacts and minerals to unlock rewards and help preserve the valley's history.",
    subsections: [
      {
        title: "Finding Artifacts 🔍",
        content: "• Look for worm spots (wiggling sticks)\n• Use hoe in artifact spots\n• Fish treasure chests\n• Break geodes at Clint's\n• Check garbage cans (rare)\n\nHot Spots:\n• Beach (glass and pottery)\n• Mountains (minerals)\n• Railroad (rare items)\n• Farm (prehistoric tools)"
      },
      {
        title: "Mineral Collection 💎",
        content: "Common Sources:\n• Geodes from mines\n• Omni Geodes (most valuable)\n• Mining nodes\n• Fishing chests\n\nTips:\n• Save rare minerals\n• Process geodes in bulk\n• Check Clint's shop\n• Mine on lucky days"
      },
      {
        title: "Museum Rewards 🎁",
        content: "• Rare Seeds\n• Ancient Seeds\n• Stardrop\n• Rusty Key\n• Museum Achievement\n• Mineral/Artifact Troves"
      }
    ]
  },
  {
    title: "Secret Notes",
    emoji: "📝",
    content: "After triggering the winter event, you'll start finding secret notes that reveal hidden information about the valley and its inhabitants.",
    subsections: [
      {
        title: "Finding Notes 🔎",
        content: "Requirements:\n• Winter event completed\n• Magnifying Glass obtained\n\nSources:\n• Foraging\n• Breaking rocks\n• Chopping trees\n• Killing monsters\n• Digging artifact spots"
      },
      {
        title: "Types of Notes",
        content: "• Villager schedules\n• Hidden item locations\n• Character preferences\n• Special recipes\n• Hidden mechanics\n• Puzzle solutions"
      },
      {
        title: "Important Tips 💭",
        content: "• Keep notes organized\n• Screenshot valuable info\n• Check notes before gifting\n• Some reveal rare items\n• Others hint at quests"
      }
    ]
  },
  {
    title: "Hidden Areas",
    emoji: "🗝️",
    content: "Stardew Valley is full of secret locations waiting to be discovered. Each area holds unique rewards and opportunities!",
    subsections: [
      {
        title: "Early Game Areas 🌲",
        content: "Secret Woods:\n• Requires Steel Axe\n• Contains hardwood\n• Special forage items\n• Unique fish\n\nQuarry:\n• Repair bridge (CC reward)\n• Mining nodes respawn\n• Mystic stones possible"
      },
      {
        title: "Mid Game Areas 🏜️",
        content: "Desert:\n• Bus repair needed\n• Skull Cavern access\n• Sandy's shop\n• Casino (requires quest)\n• Rare seeds available"
      },
      {
        title: "Late Game Areas ⭐",
        content: "• Witch's Hut (dark shrine)\n• Mutant Bug Lair (special ring)\n• Summit (endgame area)\n• Ginger Island (1.5 content)\n• Perfection Areas"
      }
    ]
  },
  {
    title: "Special Events & Quests",
    emoji: "✨",
    content: "Beyond the main storyline, Stardew Valley offers many special events and hidden quests that unlock unique rewards and experiences.",
    subsections: [
      {
        title: "Hidden Quests 📜",
        content: "• Mr. Qi Challenges\n• Secret Note missions\n• Witch's quest line\n• Junimo Kart perfection\n• Prairie King completion\n• Missing Bundle (after CC)"
      },
      {
        title: "Special Items 🎭",
        content: "• Golden Scythe (quarry mine)\n• Galaxy Sword (desert secret)\n• Magic Rock Candy\n• Return Scepter\n• Golden Clock\n• Statue of Perfection"
      },
      {
        title: "Achievement Hunting 🏆",
        content: "• Cook all recipes\n• Ship all items\n• Catch all fish\n• Complete museum\n• Max friendship\n• Reach perfection"
      }
    ]
  },
  {
    title: "Cooking Guide",
    emoji: "👨‍🍳",
    content: "Cooking is not just about restoring energy and health - it's also a great way to make friends, complete quests, and gain buffs for different activities!",
    subsections: [
      {
        title: "Getting Started 🍳",
        content: "Requirements:\n• House upgrade (kitchen)\n• Queen of Sauce TV show\n• Friendship recipes\n\nBasic Tips:\n• Watch TV every Sunday & Wednesday\n• Check for reruns\n• Buy recipes from Gus & other shops\n• Gain recipes through friendship"
      },
      {
        title: "Essential Recipes 🥘",
        content: "Energy Foods:\n• Field Snack (foraged seeds)\n• Complete Breakfast (+2 farming)\n• Farmer's Lunch (+3 farming)\n\nMining Foods:\n• Miner's Treat (+3 mining)\n• Spicy Eel (luck + speed)\n• Crab Cakes (speed + defense)\n\nFishing Foods:\n• Fish Stew (+3 fishing)\n• Dish O' The Sea (+3 fishing)\n• Seafoam Pudding (+4 fishing)"
      },
      {
        title: "Gifting & Profits 🎁",
        content: "Best Gift Dishes:\n• Pink Cake (most ladies)\n• Complete Breakfast (most men)\n• Chocolate Cake (widely loved)\n\nProfit Dishes:\n• Triple Shot Espresso\n• Pale Broth\n• Tom Kha Soup\n• Lucky Lunch"
      }
    ]
  }
];

export type { GuideSection }; 