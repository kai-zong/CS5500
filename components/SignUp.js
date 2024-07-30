import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';
import {auth} from '../firebaseSetup/firebaseSetup';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function SignUn({navigation}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");   
    const [confirmPassword, setConfirmPassword] = useState("");

    const passToFirebase = async() => {
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log(user);
        }
        catch(e){
            console.error(e);
        }
    }
    return(


        <View>
            <TextInput placeholder="Email" 
            value ={email}
            onChangeText={(a) => setEmail(a)}/>
            <TextInput placeholder="Password" 
            value={password}
            onChangeText={(a) => {setPassword(a)}
            }/>
            <TextInput placeholder="Confirm Password" 
            value = {confirmPassword}
            onChangeText={(a) => setConfirmPassword(a)}/>
            <Button title="Sign Up" onPress={() => {passToFirebase()}}/>
            <Button title="Registered? Sign In" onPress={() => navigation.replace('SignIn')}/>
        </View>
    )
}