import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

interface Props {
  item: { id: string; title: string };
  removeTodo: (id: string) => void;
  setSelectedTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

// сюда падает элемент из массива todos[]
export const TodosItem = (props: Props) => {
  const showTodoDeleteAlert = () =>
    Alert.alert('Удалить дело', 'Вы уверены, что хотите удалить дело?', [
      {
        text: 'Да',
        style: 'destructive',
        onPress: props.removeTodo.bind(null, props.item.id),
      },
      {
        text: 'Нет',
        style: 'cancel',
      },
    ]);

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        console.log('Нажали - ', props.item.id);
        props.setSelectedTodoId(props.item.id);
      }}
      onLongPress={showTodoDeleteAlert}
    >
      <View>
        <Text style={styles.text}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgba(255, 0, 0, 0.15)',
    borderColor: 'tomato',
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
});
