import { View, Text, Dimensions, TouchableHighlight } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { PomodorosContext } from './contexts/PomodorosContext';
import TimeIsOver from './TimeIsOver';

export default function Focus() {
  const { minutes, seconds, selectQuantity, modalOpen } =    useContext(PomodorosContext);
  // Só fiz isso pra testar
  useEffect(() => {
    selectQuantity(2);
  }, []);

  return (
    <View style={{ backgroundColor: '#FFF8F6', height: '100%' }}>
      <Text
        style={{
          fontSize: 38,
          color: '#FFB5A7',
          alignSelf: 'center',
          marginTop: 60,
        }}
      >
        Foco
      </Text>
      {modalOpen === false ? <TimeIsOver /> : <View />}
      <TouchableHighlight
        style={{
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: Dimensions.get('window').width * 0.8,
          height: Dimensions.get('window').width * 0.8,
          backgroundColor: '#FFB5A7',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: 40,
        }}
      >
        <Text
          style={{
            fontSize: 60,
            zIndex: 10,
            color: '#FFF',
            fontWeight: '900',
          }}
        >
          {minutes}:{seconds}
        </Text>
      </TouchableHighlight>
    </View>
  );
}
