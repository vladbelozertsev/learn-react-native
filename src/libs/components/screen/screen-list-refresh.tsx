import { RefreshControl } from 'react-native';
import { useEffect, useRef } from 'react';

type Prams = {
  $refetch?: () => void;
  $refresh?: RefreshControl['props'];
  $loading?: boolean;
};

export const useScreenListRefresh = (prams: Prams) => {
  const refetchingRef = useRef(false);

  useEffect(() => {
    if (prams.$loading) return;
    refetchingRef.current = false;
  }, [prams.$loading]);

  return {
    colors: [CLR_APP],
    refreshing: refetchingRef.current && !!prams.$loading,
    onRefresh: () => {
      if (!prams.$refetch) return;
      refetchingRef.current = true;
      prams.$refetch();
    },
  };
};
