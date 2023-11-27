import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

import Cities from './src/Cities/Cities';
import City from './src/Cities/City';
import AddCity from './src/AddCity/AddCity';
import Countries from './src/Countries/Countries'; // Import the Countries component
import Country from './src/Countries/Country'; // Import the Country component
import Currency from './src/Countries/Currency'; // Import the Currency component

import { colors } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CitiesStackScreen({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Cities"
        component={Cities}
        initialParams={{
          cities: route.params.cities,
          addCity: route.params.addCity,
          addLocation: route.params.addLocation,
        }}
      />
      <Stack.Screen
        name="City"
        component={City}
        initialParams={{
          cities: route.params.cities,
          addCity: route.params.addCity,
          addLocation: route.params.addLocation,
        }}
      />
    </Stack.Navigator>
  );
}

function CountriesStackScreen({ navigation, route }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Countries"
        component={Countries}
        initialParams={{
          // Pass any required initial params for Countries
        }}
      />
      <Stack.Screen
        name="Country"
        component={Country}
        initialParams={{
          // Pass any required initial params for Country
        }}
      />
      <Stack.Screen
        name="Currency"
        component={Currency}
        initialParams={{
          // Pass any required initial params for Currency
        }}
      />
    </Stack.Navigator>
  );
}

export default class App extends Component {
  state = {
    cities: [],
  };

  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });
  };

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex((item) => {
      return item.id === city.id;
    });
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1),
    ];
    this.setState({
      cities,
    });
  };

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="CitiesNav"
            initialParams={{
              cities: this.state.cities,
              addCity: this.addCity,
              addLocation: this.addLocation,
            }}
            component={CitiesStackScreen}
          />
          <Tab.Screen
            name="CountriesNav"
            initialParams={{
              // Pass any required initial params for CountriesNav
            }}
            component={CountriesStackScreen}
          />
          <Tab.Screen
            name="AddCity"
            initialParams={{
              cities: this.state.cities,
              addCity: this.addCity,
              addLocation: this.addLocation,
            }}
            component={AddCity}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
