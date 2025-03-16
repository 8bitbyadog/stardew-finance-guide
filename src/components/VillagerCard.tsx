import { type Villager, type Gift } from '../data/villagers';
import { HeartIcon, MapPinIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

interface VillagerCardProps {
  villager: Villager;
}

const GiftList = ({ gifts, type }: { gifts: Gift[], type: 'love' | 'like' | 'dislike' | 'hate' }) => {
  const getTypeColor = () => {
    switch (type) {
      case 'love':
        return 'text-pink-600 bg-pink-50';
      case 'like':
        return 'text-green-600 bg-green-50';
      case 'dislike':
        return 'text-orange-600 bg-orange-50';
      case 'hate':
        return 'text-red-600 bg-red-50';
    }
  };

  return (
    <div className="mt-2">
      <h4 className="font-medium text-gray-700 capitalize">{type}s:</h4>
      <ul className="mt-1 space-y-1">
        {gifts.map((gift, index) => (
          <li key={index} className={`text-sm rounded-md px-2 py-1 ${getTypeColor()}`}>
            {gift.name}
            {gift.description && (
              <span className="block text-xs opacity-75">{gift.description}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function VillagerCard({ villager }: VillagerCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{villager.name}</h3>
            <div className="mt-1 flex items-center space-x-2">
              <CalendarIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">
                {villager.birthday.season} {villager.birthday.day}
              </span>
            </div>
          </div>
          {villager.marriageable && (
            <div className="flex items-center space-x-1 px-2 py-1 bg-red-50 rounded-full">
              <HeartIcon className="h-4 w-4 text-red-500" />
              <span className="text-xs text-red-600">Marriageable</span>
            </div>
          )}
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-start space-x-2">
            <MapPinIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{villager.address}</span>
          </div>
          <div className="flex items-start space-x-2">
            <UserIcon className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{villager.personality}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="font-medium text-gray-900">Schedule</h4>
          <p className="mt-1 text-sm text-gray-600">{villager.schedule}</p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <h4 className="font-medium text-gray-900">Gift Preferences</h4>
          <div className="space-y-4">
            <GiftList gifts={villager.gifts.love} type="love" />
            <GiftList gifts={villager.gifts.like} type="like" />
            <GiftList gifts={villager.gifts.dislike} type="dislike" />
            <GiftList gifts={villager.gifts.hate} type="hate" />
          </div>
        </div>
      </div>
    </div>
  );
} 