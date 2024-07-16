import { View, Text, Button } from "react-native";
import React from "react";

export default function GoalDetails({ navigation, route }) {
  const { goal } = route.params;

  return (
    <View>
      {!goal ? (
        <Text>No goal selected</Text>
      ) : (
        <Text>
          You are seeing the details of the goal with text: {goal.text} and id: {goal.id}
        </Text>
      )}
      <Button
        title="More"
        onPress={() => {
          navigation.push("Details", { goal });
        }}
      />
    </View>
  );
}