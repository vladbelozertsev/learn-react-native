import React, { FC } from 'react';
import { Loading } from 'src/components/loading';
import { MyText } from 'src/components/my-text';
import { StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps } from 'react-native';

export type ButtonProps = TouchableOpacityProps & {
  $isLoading?: boolean;
  $left?: React.ReactNode;
  $mb?: boolean | string | number;
  $right?: React.ReactNode;
  $styleText?: StyleProp<TextStyle>;
  $t?: string;
  $v?: string;
};

export const Button0: FC<ButtonProps> = props => {
  const { color } = StyleSheet.flatten(props.$styleText);
  const disabled = props.disabled || props.$isLoading;

  return (
    <TouchableOpacity {...props} style={props.style} disabled={disabled}>
      {props.$isLoading && <Loading color={color} />}
      {!props.$isLoading && props.children}
      {!props.$isLoading && !props.children && (
        <React.Fragment>
          {!!props.$left && props.$left}
          <MyText style={props.$styleText} $v={props.$v} $t={props.$t} />
          {!!props.$right && props.$right}
        </React.Fragment>
      )}
    </TouchableOpacity>
  );
};
