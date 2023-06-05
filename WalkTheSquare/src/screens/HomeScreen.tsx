import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getAndMonitorLocation } from '../services/GeoLocationService';
import  MapScreen from '../components/MapView';
import MapView from 'react-native-maps';



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
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

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
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default HomeScreen;
