import React, { useState } from 'react';
import Map from 'react-map-gl';
import { Web3Event } from '../../types/events';
import { MAPBOX_CONFIG } from '../../config/mapbox';
import { EventMarker } from './EventMarker';
import { EventPopup } from './EventPopup';
import { MapViewProps } from './types';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapView: React.FC<MapViewProps> = ({ events }) => {
  const [popupInfo, setPopupInfo] = useState<Web3Event | null>(null);

  return (
    <Map
      initialViewState={MAPBOX_CONFIG.defaultCenter}
      style={{ width: '100%', height: '100%', minHeight: '600px' }}
      mapStyle={MAPBOX_CONFIG.styles.streets} // Changed to streets style for better visibility
      mapboxAccessToken={MAPBOX_CONFIG.accessToken}
      reuseMaps
    >
      {events.map((event) => (
        event.coordinates && (
          <EventMarker 
            key={event.name}
            event={event}
            onClick={() => setPopupInfo(event)}
          />
        )
      ))}

      {popupInfo && (
        <EventPopup 
          event={popupInfo}
          onClose={() => setPopupInfo(null)}
        />
      )}
    </Map>
  );
};