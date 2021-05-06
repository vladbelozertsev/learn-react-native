import React from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
  NativeSyntheticEvent,
  NativeTouchEvent,
  StyleSheet,
} from 'react-native';
import { MyTextBold } from './MyTextBold';

interface Props {
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
  children: React.ReactNode;
  styleWrapper?: object;
  styleText?: object;
}

export const MyButton = (props: Props) => {
  const Content = (
    <View style={{ ...styles.btnViewWrapper, ...props.styleWrapper }}>
      <MyTextBold style={{ ...styles.text, ...props.styleText }}>{props.children}</MyTextBold>
    </View>
  );

  if (Platform.OS === 'android') {
    return (
      <TouchableNativeFeedback
        onPress={props.onPress}
        background={TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', false)}
      >
        {Content}
      </TouchableNativeFeedback>
    );
  }

  return (
    <TouchableOpacity onPress={props.onPress} activeOpacity={0.7}>
      {Content}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnViewWrapper: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bbb',
  },
  text: {
    color: '#fff',
  },
});
