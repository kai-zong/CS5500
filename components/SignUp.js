import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function SignUn({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return(
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <TextInput placeholder="Confirm Password" />
            <Button title="Sign Up" />
            <Button title="Registered? Sign In" onPress={navigation.replace('SignIn')}/>
        </View>
    )
}