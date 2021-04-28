import React from 'react';
import { FlatList, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

interface Props {
  todos: {
    id: string;
    title: string;
  }[];
  removeTodo: (id: string) => void;
}

interface PropsTodoItem {
  item: { id: string; title: string };
  removeTodo: (id: string) => void;
}

// сюда падает элемент из массива todos[]
const TodoItem = ({ item, removeTodo }: PropsTodoItem) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => {
      console.log('Нажали - ', item.id);
    }}
    onLongPress={removeTodo.bind(null, item.id)}
  >
    <View>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export const Todos = ({ todos, removeTodo }: Props) => {
  return (
    <SafeAreaView style={styles.todos}>
      <Text style={styles.header}>Мои дела:</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} removeTodo={removeTodo} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );

  // return (
  //   <ScrollView style={styles.todos}>
  //     <Text style={styles.header}>Мои дела:</Text>
  //     {todos.map((todo) => (
  //       <Text key={todo.id} style={styles.text}>
  //         {todo.title}
  //       </Text>
  //     ))}
  //   </ScrollView>
  // );
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
  text: {
    backgroundColor: 'rgba(255, 0, 0, 0.15)',
    borderColor: 'tomato',
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
});
