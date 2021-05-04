import React, { useState } from 'react';
import { Alert, Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { globalStyles } from '../_styles/globalStyles';
import { MyButton } from '../_reusable/MyButton';
import { Entypo } from '@expo/vector-icons'; // НЕ требует установки, ЕСЛИ проект был создан как expo

interface Props {
  addTodo: (title: string) => void;
  removeTodos: () => void;
}

export const AddTodo = (props: Props) => {
  const [text, setText] = useState('123');

  const handleAddTodo = () => {
    if (!text.trim()) {
      Alert.alert('Название дела не может быть пустым');
      return;
    }
    props.addTodo(text);
    setText('');
    Keyboard.dismiss();
  };

  const showConfirmAlert = () =>
    Alert.alert('Удалить все дела', 'Вы уверены, что хотите удалить все дела ?', [
      {
        text: 'Да',
        style: 'destructive',
        onPress: () => {
          console.log('Все дела удалены!');
          props.removeTodos();
        },
      },
      {
        text: 'Нет',
        style: 'cancel',
      },
    ]);

  return (
    <View style={styles.addTodo}>
      <TextInput
        defaultValue={text}
        onChangeText={setText}
        placeholder="my input"
        style={styles.inp}
        autoCorrect={false}
        autoCapitalize="words"
      />
      <View style={styles.addBtnView}>
        <Entypo.Button name="add-to-list" size={24} style={styles.addBtn} onPress={handleAddTodo}>
          ДОБАВИТЬ
        </Entypo.Button>
      </View>
      <MyButton onPress={showConfirmAlert}>Удалить все дела</MyButton>
    </View>
  );
};

const styles = StyleSheet.create({
  addTodo: {
    marginTop: 15,
    paddingHorizontal: 15,
  },
  inp: {
    ...globalStyles.inp,
    borderColor: 'tomato',
    marginBottom: 10,
  },
  addBtnView: {
    marginBottom: 10,
  },
  addBtn: {
    justifyContent: 'center',
    backgroundColor: 'tomato',
    fontFamily: 'ComicNeue-Regular',
  },
});
