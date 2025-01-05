import { useState, useCallback } from 'react';

export const useConfetti = () => {
  const [isActive, setIsActive] = useState(false);

  const startConfetti = useCallback(() => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 5000); // Stop after 5 seconds
  }, []);

  return { isActive, startConfetti };
};