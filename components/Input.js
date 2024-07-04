import { View, Text } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { TextInput } from 'react-native';

const Input = () => {
  return (
    <TextInput 
    style={{height:40}}
    placeholder='Type here'
    ></TextInput>
  )
}

export default Input