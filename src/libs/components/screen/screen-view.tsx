import React, { FC } from 'react';
import { Loading } from '../loading';
import { ScaledSheet } from 'react-native-size-matters';
import { ScrollView, KeyboardAvoidingView, RefreshControl } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = ScrollView['props'] & {
  $Footer?: JSX.Element;
  $Header?: JSX.Element;
  $back?: string;
  $bg?: string;
  $bottomTabs?: boolean;
  $excludeInsetBottom?: boolean;
  $includeInsetTop?: boolean;
  $loading?: boolean;
  $wrapperView?: KeyboardAvoidingView['props'];
  $refresh?: RefreshControl['props'];
};

export const ScreenView: FC<Props> = props => {
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const wrapperStyle = {
    paddingLeft: insets.left,
    paddingRight: insets.right,
    paddingTop: props.$includeInsetTop ? insets.top : 0,
    paddingBottom: props.$excludeInsetBottom ? 0 : insets.bottom,
    backgroundColor: props.$bg ? props.$bg : '#FFF',
    flex: 1,
  };

  if (props.$loading) return <Loading full />;

  return (
    <KeyboardAvoidingView
      {...props.$wrapperView}
      keyboardVerticalOffset={headerHeight}
      behavior={props.$wrapperView?.behavior || 'padding'}
      style={[wrapperStyle, props.$wrapperView?.style]}>
      {props.$Header ? props.$Header : null}
      <ScrollView
        {...props}
        style={[styles.flex1, props.style]}
        removeClippedSubviews={props.removeClippedSubviews || false}
        contentContainerStyle={[styles.container, props.contentContainerStyle]}
        refreshControl={props.$refresh && <RefreshControl colors={[CLR_APP]} {...props.$refresh} />}>
        {props.children}
      </ScrollView>
      {props.$Footer ? props.$Footer : null}
    </KeyboardAvoidingView>
  );
};

const styles = ScaledSheet.create({
  flex1: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: '15@ms',
    paddingVertical: '25@ms',
  },
});
