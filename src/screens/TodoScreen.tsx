import React, { useState } from 'react';
import { View, StyleSheet, Alert, Dimensions } from 'react-native';
import { EditTodoModal } from '../components/todo/EditTodoModal';
import { MyButton } from '../components/_reusable/MyButton';
import { MyCard } from '../components/_reusable/MyCard';
import { MyText } from '../components/_reusable/MyText';
import { FontAwesome, AntDesign } from '@expo/vector-icons';

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
      <MyCard style={styles.myCard}>
        <MyText style={styles.text}>Выбрано: {props.selectedTodo?.title}</MyText>

        <MyButton onPress={openEditTodoModal} styleWrapper={styles.editBtnWrapper}>
          <FontAwesome name={'edit'} size={22} />
        </MyButton>
      </MyCard>
      <View style={styles.buttonsView}>
        <View style={styles.button}>
          <MyButton onPress={goBack}>
            <AntDesign name="back" size={20} color="#fff" />
          </MyButton>
        </View>
        <View style={styles.button}>
          <MyButton styleWrapper={styles.deleteBtnWrapper} onPress={showDeleteTodoAlert}>
            <AntDesign name="delete" size={20} />
          </MyButton>
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
  myCard: {
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    height: 20,
  },
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: (Dimensions.get('window').width * 0.9 - 30) / 2, // 30 - размер todoScreen:margin * 2
    // width: '45%', // эквивалентно выражению сверху, т.е. (Dimensions.get('window').width * 0.9 - 30) / 2
  },
  deleteBtnWrapper: {
    backgroundColor: 'tomato',
  },
  editBtnWrapper: {
    backgroundColor: 'skyblue',
  },
});
