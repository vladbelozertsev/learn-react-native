import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import { EditTodoModal } from '../components/todo/EditTodoModal';
import { AppCard } from '../components/_layouts/AppCard';

interface Props {
  removeTodo: (id: string) => void;
  editTodo: (id: string, title: string) => void;
  selectedTodo:
    | {
        id: string;
        title: string;
      }
    | undefined;
  setSelectedTodoId: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TodoScreen = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openEditTodoModal = () => {
    setModalVisible(true);
  };

  const goBack = () => {
    props.setSelectedTodoId(null);
  };

  const showDeleteTodoAlert = () =>
    Alert.alert('Удаление элемента', `Вы уверены, что хотите удалить ${props.selectedTodo?.title}`, [
      {
        text: 'Да',
        style: 'destructive',
        onPress: () => {
          props.setSelectedTodoId(null);
          if (props.selectedTodo) props.removeTodo(props.selectedTodo.id);
        },
      },
      {
        text: 'Нет',
        style: 'cancel',
      },
    ]);

  const editTitle = (title: string) => {
    if (props.selectedTodo?.id) props.editTodo(props.selectedTodo?.id, title);
  };

  return (
    <View style={styles.todoScreen}>
      <AppCard style={styles.card}>
        <Text style={styles.text}>Выбрано: {props.selectedTodo?.title}</Text>
        <Button title="Редактировать" onPress={openEditTodoModal} />
      </AppCard>
      <View style={styles.buttonsView}>
        <View style={styles.button}>
          <Button color={'#bbb'} title={'Назад'} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button title={'Удалить'} color={'tomato'} onPress={showDeleteTodoAlert} />
        </View>
      </View>
      <EditTodoModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        editTitle={editTitle}
        title={props.selectedTodo?.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoScreen: {
    margin: 15,
  },
  text: {
    marginBottom: 15,
    fontSize: 20,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: '45%',
  },
  card: {
    marginBottom: 20,
  },
});
