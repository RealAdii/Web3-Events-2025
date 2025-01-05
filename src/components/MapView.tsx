import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Web3Event } from '../types/events';
import { EventCard } from './EventCard';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapViewProps {
  events: Web3Event[];
}

export const MapView: React.FC<MapViewProps> = ({ events }) => {
  return (
    <MapContainer
      center={[20, 0]}
      zoom={2}
      className="w-full h-full rounded-lg"
      style={{ height: '100%', minHeight: '600px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {events.map((event) => (
        event.coordinates && (
          <Marker
            key={event.name}
            position={event.coordinates}
          >
            <Popup 
              className="w-72 [&>.leaflet-popup-content-wrapper]:p-0 [&>.leaflet-popup-content]:m-0 [&>.leaflet-popup-content]:w-72"
            >
              <EventCard event={event} compact />
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};