import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { ToastConfigParams } from 'react-native-toast-message';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ToastConfigParams<any>;

export const MySuccessToast: FC<Props> = props => {
  const { top } = useSafeAreaInsets();
  const { text1, text2 } = props;

  return (
    <View style={[styles.rootView, { top }]}>
      {text1 && <MyText $v={text1} $fs="16" $f1 $bold />}
      {text2 && <MyText $v={text2} $fs="16" $f1 />}
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    top: 0,
    backgroundColor: '#FFF',
    borderLeftColor: '#5BB370',
    borderLeftWidth: '5@ms',
    borderRadius: '7@ms',
    elevation: 5,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: '20@ms',
    paddingHorizontal: '10@ms',
    paddingVertical: '15@vs',
    shadowColor: '#242424',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    width: '85%',
    zIndex: 999,
  },
});
