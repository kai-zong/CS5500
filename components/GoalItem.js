import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";
import PressableButton from "./PressableButton";
import { EvilIcons } from '@expo/vector-icons';

const GoalItem = ({ goal, deleteHandler, navigation }) => {
  return (
    <View style={styles.textContainer}>
      <Pressable
      // android_ripple={{color: "pink"}}
      style={({pressed})=>
        [styles.horizontalContainer, pressed && styles.pressedStyle
        ]}
      onPress={() => {
        navigation.navigate('Details', {goal: goal})
      }}>

      <Text style={styles.textStyle}>{goal.text}</Text>
      {/* <Button
        title="X"
        onPress={() => {
          deleteHandler(goal.id);
        }}
      /> */}

      <PressableButton pressedFunction={() => {
          deleteHandler(goal.id);
        }}
        componentStyle={styles.buttonStyle}>
        <EvilIcons name="trash" size={35} color="black" />
      </PressableButton>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  textStyle: {
    margin: 30,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  horizontalContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  buttonStyle: {
    marginLeft: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "pink",
  },
  textContainer: {
    color: "darkblue",
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});
