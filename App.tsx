import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeRouter, Route, Routes } from 'react-router-native';

import { PomodorosProvider } from './src/contexts/PomodorosContext';
import { Pomodoro, Home } from './src/screens';

export default function App() {
  return (
    <PomodorosProvider>
      <NativeRouter>
        <SafeAreaView>
          <Routes>
            <Route path="/pomodoro" element={<Pomodoro />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </SafeAreaView>
      </NativeRouter>
    </PomodorosProvider>
  );
}
