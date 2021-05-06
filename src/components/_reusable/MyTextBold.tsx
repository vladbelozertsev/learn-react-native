import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

interface Props {
  style?: object;
  children: React.ReactNode;
}

export const MyTextBold = (props: Props) => {
  return (
    <View>
      <Text style={{ ...styles.myText, ...props.style }}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  myText: {
    fontFamily: 'ComicNeue-Bold',
  },
});
