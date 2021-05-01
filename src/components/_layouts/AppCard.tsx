import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
  style?: object;
}

export const AppCard = ({ children, style }: Props) => {
  return <View style={{ ...styles.appCard, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  appCard: {
    borderWidth: 2,
    borderColor: 'black',
    borderStyle: 'solid',
    padding: 20,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 8, // тень для андроида
  },
});
