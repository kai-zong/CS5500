import React from 'react';
import { View, Text } from 'react-native';
import {auth} from '../firebaseSetup/firebaseSetup';
import LocationManager from './LocationManager';
const Profile = () => {
    console.log(auth.currentUser.uid);
    return (
        <View>
            <Text>Profile</Text>
            <LocationManager/>
        </View>
    );
};

export default Profile;