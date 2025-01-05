import React, { useState } from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Web3Event } from '../types/events';
import { countries } from '../data/countries';
import { countryLocationMap } from '../utils/locationMapping';
import { EventCard } from './EventCard';

interface EventsListProps {
  events: Web3Event[];
}

export const EventsList: React.FC<EventsListProps> = ({ events }) => {
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleCountrySelect = (code: string) => {
    if (code === 'MYSTERY') {
      window.open('https://www.youtube.com/shorts/SXHMnicI6Pg', '_blank');
      return;
    }
    setSelectedCountry(code);
    setIsFilterOpen(false);
  };

  const filteredEvents = events.filter(event => {
    if (selectedCountry === 'ALL') return true;
    if (selectedCountry === 'MYSTERY') return false;
    return countryLocationMap[selectedCountry]?.includes(event.location);
  });

  const sortedEvents = [...filteredEvents].sort((a, b) => 
    new Date(a.start_date).getTime() - new Date(b.start_date).getTime()
  );

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          <h2 className="text-xl font-bold">Upcoming Events</h2>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Filter className="w-5 h-5" />
          </button>
          
          {isFilterOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => handleCountrySelect(country.code)}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg ${
                    selectedCountry === country.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {country.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {sortedEvents.map((event) => (
          <EventCard key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
};