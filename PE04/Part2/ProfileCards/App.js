import React, { Component } from 'react';
import { Platform, Image, StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import update from 'immutability-helper';

const userImage = require('./assets/user.png');

const data = Array.from({ length: 6 }).map((_, index) => ({
  image: userImage,
  name: `Carmen Guo`,
  occupation: 'App Developer',
  description: 'Carmen is a good fashion-related app developer, aiming to give people the best shopping experience.',
  showThumbnail: true,
}));

const ProfileCard = (props) => {
  const { image, name, occupation, description, onPress, showThumbnail } = props;
  let containerStyles = [styles.cardContainer];

  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={containerStyles}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardName}>{name}</Text>
        </View>
        <View style={styles.cardOccupationContainer}>
          <Text style={styles.cardOccupation}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: data,
    };
  }

  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, { [index]: { showThumbnail: { $set: showThumbnail } } }),
    });
  };

  render() {
    const profileCards = this.state.data.map((item, index) => (
      <ProfileCard
        key={`card-${index}`}
        image={item.image}
        name={item.name}
        occupation={item.occupation}
        description={item.description}
        onPress={() => this.handleProfileCardPress(index)}
        showThumbnail={item.showThumbnail}
      />
    ));

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>{profileCards}</View>
      </ScrollView>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: 16,
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 150,
    height: 200,
    marginBottom: 16,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 8,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    width: 60,
    height: 60,
    borderRadius: 35,
    marginTop: 20,
    paddingTop: 8,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 8,
        },
        shadowOpacity: 0.8,
      },
      android: {
        borderWidth: 1,
        borderColor: 'black',
        elevation: 15,
      },
    }),
  },
  cardImage: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -13,
  },
  cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 11,
    marginTop: 10,
    textShadowColor: 'black',
    textShadowOffset: {
      height: 5,
      width: 5,
    },
    textShadowRadius: 3,
  },
  cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    width: '60%',
    paddingBottom: 0,
  },
  cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 2,
    fontSize: 10,
    textAlign: 'center'
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 8,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 8,
    fontSize: 6,
    textAlign: 'left'&'right', // Center-align the text.
  },
  cardThumbnail: {
    transform: [{ scale: 0.3 }],
  },
});
