import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Heading from './Heading'
import Input from './Input'

class App extends Component {
  constructor() {
    super()
    this.state = {
      inputValue: '',
      todos: [],
      type: 'All'
    }
  }

  /*
    Creates the inputChange method, which takes inputValue as an argument.

    Logs out the inputValue value to make sure the method is working.

    setState() 
      https://reactjs.org/docs/react-component.html#setstate
      It enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state.

    Sets the state with the new value—same as this.setState({inputValue: inputValue}).
  */
  inputChange(inputValue) {
    console.log(' Input Value: ' , inputValue)
    this.setState({ inputValue })
  }

  /*
    <Input >
    Passes inputValue as a property to the Input component.
    Passes inputChange as a property to the Input component.
  */
  render() {
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps='always'
                    style={styles.content}>
          <View>
            <Heading />
            <Input 
              inputValue={this.state.inputValue}
              inputChange={(text) => this.inputChange(text)} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  content: {
    flex: 1,
    paddingTop: 60
  }
})

export default App