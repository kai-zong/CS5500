import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {auth} from '../firebaseSetup/firebaseSetup';
import LocationManager from './LocationManager';
const Profile = ({navigation, route}) => {
    console.log(auth.currentUser.uid);
    useEffect(() => {
        console.log('profile', route.params)
    })
    return (
        <View>
            <Text>Profile</Text>
            <LocationManager navigation={navigation}/>
        </View>
    );
};

export default Profile;