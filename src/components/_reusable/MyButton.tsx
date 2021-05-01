import React from 'react';
import { View, Button, NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

interface Props {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const MyButton = (props: Props) => {
  return (
    <View>
      <Button title={props.title} onPress={props.onPress} color="tomato" />
    </View>
  );
};
