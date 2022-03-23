import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeRouter, Route, Routes } from 'react-router-native';

import React from 'react';
import Home from './src/Home';
import { PomodorosProvider } from './src/contexts/PomodorosContext';
import Stop from './src/Stop';
import Focus from './src/Focus';
import NumberPomodoros from './src/NumberPomodoros';

export default function App() {
  return (
    <PomodorosProvider>
      <NativeRouter>
        <SafeAreaView>
          <Routes>
            <Route path="/stop" element={<Stop />} />
            <Route path="/focus" element={<Focus />} />
            <Route path="/pomodoro" element={<NumberPomodoros />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </SafeAreaView>
      </NativeRouter>
    </PomodorosProvider>
  );
}
