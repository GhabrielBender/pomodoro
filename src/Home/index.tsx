import { View, Text, Image } from 'react-native';
import React from 'react';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

export default function styles() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}
    >
      <Image
        style={{ alignSelf: 'center', marginTop: '25%' }}
        source={require('../../assets/logo.png')}
      />
      <View
        style={{
          alignItems: 'center',
          marginTop: '5%',
        }}
      >
        <Text
          style={{
            fontFamily: 'OpenSans_400Regular',
            fontSize: 36,
            marginRight: '30%',
            color: '#FFB5A7',
          }}
        >
          Time
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans_400Regular',
            fontSize: 48,
            color: '#FFB5A7',
          }}
        >
          Waves
        </Text>
        <Text
          style={{
            fontFamily: 'OpenSans_400Regular',
            fontSize: 18,
            marginLeft: '5%',
            color: '#FFB5A7',
          }}
        >
          Método pomodoro
        </Text>
      </View>
    </View>
  );
}
