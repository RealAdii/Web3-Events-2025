import React from 'react';
import { MapPin } from 'lucide-react';

const countries = [
  { name: 'All Countries', code: 'ALL' },
  { name: 'United States', code: 'US' },
  { name: 'Japan', code: 'JP' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Portugal', code: 'PT' }
];

interface CountrySelectorProps {
  selectedCountry: string;
  onCountrySelect: (country: string) => void;
}

export const CountrySelector: React.FC<CountrySelectorProps> = ({
  selectedCountry,
  onCountrySelect
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-64">
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <MapPin className="mr-2" />
        Countries
      </h2>
      <div className="space-y-2">
        {countries.map((country) => (
          <button
            key={country.code}
            onClick={() => onCountrySelect(country.code)}
            className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
              selectedCountry === country.code
                ? 'bg-blue-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
};