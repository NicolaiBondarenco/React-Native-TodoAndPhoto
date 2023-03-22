import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  FlatList,
  Text,
} from 'react-native';
import uuid from 'react-native-uuid-generator';
import {CreateItem} from '../Components/CreateItem';
import {TodoItem} from '../Components/TodoItem';

export const Todo = () => {
  const [todoItem, setTodoItem] = useState([]);

  const addItem = value => {
    uuid.getRandomUUID(uuid => {
      const newObj = {
        id: uuid,
        text: value,
      };
      setTodoItem([...todoItem, newObj]);
    });
  };

  const deleteItem = id => setTodoItem(todoItem.filter(el => el.id !== id));

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={{
          uri:
            'https://kartinkin.net/pics/uploads/posts/2022-08/1661466714_47-kartinkin-net-p-krasivie-oboi-s-zakatom-krasivo-49.jpg',
        }}
      >
        <CreateItem addItem={addItem} />
        <FlatList
          data={todoItem}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TodoItem text={item.text} id={item.id} deleteItem={deleteItem} />
          )}
        />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    flex: 1,
  },
});
