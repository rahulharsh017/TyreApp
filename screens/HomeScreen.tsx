import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Define the types for navigation props if using TypeScript
interface HomeScreenProps {
  navigation: any; // Adjust according to your navigation type
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={styles.container}>
      {/* TPMS Option */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ShiftScreen')} // Navigate to TKPH screen
      >
        <Image 
          source={require('../assests/tyre.png')} // Use your image path here
          style={styles.image}
        />
        <Text style={styles.buttonText}>TKPH</Text>
      </TouchableOpacity>

      {/* Pressure Option */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LiveData')} // Navigate to LiveData screen
      >
        <Image 
          source={require('../assests/gauge.png')} // Use your image path here
          style={styles.image}
        />
        <Text style={styles.buttonText}>Pressure</Text>
      </TouchableOpacity>

      {/* Analysis Option */}
      <TouchableOpacity style={styles.button}>
        <Image 
          source={require('../assests/chart.png')} // Use your image path here
          style={styles.image}
        />
        <Text style={styles.buttonText}>Analysis</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
    backgroundColor: '#121212', // Dark background color
  },
  button: {
    width: 250, // Increased width for symmetry
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20,
    padding: 20,
    backgroundColor: '#1E1E1E', // Dark button background
    borderRadius: 10, // Rounded corners
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 5 }, // iOS shadow offset
    shadowOpacity: 0.3, // iOS shadow opacity
    shadowRadius: 10, // iOS shadow blur radius
  },
  image: {
    width: 80,
    height: 80, // Adjust the image size as needed
    resizeMode: 'contain', // Keep image aspect ratio
  },
  buttonText: {
    marginTop: 10, // Space between image and text
    fontSize: 24, // Larger font size for better visibility
    color: '#FFFFFF', // White text color for dark theme
    fontWeight: 'bold',
  },
});

export default HomeScreen;
