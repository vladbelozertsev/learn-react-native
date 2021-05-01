import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Todos } from '../components/main/Todos';
import { AddTodo } from '../components/main/AddTodo';

interface Props {
  todos: {
    id: string;
    title: string;
  }[];
  setSelectedTodoId: React.Dispatch<React.SetStateAction<string | null>>;
  addTodo: (id: string) => void;
  removeTodo: (id: string) => void;
  removeTodos: () => void;
}

export const MainScreen = ({ todos, addTodo, removeTodo, removeTodos, setSelectedTodoId }: Props) => {
  return (
    <View style={styles.mainScreen}>
      <AddTodo addTodo={addTodo} removeTodos={removeTodos} />
      <Todos todos={todos} removeTodo={removeTodo} setSelectedTodoId={setSelectedTodoId} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
});
