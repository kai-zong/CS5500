import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Modal, Button, SafeAreaView } from 'react-native';
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
function handleCancel() {
  setModalVisibility(false)
}
const appName = "My App";
  return (
    <Modal animationType='slide'>
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
      <Headers appName={appName}>
        </Headers>
        <Button onPress={()=>setModalVisibility(true)} title='Add a Goal'></Button>
      </View>
      <View style={styles.bottomContainer}>
        <Input InputHandler={handleInputData} isVisible={modalVisibility} cancelHandler={handleCancel}/>
        <View style={styles.textContainer}>
        <Text style={styles.textStyle}>{text}</Text>
        </View>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center"
  },
  bottomContainer: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "green"
  },
  textStyle:{
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  textContainer:{
    color: "darkblue",
    marginVertical:10,
    backgroundColor: "lightblue"
  }
});
