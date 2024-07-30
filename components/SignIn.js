import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import { auth } from '../firebaseSetup/firebaseSetup';

const SignIn = ({navigation}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const passToFirebase = async() => {
        try{
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
        }
        catch(e){
            console.error(e);
        }
    }
    return (
        <View>
            <TextInput placeholder="Email" 
            value={email}
            onChangeText = {(changed) => setEmail(changed)}/>
            <TextInput 
            placeholder="Password" 
            secureTextEntry={true}
            value = {password}
            onChangeText={(changedText) => setPassword(changedText)}
            />
            <Button title="Log In" onPress={passToFirebase()}/>
            <Button title="New User? Sign Up"  onPress={() => navigation.replace("SignUp")}/>
        </View>
    );
};

export default SignIn;