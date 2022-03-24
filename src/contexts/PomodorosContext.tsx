/* eslint-disable */
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { useTimer } from '../hooks/useTimer';

const ROUNDS_TIMES = {
  focus: 25 * 60,
  rest: 5 * 60,
  longRest: 15 * 60,
};

interface PomodorosContextData {
  isRunning: boolean;
  pauseTimer: () => void;
  startTimer: () => void;
  minutes: number;
  seconds: number;
  currentType: keyof typeof ROUNDS_TIMES;
  showModal: boolean;
  closeModal: () => void;
}

interface PomodorosProviderProps {
  children: ReactNode;
}

export const PomodorosContext = createContext({} as PomodorosContextData);

export const PomodorosProvider = ({ children }: PomodorosProviderProps) => {
  const {
    isRunning,
    hasFinished,
    minutes,
    seconds,
    startTimer,
    pauseTimer,
    restartTimer,
  } = useTimer({ initialTime: ROUNDS_TIMES.focus });

  const [showModal, setShowModal] = useState(false);
  const [completedRounds, setCompletedRounds] = useState(0);
  const [currentType, setCurrentType] =
    useState<keyof typeof ROUNDS_TIMES>('focus');

  const closeModal = () => {
    if (currentType === 'rest' || currentType === 'longRest') {
      restartTimer(ROUNDS_TIMES.focus);
      setCurrentType('focus');
      return setShowModal(false);
    }

    const shouldBeLongRest = completedRounds % 4 === 0;
    const newTime = shouldBeLongRest
      ? ROUNDS_TIMES.longRest
      : ROUNDS_TIMES.rest;

    restartTimer(newTime);
    setCurrentType(shouldBeLongRest ? 'longRest' : 'rest');

    setShowModal(false);
  };

  useEffect(() => {
    if (!hasFinished || isRunning) return;

    if (currentType === 'focus') {
      setCompletedRounds((count) => count + 1);
    }

    setShowModal(true);
  }, [hasFinished]);

  return (
    <PomodorosContext.Provider
      value={{
        isRunning,
        pauseTimer,
        startTimer,
        minutes,
        seconds,
        currentType,
        showModal,
        closeModal,
      }}
    >
      {children}
    </PomodorosContext.Provider>
  );
};
