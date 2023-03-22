import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export const Error = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Something went wrong! Sorry!</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});
