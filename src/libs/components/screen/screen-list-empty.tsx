import Fontisto from 'react-native-vector-icons/Fontisto';
import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';

type Props = {
  $dontShowLEC?: boolean;
  $loading?: boolean;
};

export const ScreenListEmpty: FC<Props> = props => {
  const { $dontShowLEC, $loading } = props;

  if ($dontShowLEC || $loading) return null;

  return (
    <View style={styles.rootView}>
      <MyText $t="Nothing found" $upper $h="18" />
      <Fontisto style={styles.boxIcon} name="dropbox" />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignItems: 'center',
    backgroundColor: '#FFF',
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
