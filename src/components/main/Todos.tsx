import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, SafeAreaView, View, Image, Dimensions } from 'react-native';
import { MyText } from '../_reusable/MyText';
import { MyTextBold } from '../_reusable/MyTextBold';
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
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get('window').width - 30);

  useEffect(() => {
    const recalcDeviceWidth = () => {
      const newWidth = Dimensions.get('window').width - 30;
      setDeviceWidth(newWidth);
    };
    Dimensions.addEventListener('change', recalcDeviceWidth);
    return () => {
      Dimensions.removeEventListener('change', recalcDeviceWidth);
    };
  }, []);

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
        <MyText>Список дел пуст.</MyText>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ ...styles.todos, width: deviceWidth }}>
      <MyTextBold style={styles.header}>Мои дела:</MyTextBold>
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
