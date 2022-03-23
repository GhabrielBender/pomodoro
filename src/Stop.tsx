import {
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { PomodorosContext } from './contexts/PomodorosContext';

export default function Stop() {
  const { minutes, seconds, pauseTimer, startTimer } =    useContext(PomodorosContext);

  // Só fiz isso pra testar
  // useEffect(() => {
  //   selectQuantity(2);
  // }, []);
  return (
    <View style={{ backgroundColor: '#FFF8F6', height: '100%' }}>
      <Text
        style={{
          fontSize: 38,
          color: '#FEC89A',
          alignSelf: 'center',
          marginTop: 60,
        }}
      >
        Descanso
      </Text>
      <TouchableHighlight
        style={{
          borderRadius:
            Math.round(
              Dimensions.get('window').width + Dimensions.get('window').height,
            ) / 2,
          width: Dimensions.get('window').width * 0.8,
          height: Dimensions.get('window').width * 0.8,
          backgroundColor: '#FEC89A',
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
      <View style={{ alignItems: 'center', marginTop: 50 }}>
        <TouchableOpacity onPress={startTimer}>
          <Image source={require('../assets/botaPlay.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={pauseTimer}>
          <Image source={require('../assets/botaPause.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
