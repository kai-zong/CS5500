import { View, Text, Button } from "react-native";
import React from "react";
import { setDocInDB } from "../firebaseSetup/firebaseHelper";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ navigation, route }) {
  const { goal } = route.params;
  const [textColor, setTextColor] = React.useState("black");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="warning"
          onPress={() => {
            setDocInDB({ warning: true }, goal.id, "goals");
            setTextColor( "red");
            navigation.setOptions({title: "Warning"})
          }}
        />),
  })}, [navigation])
  return (
    <View>
      {!goal ? (
        <Text style={{color: textColor}}>
          No goal selected
          </Text>
      ) : (
        <Text style={{color: textColor}}>
          You are seeing the details of the goal with text: {goal.text} and id: {goal.id}
        </Text>
      )}
      <Button
        title="More"
        onPress={() => {
          navigation.push("Details", { goal });
        }}
      />
      <GoalUsers id={goal.id}/>
    </View>
  );
}