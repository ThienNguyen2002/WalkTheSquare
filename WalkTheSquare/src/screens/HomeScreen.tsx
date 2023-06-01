import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAndMonitorLocation } from '../services/GeoLocationService';



//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//const Tab = createBottomTabNavigator();

//Map view and Profile view

const HomeScreen = () => {

  useEffect(() => {
    const startGeofencing = async () => {
      try {
        await getAndMonitorLocation();
      } catch (error) {
        console.error('Error starting geofencing:', error);
      }
    };

    startGeofencing();

}, []);

    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default HomeScreen;
