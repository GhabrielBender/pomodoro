import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { BlurView } from 'expo-blur';
import { PomodorosContext } from '../contexts/PomodorosContext';

export function TimeIsOver() {
  const { closeModal, currentType } = useContext(PomodorosContext);
  return (
    <BlurView
      intensity={80}
      tint="light"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 10,
      }}
    >
      <View
        style={{
          backgroundColor: currentType === 'focus' ? '#FCD5CE' : '#FEC89A',
          width: 300,
          height: 170,
          zIndex: 20,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'space-around',
          borderRadius: 15,
          position: 'absolute',
          top: '45%',
          bottom: '55%',
        }}
      >
        <Text style={{ color: '#FFF', fontSize: 28 }}>O tempo acabou!</Text>
        <Text
          onPress={closeModal}
          style={{
            color: '#FFF',
            fontSize: 18,
            justifyContent: 'flex-end',
            marginLeft: 200,
          }}
        >
          OK
        </Text>
      </View>
    </BlurView>
  );
}
