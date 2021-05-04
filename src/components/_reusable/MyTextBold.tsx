import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface Props {
  style?: object;
  children: React.ReactNode;
}

export const MyTextBold = (props: Props) => {
  return <Text style={{ ...styles.myText, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  myText: {
    fontFamily: 'ComicNeue-Bold',
  },
});
