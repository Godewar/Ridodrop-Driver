import * as Location from 'expo-location';
import { MapPin } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapInterface() {
  const [region, setRegion] = useState({
    latitude: 12.9716,
    longitude: 77.5946,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;
      
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        ...region,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map}
        region={region}
        showsUserLocation={true}
      >
        <Marker coordinate={{
          latitude: region.latitude + 0.001,
          longitude: region.longitude + 0.001
        }}>
          <MapPin size={32} color="red" fill="red" />
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
}); 