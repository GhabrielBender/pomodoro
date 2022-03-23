import { View, Text } from 'react-native';
import React, { useContext } from 'react';
import { BlurView } from 'expo-blur';
import { PomodorosContext } from './contexts/PomodorosContext';

export default function TimeIsOver() {
  const { modalOpen, setModalOpen } = useContext(PomodorosContext);
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
          backgroundColor: '#FCD5CE',
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
          onPress={() => setModalOpen(!modalOpen)}
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
