import React from "react";
import { View, Text, StyleSheet, Button, Pressable } from "react-native";

const GoalItem = ({ goal, deleteHandler, navigation }) => {
  return (
    <View style={styles.textContainer}>
      <Pressable
      android_ripple={{color: "pink"}}
      style={styles.pressable}
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
  pressable:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  textContainer: {
    color: "darkblue",
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});
