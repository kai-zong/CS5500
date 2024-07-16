import { View, Text } from 'react-native'
import React from 'react'
import Home from './components/Home'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
     <Home />
    </NavigationContainer>
  )
}