import { View, Text } from 'react-native'
import React from 'react'

const Headers = (props) => {
    const { appName } = props;
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
    </View>
  )
}

export default Headers
