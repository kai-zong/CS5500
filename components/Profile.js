import React from 'react';
import { View, Text, Button } from 'react-native';
import {auth} from '../firebaseSetup/firebaseSetup';
import LocationManager from './LocationManager';
const Profile = ({navigation}) => {
    console.log(auth.currentUser.uid);
    return (
        <View>
            <Text>Profile</Text>
            <LocationManager navigation={navigation}/>
        </View>
    );
};

export default Profile;