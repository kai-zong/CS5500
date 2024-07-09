import { View, Text } from 'react-native'
import React from 'react'

const Headers = (props) => {
    const { appName, children } = props;
  return (
    <View>
      <Text>Welcome to {props.appName}</Text>
      {children}
    </View>
  )
}

export default Headers
