import React from 'react';
import {SafeAreaView, Image, StyleSheet, Text, View} from 'react-native';

export const FullPhoto = params => {
  const {img, desc} = params.route.params;
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.photo} source={{uri: img}} />
      <Text style={styles.text}> {desc} </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  photo: {
    marginTop: 20,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
    height: '60%',
  },
  text: {
    alignSelf: 'center',
    width: '90%',
    textAlign: 'center',
    fontSize: 20,
  },
});
