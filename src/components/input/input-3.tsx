import React, { FC } from 'react';
import { Input1, Input1Props } from './input-1';
import { ScaledSheet, ms, vs } from 'react-native-size-matters';

export type Props = Input1Props;

export const Input3: FC<Props> = props => {
  const isError = props.$isError || !!props.$rhf?.fieldState?.error;
  const marginBottom = props.$mb === true ? ms(30) : ms(+(props.$mb || 0));

  const styleInpExtra = {
    borderBottomColor: isError ? '#F00' : '#DDD',
    height: props.$textarea ? vs(140) : ms(50),
  };

  const styleTopTextExtra = {
    color: isError ? '#F00' : '#242424',
  };

  const styleEyeIconExtra = {
    color: isError ? '#F00' : '#242424',
  };

  const styleEyeIconBtnExtra = {
    borderBottomColor: isError ? '#F00' : 'rgb(209,209,209)',
  };

  return (
    <Input1
      {...props}
      $styleRootView={{ marginBottom }}
      $styleIconEye={[styles.eyeIcon, styleEyeIconExtra]}
      $styleIconEyeBtn={[styles.eyeIconView, styleEyeIconBtnExtra]}
      $styleInput={[styles.input, styleInpExtra]}
      $styleShadow={styles.inputView}
      $styleTopText={[styles.topText, styleTopTextExtra]}
      $shadowProps={{ disabled: true }}
    />
  );
};

const styles = ScaledSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(209,209,209)',
    color: '#242424',
    fontSize: '16@ms',
    height: '50@ms',
    justifyContent: 'center',
    marginVertical: 0,
    paddingVertical: 0,
    flex: 1,
  },
  eyeIconView: {
    height: '50@ms',
    paddingHorizontal: '3@ms',
    borderBottomWidth: 3,
    borderBottomColor: '#F00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eyeIcon: {
    color: '#242424',
    fontSize: '22@ms',
    textAlign: 'center',
  },
  topText: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    lineHeight: '18@ms',
  },
});
