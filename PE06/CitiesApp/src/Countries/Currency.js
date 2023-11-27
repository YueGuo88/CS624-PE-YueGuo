import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Currency = ({ route }) => {
  // Assuming your route.params contain information about the currency
  const { currencyData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.currencyName}>{currencyData.name}</Text>
      <Text style={styles.currencyInfo}>Code: {currencyData.code}</Text>
      <Text style={styles.currencyInfo}>Symbol: {currencyData.symbol}</Text>
      {/* Add more information based on your data structure */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currencyName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  currencyInfo: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Currency;
