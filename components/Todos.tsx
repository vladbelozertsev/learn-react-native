import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

interface Props {
  todos: {
    id: string;
    title: string;
  }[];
}

export const Todos = ({ todos }: Props) => {
  return (
    <ScrollView style={styles.todos}>
      <Text style={styles.header}>Мои дела:</Text>
      {todos.map((todo) => (
        <Text key={todo.id} style={styles.text}>
          {todo.title}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todos: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#ddd',
    margin: 15,
  },
  header: {
    color: 'tomato',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
  },
});
