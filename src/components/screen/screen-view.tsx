import React, { FC } from 'react';
import { Loading } from '../loading';
import { RefreshControl, ScrollView, View } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';
import { ScreenBack } from './screen-back';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ScrollView['props'] & {
  $Footer?: JSX.Element;
  $Header?: JSX.Element;
  $back?: string;
  $bg?: string;
  $bottomTabs?: boolean;
  $excludeInsetBottom?: boolean;
  $includeInsetTop?: boolean;
  $isLoading?: boolean;
  $noPT?: boolean;
  $refresh?: RefreshControl['props'];
  $wrapperViewProps?: View['props'];
};

export const ScreenView: FC<Props> = props => {
  const insets = useSafeAreaInsets();
  const paddingLeft = insets.left;
  const paddingRight = insets.right;
  const paddingTop = props.$includeInsetTop ? insets.top : 0;
  const paddingBottom = props.$excludeInsetBottom ? 0 : insets.bottom;
  const paddings = { paddingLeft, paddingRight, paddingTop, paddingBottom };
  const bg = { backgroundColor: props.$bg ? props.$bg : '#FFF' };
  const pt = { paddingTop: props.$noPT ? 0 : vs(30) };

  return (
    <View
      {...props.$wrapperViewProps}
      style={[styles.rootView, bg, paddings, props.$wrapperViewProps?.style]}>
      {props.$back && <ScreenBack title={props.$back} />}
      {props.$Header ? props.$Header : null}
      <ScrollView
        {...props}
        style={[styles.screen, props.style]}
        contentContainerStyle={[styles.container, pt, props.contentContainerStyle]}
        refreshControl={props.$refresh && <RefreshControl colors={[CLR_APP]} {...props.$refresh} />}>
        {props.$isLoading && <Loading full bg="transparent" />}
        {!props.$isLoading && props.children}
      </ScrollView>
      {props.$Footer ? props.$Footer : null}
    </View>
  );
};

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
    paddingBottom: '30@vs',
  },
});
