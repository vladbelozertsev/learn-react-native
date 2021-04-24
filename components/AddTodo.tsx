import React, { useState, useRef, LegacyRef } from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export const AddTodo = () => {
  const inpRef = useRef<TextInput>(null);
  const [text, setText] = useState('123');

  return (
    <View>
      <Text>adasdasdasd</Text>
      <TextInput />
      <TextInput ref={inpRef} onChangeText={(text) => setText(text)} />
      <Button
        title="asasaas"
        onPress={() => {
          inpRef?.current?.focus();
          console.log(text);
        }}
      />
      <Text></Text>
    </View>
  );
};
