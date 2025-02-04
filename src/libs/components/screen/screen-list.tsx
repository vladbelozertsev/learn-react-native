import * as RN from 'react-native';
import React, { forwardRef } from 'react';
import { FetchMore } from 'src/libs/types/fetch-more';
import { ScaledSheet } from 'react-native-size-matters';
import { ScreenListEmpty } from './screen-list-empty';
import { ScreenListLoading } from './screen-list-loading';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useScreenListRefresh } from './screen-list-refresh';

type Props = Omit<RN.FlatList['props'], 'renderItem'> & {
  $Footer?: JSX.Element;
  $Header?: JSX.Element;
  $bg?: string;
  $bottomTabs?: boolean;
  $dontShowLEC?: boolean;
  $excludeInsetBottom?: boolean;
  $fetchMore?: FetchMore;
  $includeInsetTop?: boolean;
  $input?: { [key: string]: any };
  $loading?: boolean;
  $refetch?: () => void;
  $refresh?: RN.RefreshControl['props'];
  $wrapperView?: RN.KeyboardAvoidingView['props'];
  renderItem: React.FC<RN.ListRenderItemInfo<any>>;
};

export const ScreenList = forwardRef<RN.FlatList, Props>((props, ref) => {
  const refresh = useScreenListRefresh(props);
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const wrapperStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingTop: props.$includeInsetTop ? insets.top : 0,
    paddingBottom: props.$excludeInsetBottom ? 0 : insets.bottom,
    backgroundColor: props.$bg ? props.$bg : '#F0F1F5',
    flex: 1,
  };

  const getNextPage = () => {
    if (props.$loading || !props.$fetchMore) return;
    props.$fetchMore({
      variables: { input: { skip: props.data?.length || 0, take: 5, ...props.$input } },
      updateQuery(previousData, { fetchMoreResult, variables: { input } }) {
        const fieldName = Object.keys(previousData)[0];
        const length = fetchMoreResult[fieldName].length;
        const upd = previousData[fieldName].slice(0);
        for (let i = 0; i < length; ++i) upd[input.skip + i] = fetchMoreResult[fieldName][i];
        return { ...previousData, [fieldName]: upd };
      },
    });
  };

  return (
    <RN.KeyboardAvoidingView
      {...props.$wrapperView}
      keyboardVerticalOffset={headerHeight}
      behavior={props.$wrapperView?.behavior || 'padding'}
      style={[wrapperStyle, props.$wrapperView?.style]}>
      {props.$Header ? props.$Header : null}
      <RN.FlatList
        {...props}
        ListEmptyComponent={props.ListEmptyComponent || <ScreenListEmpty {...props} />}
        ListFooterComponent={props.ListFooterComponent || <ScreenListLoading {...props} />}
        refreshControl={<RN.RefreshControl {...refresh} />}
        renderItem={info => <props.renderItem {...info} />}
        onEndReached={props.onEndReached || getNextPage}
        onEndReachedThreshold={props.onEndReachedThreshold || 0.5}
        removeClippedSubviews={props.removeClippedSubviews || false}
        contentContainerStyle={[styles.container, props.contentContainerStyle]}
        style={[styles.flex1, props.style]}
        ref={ref}
      />
      {props.$Footer ? props.$Footer : null}
    </RN.KeyboardAvoidingView>
  );
});

const styles = ScaledSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: '15@ms',
    paddingTop: '25@ms',
    paddingBottom: '55@ms',
  },
});
