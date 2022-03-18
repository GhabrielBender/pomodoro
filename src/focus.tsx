import { View, Text } from 'react-native';
import React from 'react';

export default function focus() {
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
    </View>
  );
}
