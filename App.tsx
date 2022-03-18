import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/focus';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </NavigationContainer>
  );
}
