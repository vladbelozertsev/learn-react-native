import React, { Fragment, FC } from 'react';
import { ImageBackground, StyleSheet, TouchableHighlight } from 'react-native';
import { Shadow, ShadowProps } from 'react-native-shadow-2';
import { TouchableOpacity, View, ViewStyle } from 'react-native';
import { getBorderRadius } from './utils';
import { ms } from 'react-native-size-matters';

export type MyShadowProps = ShadowProps & {
  $innerView?: View['props'];
  $innerTO?: any;
  $innerTH?: any;
  $innerBgImg?: ImageBackground['props'];
  $alignSelf?: ViewStyle['alignSelf'];
  $br?: ViewStyle['borderRadius'] | string;
  $brTopLeft?: ViewStyle['borderTopLeftRadius'];
  $brTopRight?: ViewStyle['borderTopRightRadius'];
  $brBottomLeft?: ViewStyle['borderBottomLeftRadius'];
  $brBottomRight?: ViewStyle['borderBottomRightRadius'];
  $mb?: boolean | string | number;
};

export const MyShadow: FC<MyShadowProps> = props => {
  const { $innerView, $innerTO, $innerTH, $innerBgImg } = props;
  const br = getBorderRadius($innerView || $innerTO || $innerTH || $innerBgImg);
  const mbStyle = StyleSheet.flatten(props.containerStyle)?.marginBottom;
  const mbProps = props.$mb === true ? 30 : props.$mb && +props.$mb;
  const marginBottom = mbStyle || ms(mbProps || 0);
  const containerStyle = [props.containerStyle, { marginBottom }];
  const children = <Fragment>{props.children}</Fragment>;

  const style = {
    alignSelf: props.$alignSelf || 'stretch',
    borderTopLeftRadius: props.$brTopLeft || br?.borderTopLeftRadius,
    borderTopRightRadius: props.$brTopRight || br?.borderTopRightRadius,
    borderBottomLeftRadius: props.$brBottomLeft || br?.borderBottomLeftRadius,
    borderBottomRightRadius: props.$brBottomRight || br?.borderBottomRightRadius,
    borderRadius: props.$br ? +props.$br : br?.borderRadius,
  };

  return (
    <Shadow startColor="#DFE0E6" {...props} style={[style, props.style]} containerStyle={containerStyle}>
      {$innerView && <View {...$innerView}>{children}</View>}
      {$innerTO && <TouchableOpacity {...$innerTO}>{children}</TouchableOpacity>}
      {$innerTH && <TouchableHighlight {...$innerTH}>{children}</TouchableHighlight>}
      {$innerBgImg && <ImageBackground {...$innerBgImg}>{children}</ImageBackground>}
      {!$innerView && !$innerTO && !$innerTH && !$innerBgImg && children}
    </Shadow>
  );
};
