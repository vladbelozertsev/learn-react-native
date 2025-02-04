import React, { FC } from 'react';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View, ActivityIndicator, ColorValue } from 'react-native';

export type LoadingProps = {
  bg?: string;
  color?: ColorValue | undefined;
  full?: boolean;
  mb?: boolean | string | number;
  size?: ActivityIndicator['props']['size'];
  styleIndicator?: ActivityIndicator['props']['style'];
  styleView?: View['props']['style'];
  testID?: ActivityIndicator['props']['testID'];
  hide?: boolean;
};

export const Loading: FC<LoadingProps> = props => {
  const flexGrow = props.full ? 1 : undefined;
  const marginBottom = ms(props.mb === true ? 30 : +(props.mb || 0));
  const backgroundColor = props.bg || (props.full ? '#FFF' : 'transparent');
  const extraView = { flexGrow, marginBottom, backgroundColor };

  return props.hide ? null : (
    <View style={[styles.rootView, extraView, props.styleView]}>
      <ActivityIndicator
        size={props.size}
        color={props.color || CLR_APP}
        style={props.styleIndicator}
        testID={props.testID}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
