import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetails({ navigation, route}) {
  return (
    <View>
      <Text>You are seeing the details of the goal with text {route.params.goal.text} and id {route.params.goal.id}</Text>
    </View>
  )
}