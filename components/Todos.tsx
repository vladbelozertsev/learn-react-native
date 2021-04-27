import React from 'react';
import { FlatList, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

interface Props {
  todos: {
    id: string;
    title: string;
  }[];
  removeTodo: (id: string) => void;
}

interface PropsFlatItem {
  item: { id: string; title: string };
  removeTodo: (id: string) => void;
}

// сюда падает элемент из массива todos[]
const TodoItem = ({ item, removeTodo }: PropsFlatItem) => (
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
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: '#ddd',
    margin: 15,
    flex: 1,
  },
  header: {
    color: 'tomato',
    textAlign: 'center',
    fontSize: 22,
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: 'tomato',
    borderWidth: 2,
    backgroundColor: 'rgba(255, 0, 0, 0.15)',
    marginVertical: 5,
    borderRadius: 5,
  },
});
