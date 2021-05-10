import React, { useState, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './components/common/Navbar';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { TodosStateContext } from './context/todos/TodosContext';

export const MainLayout = () => {
  const initialTodos = useContext(TodosStateContext);
  const [todos, setTodos] = useState(initialTodos);

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

  return (
    <View style={styles.mainLayout}>
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
};

const styles = StyleSheet.create({
  mainLayout: {
    flex: 1,
  },
});
