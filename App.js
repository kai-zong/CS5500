import { View, Text } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from './components/GoalDetails'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
	<Stack.Navigator initialRouteName='Home'>
		<Stack.Screen name="Home" component={Home} />
		<Stack.Screen name="Details" component={GoalDetails} />
	</Stack.Navigator>
</NavigationContainer>
  )
}