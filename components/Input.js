import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native';

const Input = () => {

  const[isFocused, setIsFocused] = useState(false)
  return (
    <View>
    <TextInput 
    style={{height:40}}
    placeholder='Type here'
    onFocus={()=>setIsFocused(true)}
    onBlur={()=>setIsFocused(false)}
    ></TextInput>
    {!isFocused && <Text>Thank you</Text>}
    </View>
  )
}

export default Input