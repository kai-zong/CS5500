import { View, Text, Button } from "react-native";
import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerStyle: { backgroundColor: "black" },
      headerTintColor: "white"}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "all goals",
          }}
        />
        <Stack.Screen name="Details" component={GoalDetails}
        options={({navigation, route})=>{
          return {title: route.params.goal.text,
            headerRight: ()=>{return <Button title="Warning" onPress={()=>{console.log("Warning")}}/>}
          }
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
