import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  // Handle changes in the input field
  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  // Add a new to-do item to the list
  addTodo() {
    if (this.state.inputValue) {
      const newTodo = {
        title: this.state.inputValue,
        completed: false,
      };
      this.setState((prevState) => ({
        inputValue: '',
        todos: [...prevState.todos, newTodo],
      }));
    }
  }

  // Render the app UI
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <View style={styles.centeredContainer}>
            <Heading />
            <Input inputValue={this.state.inputValue} inputChange={(text) => this.inputChange(text)} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={() => this.addTodo()}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.centeredTodoList}>
              {this.state.todos.map((todo, index) => (
                <TouchableOpacity key={index}>
                  <Text>{todo.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  centeredContainer: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  addButton: {
    backgroundColor: '#FFC0CB',
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  centeredTodoList: {
    alignItems: 'center',
  },
});

export default App;
