import { View, Text } from 'react-native';
import React from 'react';
import ScrollPicker from 'react-native-wheel-scrollview-picker';

export default function numberPomodoros() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <View
      style={{
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
      <ScrollPicker
        dataSource={['1', '2', '3', '4', '5', '6']}
        selectedIndex={4}
        renderItem={(data, index) => <Text>{data}</Text>}
        onValueChange={(data, selectedIndex) => {}}
        wrapperHeight={180}
        wrapperWidth={150}
        wrapperColor="#FFFFFF"
        itemHeight={30}
        highlightColor="#d8d8d8"
        highlightBorderWidth={2}
      />
    </View>
  );
}
