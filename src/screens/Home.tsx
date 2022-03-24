import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-native';

export function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/pomodoro');
    }, 5000);
  }, [navigate]);

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
            fontSize: 36,
            marginRight: '30%',
            color: '#FFB5A7',
          }}
        >
          Time
        </Text>
        <Text
          style={{
            fontSize: 48,
            color: '#FFB5A7',
          }}
        >
          Waves
        </Text>
        <Text
          style={{
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
