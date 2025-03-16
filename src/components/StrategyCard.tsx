import { type Strategy } from '../data/strategies';
import { CurrencyDollarIcon, ClockIcon, ChartBarIcon, CalendarIcon } from '@heroicons/react/24/outline';

const getRiskColor = (risk: Strategy['riskLevel']) => {
  switch (risk) {
    case 'Low':
      return 'text-green-600 bg-green-50';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-50';
    case 'High':
      return 'text-red-600 bg-red-50';
  }
};

interface StrategyCardProps {
  strategy: Strategy;
}

export default function StrategyCard({ strategy }: StrategyCardProps) {
  const riskColorClass = getRiskColor(strategy.riskLevel);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{strategy.title}</h3>
            <span className="inline-block mt-1 px-2 py-1 text-sm rounded-full bg-blue-50 text-blue-600">
              {strategy.category}
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-sm font-medium ${riskColorClass}`}>
            {strategy.riskLevel} Risk
          </span>
        </div>

        <p className="mt-4 text-gray-600">{strategy.description}</p>

        <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
          <h4 className="font-medium text-indigo-800">Financial Concept</h4>
          <p className="mt-1 text-indigo-600">{strategy.financialConcept}</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Investment</div>
              <div className="font-medium">{strategy.initialInvestment}g</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ChartBarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Potential Return</div>
              <div className="font-medium">{strategy.potentialReturn}g</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Time to Return</div>
              <div className="font-medium">{strategy.timeToReturn}</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Season</div>
              <div className="font-medium">{strategy.season}</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-medium text-gray-900">Tips</h4>
          <ul className="mt-2 space-y-2">
            {strategy.tips.map((tip, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                <span className="ml-2 text-gray-600">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
} 