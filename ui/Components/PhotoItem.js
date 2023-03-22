import React from 'react';
import {TouchableOpacity, StyleSheet, View, Image, Text} from 'react-native';

export const PhotoItem = ({img, id, name, desc, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('FullPhoto', {
          img: img,
          desc: desc,
        })
      }
      style={styles.container}
    >
      <Image style={styles.img} source={{uri: img}} />
      <Text style={styles.desc}> {name} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'black',
    elevation: 6,
    backgroundColor: 'white',
  },
  img: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 10,
  },
  desc: {
    textAlign: 'center',
  },
});
