import React from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

const Map = () => {
    return (
        <View>
            <MapView initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
            style={{ width: "100%", height: "100%"}}/>
        </View>
    );
};

export default Map;