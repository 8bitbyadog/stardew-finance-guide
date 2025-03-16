import { useGameStore } from '../store/gameStore';

type Season = 'Spring' | 'Summer' | 'Fall' | 'Winter';

export default function Home() {
  const { year, season, day, money, setGameTime } = useGameStore();

  const seasons: Season[] = ['Spring', 'Summer', 'Fall', 'Winter'];

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Stardew Valley Finance Guide</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Game Time</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Year</label>
            <input
              type="number"
              id="year"
              min="1"
              value={year}
              onChange={(e) => setGameTime(parseInt(e.target.value), season, day)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="season" className="block text-sm font-medium text-gray-700">Season</label>
            <select
              id="season"
              value={season}
              onChange={(e) => setGameTime(year, e.target.value as Season, day)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              {seasons.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="day" className="block text-sm font-medium text-gray-700">Day</label>
            <input
              type="number"
              id="day"
              min="1"
              max="28"
              value={day}
              onChange={(e) => setGameTime(year, season, parseInt(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="p-4 bg-blue-50 rounded-md">
            <h3 className="text-lg font-medium text-blue-800">Current Game Time</h3>
            <p className="mt-2 text-blue-600">
              Year {year}, {season} {day}
            </p>
          </div>
          
          <div className="p-4 bg-green-50 rounded-md">
            <h3 className="text-lg font-medium text-green-800">Current Money</h3>
            <p className="mt-2 text-green-600">
              {money}g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 