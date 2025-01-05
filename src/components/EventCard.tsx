import React from 'react';
import { format } from 'date-fns';
import { ExternalLink } from 'lucide-react';
import { Web3Event } from '../types/events';

interface EventCardProps {
  event: Web3Event;
  compact?: boolean;
}

export const EventCard: React.FC<EventCardProps> = ({ event, compact = false }) => {
  return (
    <div className={`relative ${compact ? 'h-32' : 'h-48'} rounded-lg overflow-hidden group cursor-pointer`}>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-end text-white">
        <div className="transform group-hover:translate-y-0 translate-y-2 transition-transform">
          <h3 className={`font-bold ${compact ? 'text-lg' : 'text-xl'} mb-1`}>{event.name}</h3>
          <p className="text-gray-200 text-sm mb-2">{event.location}</p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-300">
              {format(new Date(event.start_date), 'MMM d')} -{' '}
              {format(new Date(event.end_date), 'MMM d, yyyy')}
            </div>
            {event.website && (
              <a
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white text-sm px-3 py-1 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                onClick={(e) => e.stopPropagation()}
              >
                Visit <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};