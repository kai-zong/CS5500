import { View, Text, Button, Image } from "react-native";
import React from "react";
import { setDocInDB } from "../firebaseSetup/firebaseHelper";
import { getDownloadURL, ref } from "firebase/storage";
import GoalUsers from "./GoalUsers";
import { useEffect } from "react";
import { storage } from "../firebaseSetup/firebaseSetup";

export default function GoalDetails({ navigation, route }) {
  const { goal } = route.params;
  const [textColor, setTextColor] = React.useState("black");
  const [imageUrl, setImageUrl] = React.useState("");

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

  useEffect (() => {
    async function getImageUrl(){
      try{
        if (route.params){
          const url = await getDownloadURL(ref(storage, route.params.goal.imageUri));
          console.log(url)
        setImageUrl(url);
        }
        
      }
      catch(e){
        console.log(e);
      }
      
    }
    getImageUrl();
  })
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
      {imageUrl && <Image source={{uri: imageUrl}} style={{width: 100, height: 100}}/>}
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