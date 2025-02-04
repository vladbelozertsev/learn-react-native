import React, { FC } from 'react';
import { Loading } from 'src/libs/components/loading';
import { ScaledSheet, ms } from 'react-native-size-matters';

type Props = {
  isLoading?: boolean;
  getNextPage?: {
    isFetchingNextPage: boolean;
  };
};

export const ListFooter: FC<Props> = props => {
  const load1 = props.isLoading;
  const load2 = props.getNextPage?.isFetchingNextPage;
  if (!load1 && !load2) return null;
  return <Loading styleView={styles.loadingView} size={ms(25)} />;
};

const styles = ScaledSheet.create({
  loadingView: {
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    paddingVertical: '10@ms',
  },
});
