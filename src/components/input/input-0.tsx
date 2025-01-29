import React, { FC } from 'react';
import { Platform, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

type Props = TextInput['props'];

export const Input0: FC<Props> = props => {
  const isIos = Platform.OS === 'ios';
  const selClr = isIos ? CLR_APP : undefined;

  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      selectionColor={props.selectionColor || selClr}
      placeholderTextColor={props.placeholderTextColor || '#A9A9A9'}
    />
  );
};

const styles = ScaledSheet.create({
  input: {
    fontSize: '14@ms',
    color: '#242424',
  },
});
