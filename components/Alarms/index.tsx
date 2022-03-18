import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Alarms() {
  const teste = [
    { hora: '12:50', mensagem: 'Acorda ai' },
    // { hora: '12:50', mensagem: 'Acorda ai' },
    // { hora: '12:50', mensagem: 'Acorda ai' },
    // { hora: '12:50', mensagem: 'Acorda ai' },
  ];

  return (
    <View>
      {teste.map((t) => (
        <>
          <Image
            style={{ width: 30, height: 30 }}
            source={require('../../assets/cock.png')}
          />
          <Text>{t.hora}</Text>
          <Text>{t.mensagem}</Text>
        </>
      ))}
    </View>
  );
}
