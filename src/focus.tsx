import { View, Text } from 'react-native';
import React, { useContext, useEffect } from 'react';
import { PomodorosContext } from './contexts/PomodorosContext';

export default function Focus() {
  const { minutes, seconds, selectQuantity } = useContext(PomodorosContext);

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
        {minutes}:{seconds}
      </Text>
    </View>
  );
}
