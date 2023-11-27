import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Country = ({ route }) => {
  // Assuming your route.params contain information about the country
  const { countryData } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.countryName}>{countryData.name}</Text>
      <Text style={styles.countryInfo}>Population: {countryData.population}</Text>
      <Text style={styles.countryInfo}>Capital: {countryData.capital}</Text>
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
  countryName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  countryInfo: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default Country;
