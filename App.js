import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Headers from './components/Headers';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {

const [text, setText] = useState("");
const appName = "My App";
  return (
    <View style={styles.container}>
      <Headers appName={appName}>
        <Text>something</Text>
        </Headers>
        <Input />
        
        <Text>{text}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
