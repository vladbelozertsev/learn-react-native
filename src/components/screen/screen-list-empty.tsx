import Fontisto from 'react-native-vector-icons/Fontisto';
import React, { FC } from 'react';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';

export const ScreenListEmpty: FC = () => {
  return (
    <View style={styles.rootView}>
      <MyText $t="Nothing found" $h="18" $upper />
      <Fontisto style={styles.boxIcon} name="dropbox" />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignItems: 'center',
    backgroundColor: '#F0F1F5',
    flex: 1,
    justifyContent: 'center',
    opacity: 0.5,
  },
  boxIcon: {
    color: CLR_APP,
    fontSize: '72@ms',
    marginTop: '10@vs',
  },
});
