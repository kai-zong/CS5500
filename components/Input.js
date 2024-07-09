import { View, Text, Button, Modal, StyleSheet } from "react-native";
import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

const Input = ({ InputHandler, isVisible }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [newText, setNewText] = useState("");
  const handleConfirm = () => {
    InputHandler(newText);
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
        <Button title="Submit" onPress={() => handleConfirm()} />
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
});

export default Input;
