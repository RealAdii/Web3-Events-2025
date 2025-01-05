import React from 'react';
import { MapPin } from 'lucide-react';
import { CountryFilterProps } from './types';

const countries = [
  { name: 'All Countries', code: 'ALL' },
  { name: 'United States', code: 'US' },
  { name: 'Japan', code: 'JP' },
  { name: 'Singapore', code: 'SG' },
  { name: 'Portugal', code: 'PT' }
];

export const CountryFilter: React.FC<CountryFilterProps> = ({ selectedCountry, onCountryChange }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <MapPin className="w-4 h-4" />
        <span className="text-sm font-medium">Filter by Country</span>
      </div>
      <select
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="w-full p-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};