import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import { PomodorosContext } from '../contexts/PomodorosContext';
import { TimeIsOver } from '../components';

export function Pomodoro() {
  const {
    currentType,
    isRunning,
    minutes,
    seconds,
    showModal,
    pauseTimer,
    startTimer,
  } = useContext(PomodorosContext);

  const parsedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  return (
    <View style={{ backgroundColor: '#FFF8F6', height: '100%' }}>
      <Text
        style={{
          fontSize: 38,
          color: currentType === 'focus' ? '#FFB5A7' : '#FEC89A',
          alignSelf: 'center',
          marginTop: 60,
        }}
      >
        {currentType === 'focus' ? 'Foco' : 'Descanso'}
      </Text>
      {showModal ? <TimeIsOver /> : null}
      <View
        style={{
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: Dimensions.get('window').width * 0.8,
          height: Dimensions.get('window').width * 0.8,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 40,
          borderWidth: 5,
          backgroundColor: currentType === 'focus' ? '#FCD4CE' : '#FFF',
          borderColor: currentType === 'focus' ? '#FFB5A7' : '#FAC89A',
        }}
      >
        <Text
          style={{
            fontSize: 60,
            zIndex: 10,
            color: currentType === 'focus' ? '#FFF' : '#FEC89A',
            fontWeight: '900',
          }}
        >
          {parsedTime}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          alignSelf: 'center',
          marginTop: 'auto',
          marginBottom: 180,
          borderRadius: 999,
          backgroundColor: currentType === 'focus' ? '#FFB5A7' : '#FAC89A',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => (isRunning ? pauseTimer() : startTimer())}
      >
        {isRunning ? (
          <Image
            style={{ alignSelf: 'center' }}
            source={require('../../assets/pause.png')}
          />
        ) : (
          <Image
            style={{ alignSelf: 'center' }}
            source={require('../../assets/play.png')}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
