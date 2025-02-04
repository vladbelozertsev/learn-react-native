import React, { FC } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { Loading, LoadingProps } from 'src/libs/components/loading';

type Props = {
  $loading?: boolean;
  $loadingProps?: LoadingProps;
};

export const ScreenListLoading: FC<Props> = props => {
  const { $loading, $loadingProps } = props;

  return (
    <Loading
      {...$loadingProps}
      styleView={[styles.loadingViewStyle, $loadingProps?.styleView]}
      size={$loadingProps?.size || ms(24)}
      hide={!$loading}
    />
  );
};

const styles = ScaledSheet.create({
  loadingViewStyle: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: '-24@ms',
    left: 0,
    right: 0,
  },
});
