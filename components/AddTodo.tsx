import React, { useState, useRef, LegacyRef } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { globalStyles } from './global-styles';

export const AddTodo = () => {
  const inpRef = useRef<TextInput>(null);
  const [text, setText] = useState('123');

  return (
    <View>
      <Text>{'\n'}</Text>
      <Text>adasdasdasd ghghg {'\n'}</Text>
      <TextInput style={globalStyles.inp} />
      <Text>{'\n'}</Text>
      <TextInput style={styles.inp} ref={inpRef} onChangeText={(text) => setText(text)} />
      <Text>{'\n'}</Text>
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

const styles = StyleSheet.create({
  inp: {
    ...globalStyles.inp,
    borderColor: 'tomato',
  },
});
