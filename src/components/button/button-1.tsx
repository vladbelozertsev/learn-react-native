import React, { FC } from 'react';
import { Button0, ButtonProps } from './button-0';
import { MyShadow, MyShadowProps } from 'src/components/my-shadow';
import { ScaledSheet } from 'react-native-size-matters';
import { getBtnProps } from './utils/get-btn-props';

type Props = ButtonProps & {
  $shadow?: MyShadowProps | true;
  $rounded?: boolean;
};

export const Button1: FC<Props> = props => {
  const styles = getStyles(props.$rounded);
  const btnProps = getBtnProps({ ...props, styles });

  return props.$shadow === true ? (
    <MyShadow startColor={'#D7D7D7'}>
      <Button0 {...btnProps} />
    </MyShadow>
  ) : props.$shadow ? (
    <MyShadow startColor={'#D7D7D7'} {...props.$shadow}>
      <Button0 {...btnProps} />
    </MyShadow>
  ) : (
    <Button0 {...btnProps} />
  );
};

const getStyles = (rounded?: boolean) => {
  return ScaledSheet.create({
    btn: {
      alignItems: 'center',
      alignSelf: 'center',
      backgroundColor: CLR_APP,
      borderRadius: rounded ? '30@ms' : '15@ms',
      height: '50@ms',
      justifyContent: 'center',
      paddingHorizontal: '20@ms',
      width: '100%',
    },
    text: {
      color: '#FFF',
      fontSize: '16@ms',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
};
