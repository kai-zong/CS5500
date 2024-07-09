import { View, Text, Button } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native';

const Input = () => {
  const handleConfirm = () => {console.log(text)}
  const[isFocused, setIsFocused] = useState(false)
  const [text, setText] = useState("");
  return (
    <View>
    <TextInput 
    style={{height:40}}
    placeholder='Type here'
    onFocus={()=>setIsFocused(true)}
    onBlur={()=>setIsFocused(false)}
    onChangeText={(text)=>setText(text)}
    ></TextInput>
    {!isFocused && <Text>Thank you</Text>}
    <Button title='Submit' onPress={()=>handleConfirm(text)}/>
    </View>
  )
}

export default Input