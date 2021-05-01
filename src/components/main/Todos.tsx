import React from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import { TodosItem } from './TodosItem';

interface Props {
  todos: {
    id: string;
    title: string;
  }[];
  setSelectedTodoId: React.Dispatch<React.SetStateAction<string | null>>;
  removeTodo: (id: string) => void;
}

export const Todos = (props: Props) => {
  return (
    <SafeAreaView style={styles.todos}>
      <Text style={styles.header}>Мои дела:</Text>
      <FlatList
        data={props.todos}
        renderItem={({ item }) => (
          <TodosItem item={item} removeTodo={props.removeTodo} setSelectedTodoId={props.setSelectedTodoId} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  todos: {
    backgroundColor: '#ddd',
    flex: 1,
    margin: 15,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  header: {
    color: 'tomato',
    fontSize: 22,
    marginBottom: 8,
    textAlign: 'center',
  },
});
