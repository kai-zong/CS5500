import { View, Text, Button, Modal, StyleSheet, Image} from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";
import ImageManager from "./ImageManager";

const Input = ({ InputHandler, isVisible, cancelHandler}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [newText, setNewText] = useState("");
  const handleConfirm = () => {
    InputHandler(newText);
    setNewText("");
  };
  const handleCancel = () => {
    cancelHandler();
    setNewText("");
  };
  return (
    console.log(newText),
    <Modal visible={isVisible} transparent={true}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
        <TextInput
          style={{ height: 40, borderColor: "purple", borderWidth: 2}}
          placeholder="Type here"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={(text) => setNewText(text)}
        ></TextInput>
        {!isFocused && <Text>Thank you</Text>}
        <Image source={{"uri":'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}} style={styles.image} alt="A cartoon image of an archery board with an arrow shot in the midpoint"></Image>
        <Image source={require('../res/set_a_target.png')} style={styles.image} alt="A cartoon image of an archery board with an arrow shot in the midpoint"></Image>
        <ImageManager/>
        <View style={{flexDirection: "row"}}>
        <View style={styles.button}><Button title="Confirm" onPress={() => handleConfirm()} /></View>
        <View style={styles.button}><Button title="Cancel" onPress={() => handleCancel()} /></View>
        </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    margin: 30,
  },
  image: {
    height: 100,
    width: 100
  },
  inputContainer: {
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "white",
  }
});

export default Input;
