import React, {useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export const CreateItem = ({addItem}) => {
  const [changeInput, setChangeInput] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inp}
        onChangeText={text => setChangeInput(text)}
        value={changeInput}
        placeholder="Create Item"
      ></TextInput>
      <TouchableOpacity
        onPress={() => {
          changeInput ? addItem(changeInput) : null;
          setChangeInput('');
        }}
        style={styles.btnWrapper}
      >
        <Text style={styles.btn}>Create</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  inp: {
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  btn: {
    color: 'blue',
    textAlign: 'center',
    fontSize: 22,
  },
});
