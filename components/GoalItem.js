import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

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
      <Button
        title="X"
        onPress={() => {
          deleteHandler(goal.id);
        }}
      />

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
  pressedStyle: {
    opacity: 0.5,
    backgroundColor: "pink",
  },
  textContainer: {
    color: "darkblue",
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});
