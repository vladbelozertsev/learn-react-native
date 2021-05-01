import React from 'react';
import { TextInput, View } from 'react-native';

export const MyTextInput = (props: any) => {
  return (
    <View>
      <TextInput {...props} />
    </View>
  );
};
