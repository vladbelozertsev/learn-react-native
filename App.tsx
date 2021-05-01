import React, { useState, useEffect } from 'react';
import { Navbar } from './src/components/common/Navbar';
import { StyleSheet, View } from 'react-native';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

type Todos = {
  id: string;
  title: string;
}[];

export default function () {
  const [todos, setTodos] = useState<Todos>([
    { id: '1', title: '1 one' },
    { id: '2', title: '2 two' },
    { id: '3', title: '3 three' },
    { id: '4', title: '4 four' },
    { id: '5', title: '5 five' },
    { id: '6', title: '6 six' },
    { id: '7', title: '7 seven' },
    { id: '8', title: '8 eight' },
    { id: '9', title: '9 nine' },
    { id: '10', title: '10 ten' },
    { id: '11', title: '11 eleven' },
    { id: '12', title: '12 twelve' },
    { id: '13', title: '13 thirteen' },
    { id: '14', title: '14 fourteen' },
  ]);

  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);

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

  const editTodo = (id: string, title: string) => {
    // Также можно использовать [].map(...)
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      todo.title = title;
      setTodos([...todos]); // см my-tests -> react-app-set-state.
    }
  };

  const selectedTodo = todos.find((todo) => todo.id === selectedTodoId);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <View style={styles.app}>
      <Navbar title="MY Navbar" />
      {selectedTodoId ? (
        <TodoScreen
          setSelectedTodoId={setSelectedTodoId}
          selectedTodo={selectedTodo}
          removeTodo={removeTodo}
          editTodo={editTodo}
        />
      ) : (
        <MainScreen
          todos={todos}
          addTodo={addTodo}
          removeTodo={removeTodo}
          removeTodos={removeTodos}
          setSelectedTodoId={setSelectedTodoId}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
