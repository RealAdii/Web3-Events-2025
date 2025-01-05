import { Web3Event } from '../../types/events';

export interface MapViewProps {
  events: Web3Event[];
}

export interface EventMarkerProps {
  event: Web3Event;
  onClick: () => void;
}

export interface EventPopupProps {
  event: Web3Event;
  onClose: () => void;
}