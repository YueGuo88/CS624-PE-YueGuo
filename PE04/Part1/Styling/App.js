// Listing 4.10 Incorporating border properties into the Profile Card
import React, { Component } from 'react';
import { Image, StyleSheet, View, Text} from 'react-native';

/*
    https://icons8.com/icons/set/user
*/
export default class App extends Component  {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image style={styles.cardImage}        
                               source={require('./assets/user.png')}/>
                    </View>
            <Text style={styles.nameText}>Carmen Guo</Text>
                <Text style={styles.roleText}>App Developer</Text>
                   <Text style={styles.descriptionText}>
                       Carmen is a good fashion-related app developer, aiming to give people the best shopping experience.
                    </Text>
                </View>
            </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        paddingTop: 30
    },
    cardImageContainer: {
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardImage: {
        width: 88,
        height: 88,
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30, // Adjust the top margin to control spacing.
        fontSize: 20,
      },
      roleText: {
        color: 'black',
        textDecorationLine: 'underline', // Add underline to the text.
        marginTop: 10,
        fontSize: 17,
      },
      descriptionText: {
        color: 'black',
        marginTop: 30, // Adjust the top margin to control spacing.
        textAlign: 'left'&'right', // Center-align the text.
        marginLeft: 15,
        marginRight: 15,
      },

});