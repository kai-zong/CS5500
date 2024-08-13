import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {auth} from '../firebaseSetup/firebaseSetup';
import LocationManager from './LocationManager';
import NotificationManager from './NotificationManager';
const Profile = ({navigation, route}) => {
    console.log(auth.currentUser.uid);
    useEffect(() => {
        console.log('profile', route.params)
    })
    return (
        <View>
            <Text>Profile</Text>
            <LocationManager navigation={navigation}/>
            <NotificationManager/>
        </View>
    );
};

export default Profile;