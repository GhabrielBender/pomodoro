/* eslint-disable */
import React, { useEffect, useState } from 'react';

interface TimerReturn {
  isRunning: boolean;
  hasFinished: boolean;
  minutes: number;
  seconds: number;
  startTimer: () => void;
  pauseTimer: () => void;
  restartTimer: (newTime: number) => void;
}

interface TimerProps {
  initialTime: number;
}

let timer: NodeJS.Timeout;

export const useTimer = ({ initialTime }: TimerProps): TimerReturn => {
  const [time, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const finishTimer = () => {
    setHasFinished(true);
    setIsRunning(false);
  };

  const restartTimer = (newTime: number) => {
    clearTimeout(timer);
    setIsRunning(false);
    setTime(newTime);

    setTimeout(() => {
      startTimer();
    }, 5000);
  };

  useEffect(() => {
    if (isRunning && time > 0) {
      timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isRunning && time === 0) finishTimer();
  }, [isRunning, time]);

  return {
    hasFinished,
    isRunning,
    minutes,
    seconds,
    startTimer,
    pauseTimer,
    restartTimer,
  };
};
