import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <View>
            <TextInput placeholder="Email" 
            value={email}
            onChange={(changed) => setEmail(changed)}/>
            <TextInput 
            placeholder="Password" 
            secureTextEntry={true}
            value = {password}
            onChange={(changedText) => setPassword(changedText)}
            />
            <Button title="Log In" />
            <Button title="New User? Sign Up"  onPress={navigation.replace("SignUp")}/>
        </View>
    );
};

export default SignIn;