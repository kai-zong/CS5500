import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

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
    <Modal visible={isVisible}>
      <View style={styles.container}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={(text) => setNewText(text)}
        ></TextInput>
        {!isFocused && <Text>Thank you</Text>}
        <View style={{flexDirection: "row"}}>
        <View style={styles.button}><Button title="Confirm" onPress={() => handleConfirm()} disabled={true} /></View>
        <View style={styles.button}><Button title="Cancel" onPress={() => handleCancel()} /></View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    margin: 30,
  }
});

export default Input;
