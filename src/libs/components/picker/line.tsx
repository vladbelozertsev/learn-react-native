import React from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';

export const Line = () => {
  return <View style={styles.lineView} />;
};

const styles = ScaledSheet.create({
  lineView: {
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
});
