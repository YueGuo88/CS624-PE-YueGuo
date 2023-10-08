import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelloWorldApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Yue Guo</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});

export default HelloWorldApp;
