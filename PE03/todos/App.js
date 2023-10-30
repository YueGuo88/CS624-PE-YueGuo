import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Heading from './Heading';
import Input from './Input';

// Custom Button component with styles
const CustomButton = ({ onPress, text, color, backgroundColor }) => (
  <TouchableOpacity style={[styles.customButton, { backgroundColor }]} onPress={onPress}>
    <Text style={[styles.buttonText, { color }]}>{text}</Text>
  </TouchableOpacity>
);

class App extends Component {
  // ... (constructor and other methods)

  // Render the app UI
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <View style={styles.centeredContainer}>
            <Heading />
            <Input inputValue={this.state.inputValue} inputChange={(text) => this.inputChange(text)} />
            <View style={styles.buttonContainer}>
              <CustomButton onPress={() => this.addTodo()} text="Submit" color="white" backgroundColor="#FFC0CB" />
            </View>
            <View style={styles.centeredTodoList}>
              {this.state.todos.map((todo, index) => (
                <View key={index} style={styles.listItem}>
                  <Text style={styles.listTitle}>{todo.title}</Text>
                  <CustomButton
                    onPress={() => this.toggleTodo(index)}
                    text={todo.done ? 'Undo' : 'Done'}
                    color="white"
                    backgroundColor={todo.done ? '#4CAF50' : '#F0F0F0'}
                  />
                  <CustomButton onPress={() => this.deleteTodo(index)} text="Delete" color="white" backgroundColor="#FF5733" />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // ... (existing styles)

  customButton: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  listTitle: {
    flex: 1,
    fontSize: 16,
  },
});

export default App;
