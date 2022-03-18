import { View, Text } from 'react-native';
import React from 'react';

export default function numberPomodoros() {
  return (
    <View
      style={{
        backgroundColor:
          'linear-gradient(180.03deg, #FFF8F6 50%, rgba(254, 200, 154, 0.2) 99.97%);',
        height: '100%',
      }}
    >
      <Text
        style={{
          color: '#FFB5A7',
          fontSize: 25,
          alignSelf: 'center',
          width: '70%',
          marginTop: '35%',
        }}
      >
        Selecione a quantidade de pomodoros desejada
      </Text>
      <Text
        style={{
          color: '#FEC89A',
          fontSize: 15,
          width: '75%',
          alignSelf: 'center',
          textAlign: 'center',
          marginTop: 20,
        }}
      >
        Cada pomodoro equivale a 25 min de foco e 5 minutos de intervalo
      </Text>
    </View>
  );
}
