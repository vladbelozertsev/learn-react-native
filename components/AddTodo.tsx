import React, { useRef, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import { globalStyles } from './global-styles';
import { Btn } from './_common/Btn';

interface Props {
  addTodo: (title: string) => void;
  removeTodos: () => void;
}

export const AddTodo = ({ addTodo, removeTodos }: Props) => {
  const inpRef = useRef<TextInput>(null);
  const [text, setText] = useState('123');

  const handleAddTodo = () => {
    if (!text.trim()) {
      Alert.alert('Название дела не может быть пустым');
      return;
    }
    addTodo(text);
    setText('');
    inpRef?.current?.focus();
  };

  return (
    <View style={styles.addTodo}>
      <Text>{'\n'}</Text>
      <TextInput
        defaultValue={text}
        onChangeText={setText}
        placeholder="my input"
        ref={inpRef}
        style={styles.inp}
        autoCorrect={false}
        autoCapitalize="words"
      />
      <TextInput
        placeholder="other input"
        style={styles.inp}
        autoCorrect={false}
        autoCapitalize="none"
        keyboardType="numeric"
      />
      <View style={styles.btnAdd}>
        <Btn title="Добавить" onPress={handleAddTodo} />
      </View>
      <Btn title="Удалить все дела" onPress={removeTodos} />
      <Text style={styles.test}>
        test <Btn title="Тест Кнопка" onPress={handleAddTodo} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    paddingHorizontal: 15,
  },
  inp: {
    ...globalStyles.inp,
    borderColor: 'tomato',
    marginBottom: 10,
  },
  btnAdd: {
    marginBottom: 10,
  },
  test: {
    width: '75%',
    textAlign: 'center',
    alignSelf: 'flex-end',
    backgroundColor: '#ff0',
    // flex НЕ работает
    // display: 'flex',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
});
