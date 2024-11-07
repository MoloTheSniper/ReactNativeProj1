import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';

const App = () => {
  // Retrieve the device's width and height
  const { width, height } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to My Responsive App!</Text>
      <View style={[styles.buttonContainer, { width: width * 0.8 }]}>
        <Button title="Click Me" onPress={() => alert('Button Pressed!')} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});
