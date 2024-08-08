import React from 'react';
import { View, Text, Button, Image} from 'react-native';
import * as Location from 'expo-location';
import {useState, useEffect} from 'react';
import {mapsApiKey} from "@env"
import { useRoute } from '@react-navigation/native';



const LocationManager = ({navigation}) => {
      const [response, requestPermission] = Location.useForegroundPermissions();
      const [location, setLocation] = useState();
      async function VerifyPermissions(){
            if(response.granted){
                return true;
            }
            const permissionResponse = await requestPermission();
            return permissionResponse.granted;
      }
      const route = useRoute();
      const locateUserHandler = async () => {
        try {
            const permission = await VerifyPermissions();
            if(!permission){
                Alert.alert("permission not granted")
                return
            }

          const location = await Location.getCurrentPositionAsync();
          console.log(location);
            setLocation({latitude: location.coords.latitude, longitude: location.coords.longitude});
          return location;
        }
        catch (err) {
            console.error(err);
        }
      };

      function chooseLocationHandler(){
       navigation.navigate("Map");
      }

      useEffect(() => {
        if(route.params){
            setLocation(route.params.location);
        }
      },[route])
    return (
        <View>
            <Text>Location Manager</Text>
            <Button title="Get Location" onPress={() => {locateUserHandler()}}/>
              <Button title="Let me choose my location" onPress={chooseLocationHandler}/>
            {location && 
            <Image style={{height: 200, width: 200}} source={{uri:`https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${mapsApiKey}`}}/>}

        </View>
    );
};

export default LocationManager;