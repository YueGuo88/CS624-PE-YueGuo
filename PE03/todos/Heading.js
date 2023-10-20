// Listing 3.5 Creating the Heading component

/*
  In the app folder, create a file called Heading.js. 
  This will be a stateless component.
*/

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

/*
  RGBA RGBA(Red-Green-Blue-Alpha)
    https://www.w3.org/wiki/CSS/Properties/color/RGBA#:~:text=CSS%20Reference-,RGBA(Red%2DGreen%2DBlue%2DAlpha),the%20opacity%20of%20a%20color.
    The RGB color model is extended in this specification to include “alpha” to allow specification of the opacity of a color.
*/

const Heading = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>
      todos
    </Text>
  </View>
)


const styles = StyleSheet.create({
  header: {
    marginTop: 80
  },
  headerText: {
    textAlign: 'center',
    fontSize: 72,
    color: 'rgba(175, 47, 47, 0.25)',
    fontWeight: '100'
  }
})

export default Heading