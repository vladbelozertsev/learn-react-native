import React from 'react';
import { FlatList, Text, StyleSheet, SafeAreaView, View, Image } from 'react-native';
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
  let content = (
    <FlatList
      data={props.todos}
      renderItem={({ item }) => (
        <TodosItem item={item} removeTodo={props.removeTodo} setSelectedTodoId={props.setSelectedTodoId} />
      )}
      keyExtractor={(item) => item.id}
    />
  );

  if (!props.todos.length) {
    content = (
      <View style={styles.emptyListView}>
        <View style={styles.imgView}>
          <Image source={require('../../assets/images/list.png')} style={styles.img} />
        </View>
        {/* Пример вставки изображения при помощи URL-ссылки: */}
        {/* <View style={styles.imgView}>
          <Image
            source={{
              uri: 'https://www.vhv.rs/dpng/d/524-5245981_react-js-logo-png-transparent-png-download.png',
            }}
            style={styles.img}
          />
        </View> */}
        <Text>Список дел пуст.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.todos}>
      <Text style={styles.header}>Мои дела:</Text>
      {content}
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
  emptyListView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgView: {
    width: '70%',
    height: '70%',
    marginBottom: 15,
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
