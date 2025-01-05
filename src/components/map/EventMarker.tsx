import React from 'react';
import { Marker } from 'react-map-gl';
import { Pin } from './Pin';
import { EventMarkerProps } from './types';

export const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick }) => {
  return (
    <Marker
      longitude={event.coordinates![1]}
      latitude={event.coordinates![0]}
      anchor="bottom"
      onClick={(e) => {
        e.originalEvent.stopPropagation();
        onClick();
      }}
    >
      <Pin />
    </Marker>
  );
};