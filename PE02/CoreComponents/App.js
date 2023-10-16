import React from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet, Linking } from 'react-native';

const CoreComponents = () => {
  const coreRequirements = [
    'CS 504 Software Engineering', 'CS 506 Programming for Computing', 'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture', 'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing', 'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning'
  ];

  const depthOfStudyCourses = ['CS 624 Full-Stack Development - Mobile App', 'CS 628 Full-Stack Development - Web App'];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Text style={styles.heading}>MSCS Courses</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
      />

      <CourseList title="Core Requirements (24 credits)" courses={coreRequirements} />
      <CourseList title="Depth of Study Courses (6 credits)" courses={depthOfStudyCourses} />

      <Text style={styles.link} onPress={() => openCityUCatalog()}>
        For more information, visit{' '}
        <Text style={{ color: 'blue' }}>
          CityU's Catalog
        </Text>
      </Text>
    </ScrollView>
  );
};

const CourseList = ({ title, courses }) => {
  // Check if the title is one of the specified titles for the yellow background
  const isYellowBackground = title.includes('Core Requirements') || title.includes('Depth of Study Courses');

  return (
    <View style={[styles.courseList, isYellowBackground && styles.yellowBackground]}>
      <Text style={styles.courseListTitle}>{title}</Text>
      {courses.map((course, index) => (
        <Text key={index}>{course}</Text>
      ))}
    </View>
  );
};

const openCityUCatalog = () => {
  const url = 'https://cityu.smartcatalogiq.com/2022-2023/ay-2022-2023-catalog/';
  Linking.openURL(url).catch(err => console.error('An error occurred: ', err));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  courseList: {
    marginBottom: 20,
    padding: 10,
  },
  courseListTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    backgroundColor: 'yellow',
  },
  link: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default CoreComponents;
