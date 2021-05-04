import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
  style?: object;
}

export const MyCard = (props: Props) => {
  return <View style={{ ...styles.appCard, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
  appCard: {
    padding: 15,
    shadowColor: '#000',
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 10, // тень для андроида
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
