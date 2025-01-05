import React from 'react';
import { Popup } from 'react-map-gl';
import { EventPopupProps } from './types';
import { EventCard } from '../EventCard';

export const EventPopup: React.FC<EventPopupProps> = ({ event, onClose }) => {
  return (
    <Popup
      anchor="top"
      longitude={event.coordinates![1]}
      latitude={event.coordinates![0]}
      onClose={onClose}
      closeButton={true}
      closeOnClick={false}
      className="w-72 [&_.mapboxgl-popup-content]:p-0 [&_.mapboxgl-popup-close-button]:text-white [&_.mapboxgl-popup-close-button]:z-10"
    >
      <EventCard event={event} compact />
    </Popup>
  );
};