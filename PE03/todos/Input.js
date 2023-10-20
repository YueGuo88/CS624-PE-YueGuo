import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

/*
  Destructures the inputValue and inputChange props
  From const Input = () => ( ... ) to const Input = ({ inputValue, inputChange }) => ( ... )
  
  You also set the value of the TextInput to be inputValue, so you can later control and reset the TextInput. 
  value={inputValue}
  
  When the value of the TextInput changes, the inputChange function is called, and the value is passed to the parent component to set the state of inputValue.
  onChangeText is a method that will be called every time the value of the TextInput component is changed and the value of the TextInput will be passed.
  onChangeText={inputChange}
*/
const Input = ({ inputValue, inputChange }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder='What needs to be done?'
      placeholderTextColor='#CACACA'
      selectionColor='#666666' 
      onChangeText={inputChange} />
  </View>
)

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 }
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10
  }
})

export default Input