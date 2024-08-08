import { useNavigation } from '@react-navigation/native';
import {React, useState} from 'react';
import { View, Text, Button } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

const Map = () => {
    const navigaton = useNavigation();
    const [location, setLocation] = useState(null);
    return (
        <>
            <MapView initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
            style={{flex:1}}
            onPress={(e) => {
                const coords = e.nativeEvent.coordinate;
                setLocation(coords);
            }}>
                {location && <Marker coordinate={location}/>}
            </MapView>
            <Button title="Save Location" 
            onPress={() => {
                navigaton.navigate("Profile", {location})
            }}
            disabled={location? false: true}
            />
        </>
    );
};

export default Map;