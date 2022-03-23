/* eslint-disable */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer';

interface PomodorosContextData {
  selectQuantity: (selectedQuantity: number) => void;
  pauseTimer: () => void;
  startTimer: () => void;
  hasCompletedCycle: boolean;
  minutes: number;
  seconds: number;
  modalOpen: boolean;
  setModalOpen: (active: boolean) => void;
}

interface PomodorosProviderProps {
  children: ReactNode;
}

export const PomodorosContext = createContext({} as PomodorosContextData);

const ROUNDS_TIMES = {
  focus: 25 * 60,
  rest: 5 * 60,
  longRest: 15 * 60,
};

export const PomodorosProvider = ({ children }: PomodorosProviderProps) => {
  const { isRunning, hasFinished, minutes, seconds, startTimer, pauseTimer, restartTimer } =
    useTimer({ initialTime: ROUNDS_TIMES.focus });

  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [completedRounds, setCompletedRounds] = useState(0);
  const [currentType, setCurrentType] = useState<keyof typeof ROUNDS_TIMES>('focus');
  const [hasCompletedCycle, setHasCompletedCycle] = useState(false);

  const selectQuantity = (selectedQuantity: number) => {
    setQuantity(selectedQuantity);
    startTimer();
  };

  useEffect(() => {
    if (!hasFinished || isRunning) return;

    if (currentType === 'focus') {
      setCompletedRounds((count) => count + 1);
    }

    if (currentType === 'rest' || currentType === 'longRest') {
      restartTimer(ROUNDS_TIMES.focus);
      setCurrentType('focus');
    }
  }, [hasFinished]);

  useEffect(() => {
    if (completedRounds >= quantity) {
      setHasCompletedCycle(true);
    } else {
      const shouldBeLongRest = completedRounds % 4 === 0;
      const newTime = shouldBeLongRest ? ROUNDS_TIMES.longRest : ROUNDS_TIMES.rest;

      restartTimer(newTime);
      setCurrentType(shouldBeLongRest ? 'longRest' : 'rest');
    }
  }, [completedRounds]);

  return (
    <PomodorosContext.Provider
      value={{
        selectQuantity,
        pauseTimer,
        startTimer,
        hasCompletedCycle,
        minutes,
        seconds,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </PomodorosContext.Provider>
  );
};
