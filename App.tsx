import React, { useState, useEffect } from 'react';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/Navbar';
import { StyleSheet, ScrollView } from 'react-native';
import { Todos } from './components/Todos';

type Todos = {
  id: string;
  title: string;
}[];

export default function () {
  const [todos, setTodos] = useState<Todos>([]);
  const addTodo = (title: string) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const removeTodos = () => {
    setTodos([]);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <ScrollView>
      <Navbar title="MY Navbar" />
      <AddTodo addTodo={addTodo} removeTodos={removeTodos} />
      <Todos todos={todos} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
