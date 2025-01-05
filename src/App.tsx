/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import { MapView } from './components/MapView';
import { EventsList } from './components/EventsList';
import { events } from './data/events';
import ReactConfetti from 'react-confetti';
import { useConfetti } from './hooks/useConfetti';

export default function App() {
  const { isActive, startConfetti } = useConfetti();

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      {isActive && (
        <ReactConfetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={200}
          recycle={false}
        />
      )}
      
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Web3 Events{' '}
        <span 
          className="cursor-pointer hover:text-blue-600 transition-colors"
          onClick={startConfetti}
        >
          2025
        </span>
      </h1>
      
      {/* Mobile: Events List Only */}
      <div className="block md:hidden">
        <EventsList events={events} />
      </div>

      {/* Desktop: Map and Events List */}
      <div className="hidden md:flex gap-8 h-[calc(100vh-160px)]">
        <div className="flex-grow">
          <MapView events={events} />
        </div>
        <div className="flex-none w-80 overflow-hidden">
          <div className="h-full overflow-y-auto pr-2">
            <EventsList events={events} />
          </div>
        </div>
      </div>
    </div>
  );
}