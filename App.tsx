import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/Navbar';
import { StyleSheet, View } from 'react-native';
import { Todos } from './components/Todos';

type Todos = {
  id: string;
  title: string;
}[];

export default function () {
  const [todos, setTodos] = useState<Todos>([
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
    { id: '4', title: '4' },
    { id: '5', title: '5' },
    { id: '6', title: '6' },
    { id: '7', title: '7' },
    { id: '8', title: '8' },
    { id: '9', title: '9' },
    { id: '10', title: '10' },
    { id: '11', title: '11' },
    { id: '12', title: '12' },
    { id: '13', title: '13' },
    { id: '14', title: '14' },
  ]);

  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const removeTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <View style={styles.app}>
      {/* <Navbar title="MY Navbar" /> */}
      <AddTodo addTodo={addTodo} removeTodos={removeTodos} />
      <Todos todos={todos} removeTodo={removeTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
