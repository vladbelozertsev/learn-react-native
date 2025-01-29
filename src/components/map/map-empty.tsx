import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { FC } from 'react';
import { MyText } from 'src/components/my-text';
import { View } from 'react-native';
import { ScaledSheet, ms } from 'react-native-size-matters';

export const MapEmpty: FC = () => {
  return (
    <View style={styles.rootView}>
      <Ionicons name="earth-outline" size={ms(72)} color={CLR_APP} />
      <MyText $t="Nothing found" $fs="18" />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
