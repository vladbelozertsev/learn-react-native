import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions, StatusBar } from 'react-native';
import { MyText } from '../_reusable/MyText';
import { MyTextBold } from '../_reusable/MyTextBold';

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
    <View style={styles.navbar}>
      <Text style={styles.header}>{props.title}</Text>
      <Text style={styles.text}>5 WINDOW_HEIGHT- {WINDOW_HEIGHT}</Text>
      <Text style={styles.text}>6 STATUS_BAR - {STATUS_BAR}</Text>
      <Text style={styles.text}>7 DEVICE_HEIGHT - {DEVICE_HEIGHT} </Text>
      <MyText style={styles.text}> my text component </MyText>
      <MyTextBold style={styles.text}>my text component 2</MyTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    alignItems: 'center',
    backgroundColor: '#80b0e8',
    justifyContent: 'center',
    paddingBottom: 10,
    paddingTop: (StatusBar.currentHeight || 24) + 10,
  },
  header: {
    fontSize: 22,
    color: 'tomato',
  },
  text: {
    color: '#fff',
    fontSize: 14,
  },
});
