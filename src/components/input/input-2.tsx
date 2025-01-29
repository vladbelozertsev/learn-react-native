import React, { FC } from 'react';
import { Input1, Input1Props } from './input-1';
import { ScaledSheet, ms, vs } from 'react-native-size-matters';

export type Props = Input1Props & {
  $noFlex?: boolean;
  $nosdw?: boolean;
  $borderColor?: string;
};

export const Input2: FC<Props> = props => {
  const styleInpExtra = {
    height: props.$textarea ? vs(140) : ms(50),
    minWidth: props.$noFlex ? ms(125) : ('auto' as const),
  };

  const styleRootView = {
    marginBottom: props.$mb === true ? ms(15) : ms(+(props.$mb || 0)),
  };

  return (
    <Input1
      {...props}
      $styleShadow={styles.inputView}
      $styleInput={[styles.input, styleInpExtra]}
      $styleTopText={styles.topText}
      $styleRootView={styleRootView}
      $styleRHFError={styles.bottomText}
    />
  );
};

const styles = ScaledSheet.create({
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderRadius: '15@ms',
    color: '#242424',
    flex: 1,
    fontSize: '16@ms',
    paddingHorizontal: '12@ms',
    paddingVertical: '14@vs',
    textAlignVertical: 'top',
    backgroundColor: '#FFF',
  },
  topText: {
    marginLeft: '12@ms',
    fontWeight: 'bold',
    fontSize: '14@ms',
    marginBottom: '2@ms',
  },
  bottomText: {
    color: '#F00',
    marginLeft: '10@ms',
    fontWeight: 'bold',
    margtinTop: '2@ms',
  },
});
