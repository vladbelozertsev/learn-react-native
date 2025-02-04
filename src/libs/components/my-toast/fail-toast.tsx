import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { ToastConfigParams } from 'react-native-toast-message';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ToastConfigParams<any>;

export const FailToast: FC<Props> = props => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.rootView, { top }]}>
      <MyText $v={props.text1} $fs="16" $c="#FFF" $bold $center />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignItems: 'center',
    backgroundColor: '#F00',
    borderRadius: '7@ms',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '20@ms',
    maxWidth: '90%',
    paddingHorizontal: '10@ms',
    paddingVertical: '10@vs',
  },
});
