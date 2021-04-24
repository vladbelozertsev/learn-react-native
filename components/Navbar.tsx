import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions, StatusBar } from 'react-native';

interface Props {
  title: string;
}

export const Navbar = (props: Props) => {
  const DEVICE_HEIGHT = Dimensions.get('screen').height;
  const STATUS_BAR = StatusBar.currentHeight || 24;
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  console.log(DEVICE_HEIGHT);
  console.log(STATUS_BAR);
  console.log(WINDOW_HEIGHT);

  return (
    <View style={styles.mainView}>
      <Text>1 </Text>
      <Text>2 </Text>
      <Text>3 </Text>
      <Text>{props.title}</Text>
      <Text style={styles.text}>5 WINDOW_HEIGHT- {WINDOW_HEIGHT}</Text>
      <Text style={styles.text}>6 STATUS_BAR - {STATUS_BAR}</Text>
      <Text style={styles.text}>7 DEVICE_HEIGHT - {DEVICE_HEIGHT} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    backgroundColor: '#3949ab',
    borderColor: 'tomato',
    borderWidth: 2,
    justifyContent: 'center',
    paddingBottom: 25,
    paddingTop: (StatusBar.currentHeight || 24) + 25,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
