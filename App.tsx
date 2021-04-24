import React from 'react';
import { AddTodo } from './components/AddTodo';
import { Navbar } from './components/Navbar';
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View>
      <Navbar title="Navbar" />
      <AddTodo />
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

export default App;
