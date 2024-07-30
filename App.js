import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import GoalDetails from "./components/GoalDetails";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {auth} from './firebaseSetup/firebaseSetup';
import Profile from "./components/Profile";

const Stack = createNativeStackNavigator();
const AuthStack = <>
  <Stack.Screen name="SignIn" component={SignIn} />
  <Stack.Screen name="SignUp" component={SignUp} />
</>;
const AppStack = <>
  <Stack.Screen
          name="Home"
          component={Home}
          options= { ({navigation}) => {
            return{
            title: "all goals",
            headerRight: ()=>{
              return (
                <Button title="Profile" onPress={()=>{navigation.navigate("Profile")}}/>
              )
            }
          }}}
        />
        <Stack.Screen name="Details" component={GoalDetails}
        options={({navigation, route})=>{
          return {title: route.params? route.params.goal.text: "Goal Details"
          }
        }} />
        <Stack.Screen name="Profile" component={Profile} options={
          {headerRight: ()=> {
            return <Button title="Sign Out" onPress={()=>{signOut(auth)}}/>
          }}
        }/>
</>

export default function App() {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsUserAuthenticated(true);
      } else {
        setIsUserAuthenticated(false);
      }})}, []);
  return (

    <NavigationContainer>
  <Stack.Navigator>
    {isUserAuthenticated ? AppStack : AuthStack}
  </Stack.Navigator>
</NavigationContainer>

  );
}
