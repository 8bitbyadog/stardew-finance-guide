import { type Crop } from '../data/seasons';
import { CurrencyDollarIcon, ClockIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

interface CropCardProps {
  crop: Crop;
}

export default function CropCard({ crop }: CropCardProps) {
  const calculateProfitPerCrop = () => {
    const minProfit = (crop.basePrice * crop.minYield) - crop.seedPrice;
    const maxProfit = (crop.basePrice * crop.maxYield) - crop.seedPrice;
    return { minProfit, maxProfit };
  };

  const calculateDaysToProfit = () => {
    const { minProfit } = calculateProfitPerCrop();
    return Math.ceil(crop.seedPrice / (minProfit / crop.growthTime));
  };

  const calculateProfitPerDay = () => {
    const { minProfit, maxProfit } = calculateProfitPerCrop();
    const minProfitPerDay = minProfit / crop.growthTime;
    const maxProfitPerDay = maxProfit / crop.growthTime;
    return { minProfitPerDay, maxProfitPerDay };
  };

  const { minProfit, maxProfit } = calculateProfitPerCrop();
  const { minProfitPerDay, maxProfitPerDay } = calculateProfitPerDay();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{crop.name}</h3>
        
        <p className="mt-2 text-gray-600">{crop.description}</p>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Seed Price</div>
              <div className="font-medium">{crop.seedPrice}g</div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <ClockIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Growth Time</div>
              <div className="font-medium">{crop.growthTime} days</div>
            </div>
          </div>

          {crop.regrowth && (
            <div className="flex items-center space-x-2">
              <ArrowPathIcon className="h-5 w-5 text-gray-400" />
              <div>
                <div className="text-sm text-gray-500">Regrowth Time</div>
                <div className="font-medium">{crop.regrowth} days</div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h4 className="font-medium text-blue-900 mb-3">Profit Analysis</h4>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Base Price:</span>
              <span className="font-medium text-blue-900">{crop.basePrice}g</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Yield:</span>
              <span className="font-medium text-blue-900">{crop.minYield}-{crop.maxYield}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Profit per Crop:</span>
              <span className="font-medium text-blue-900">{minProfit}-{maxProfit}g</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Profit per Day:</span>
              <span className="font-medium text-blue-900">{minProfitPerDay.toFixed(1)}-{maxProfitPerDay.toFixed(1)}g</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-blue-700">Days to Profit:</span>
              <span className="font-medium text-blue-900">{calculateDaysToProfit()} days</span>
            </div>
          </div>
        </div>

        {crop.profitTips && crop.profitTips.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Profit Tips</h4>
            <ul className="mt-2 space-y-2">
              {crop.profitTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500" />
                  <span className="ml-2 text-sm text-gray-600">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 