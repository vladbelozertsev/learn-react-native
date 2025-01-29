import React, { forwardRef } from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { Loading, LoadingProps } from 'src/components/loading';
import { ScaledSheet } from 'react-native-size-matters';
import { ScreenListEmpty } from './screen-list-empty';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = FlatList['props'] & {
  $Footer?: JSX.Element;
  $Header?: JSX.Element;
  $bg?: string;
  $dontShowLEC?: boolean;
  $excludeInsetBottom?: boolean;
  $includeInsetTop?: boolean;
  $isLoading?: boolean;
  $refresh?: RefreshControl['props'];
  $wrapperViewProps?: View['props'];
  $loadingProps?: LoadingProps;
  $getNextPage?: {
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    isLoading?: boolean;
    isFetching?: boolean;
    fetchNextPage: () => void;
  };
};

export const ScreenList = forwardRef<FlatList, Props>((props, ref) => {
  const { $refresh, ListFooterComponent: ListFooter, $getNextPage } = props;
  const { isFetchingNextPage, isLoading: isLoad, isFetching } = $getNextPage || {};
  const isLoading = props.$isLoading || isFetchingNextPage || isLoad || isFetching;
  const showLEC = !isLoading && !props.$dontShowLEC;
  const insets = useSafeAreaInsets();

  const wrapperViewExtraStyle = {
    backgroundColor: props.$bg ? props.$bg : '#F0F1F5',
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingTop: props.$includeInsetTop ? insets.top : 0,
    paddingBottom: props.$excludeInsetBottom ? 0 : insets.bottom,
  };

  const onEndReached: Props['onEndReached'] = info => {
    if (props.onEndReached) props.onEndReached(info);
    if (props.$getNextPage) {
      const hasNext = props.$getNextPage.hasNextPage;
      const isFetchNext = props.$getNextPage.isFetchingNextPage;
      if (hasNext && !isFetchNext) props.$getNextPage.fetchNextPage();
    }
  };

  return (
    <View
      {...props.$wrapperViewProps}
      style={[styles.rootView, wrapperViewExtraStyle, props.$wrapperViewProps?.style]}>
      {props.$Header ? props.$Header : null}
      <FlatList
        {...props}
        ListEmptyComponent={showLEC ? props.ListEmptyComponent || ScreenListEmpty : null}
        ListFooterComponent={ListFooter || (isLoading && <Loading {...props.$loadingProps} />) || null}
        refreshControl={$refresh && <RefreshControl colors={[CLR_APP]} {...$refresh} />}
        contentContainerStyle={[styles.container, props.contentContainerStyle]}
        onEndReachedThreshold={props.onEndReachedThreshold || 0.5}
        style={[styles.screen, props.style]}
        onEndReached={onEndReached}
        ref={ref}
      />
      {props.$Footer ? props.$Footer : null}
    </View>
  );
});

const styles = ScaledSheet.create({
  rootView: {
    flex: 1,
  },
  screen: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: '16@ms',
    paddingVertical: '30@vs',
  },
});
