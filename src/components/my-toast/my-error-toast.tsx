import React, { FC } from 'react';
import { ErrorToast, ToastConfigParams } from 'react-native-toast-message';
import { ScaledSheet } from 'react-native-size-matters';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ToastConfigParams<any>;

export const MyErrorToast: FC<Props> = props => {
  const { top } = useSafeAreaInsets();

  return (
    <ErrorToast
      {...props}
      text1NumberOfLines={3}
      style={[styles.errorToast, { top }]}
      text1Style={styles.errorToastText1}
      contentContainerStyle={[styles.errorToastContainer]}
    />
  );
};

const styles = ScaledSheet.create({
  errorToast: {
    borderLeftColor: '#E85664',
    maxWidth: '80%',
  },
  errorToastContainer: {
    paddingHorizontal: '10@ms',
    textAlign: 'center',
  },
  errorToastText1: {
    fontSize: '10@ms',
  },
});

/**
 * Useful links:
 * https://stackoverflow.com/questions/67294032/react-native-multi-line-toast-message
 * https://github.com/calintamas/react-native-toast-message/blob/main/docs/custom-layouts.md
 **/
