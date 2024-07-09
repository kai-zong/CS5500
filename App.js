import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Modal, Button } from 'react-native';
import Headers from './components/Headers';
import { useState } from 'react';
import Input from './components/Input';

export default function App() {

const [text, setText] = useState("");
const [modalVisibility, setModalVisibility] = useState(false);
function handleInputData(data) {
  console.log(data)
  setText(data)
  setModalVisibility(false)
}
const appName = "My App";
  return (
    <Modal animationType='slide'>
    <View style={styles.container}>
      <Headers appName={appName}>
        <Text>something</Text>
        </Headers>
        <Input InputHandler={handleInputData} isVisible={modalVisibility}/>
        
        <Text>{text}</Text>
        <Button onPress={()=>setModalVisibility(true)} title='Add a Goal'></Button>
      <StatusBar style="auto" />
    </View>
    </Modal>
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
