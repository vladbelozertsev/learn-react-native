import React, { FC } from 'react';
import { Animated, View } from 'react-native';
import { ScaledSheet, vs } from 'react-native-size-matters';

type Props = {
  animatedValue: Animated.Value;
  children: React.ReactNode;
  style?: View['props']['style'];
};

export const HEADER_MAX_HEIGHT = vs(110);
export const HEADER_MIN_HEIGHT = 0;

export const DynamicHeader: FC<Props> = props => {
  const height = props.animatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const opacity = props.animatedValue.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.animatedView, { height, opacity }, props.style]}>
      {props.children}
    </Animated.View>
  );
};

const styles = ScaledSheet.create({
  animatedView: {
    backgroundColor: CLR_APP,
    borderBottomLeftRadius: 45,
    borderBottomRightRadius: 45,
    overflow: 'hidden',
  },
});

/**
 * Useful links:
 * https://snack.expo.dev/@ubahthebuilder/b179dc
 * https://blog.logrocket.com/using-react-native-scrollview-create-sticky-header/
 */
