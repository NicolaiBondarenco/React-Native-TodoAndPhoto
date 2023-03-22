import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export const TodoItem = ({text, id, deleteItem}) => {
  console.log(text, id);
  return (
    <TouchableOpacity
      style={styles.container}
      onLongPress={() => deleteItem(id)}
    >
      <Text style={styles.text}> {text} </Text>
      <TouchableOpacity onPress={() => deleteItem(id)}>
        <Text> &#10006; </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 5,
    padding: 10,
  },
  text: {
    flex: 1,
  },
});
