import { type Activity } from '../data/seasons';
import { CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{activity.name}</h3>
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${activity.type === 'Foraging' ? 'bg-green-100 text-green-800' :
              activity.type === 'Mining' ? 'bg-gray-100 text-gray-800' :
              activity.type === 'Social' ? 'bg-purple-100 text-purple-800' :
              activity.type === 'Festival' ? 'bg-yellow-100 text-yellow-800' :
              'bg-blue-100 text-blue-800'
            }`}>
            {activity.type}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600">{activity.description}</p>

        {activity.profitPotential && (
          <div className="mt-4 flex items-center space-x-2">
            <CurrencyDollarIcon className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-sm text-gray-500">Profit Potential</div>
              <div className="font-medium">{activity.profitPotential}</div>
            </div>
          </div>
        )}
        
        {activity.requirements && activity.requirements.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Requirements</h4>
            <ul className="mt-2 space-y-2">
              {activity.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="ml-2 text-sm text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activity.tips && activity.tips.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-gray-900">Tips</h4>
            <ul className="mt-2 space-y-2">
              {activity.tips.map((tip, index) => (
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