import React from 'react';
import { View, Text } from 'react-native';
import {auth} from '../firebaseSetup/firebaseSetup';
const Profile = () => {
    console.log(auth.currentUser);
    return (
        <View>
            <Text>Profile</Text>
        </View>
    );
};

export default Profile;