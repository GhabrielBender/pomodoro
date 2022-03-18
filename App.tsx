import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/focus';
import { PomodorosProvider } from './src/contexts/PomodorosContext';

export default function App() {
  return (
    <PomodorosProvider>
      <NavigationContainer>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </NavigationContainer>
    </PomodorosProvider>
  );
}
