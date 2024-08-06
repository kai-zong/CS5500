import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import Headers from "./Headers";
import { useState, useEffect } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { writeToDB, deleteFromDB } from "../firebaseSetup/firebaseHelper";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebaseSetup/firebaseSetup";
import {auth} from '../firebaseSetup/firebaseSetup';
import {query, where} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {storage} from '../firebaseSetup/firebaseSetup';


export default function Home({ navigation }) {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, "goals"), where("owner", "==", auth.currentUser.uid)), (snapshot) => {
      let data = [];
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          data.push({ ...doc.data(), id: doc.id });
          console.log(doc.id, "=>", doc.data());
        });
      }
      setGoals(data);
    }, (error) => {
      console.log("Error reading documents: ", error);
    });

    // Cleanup function to unsubscribe from the listener when the component unmounts
    return () => {unsubscribe()};
  }, []);

  async function retrieveUpLoadImage(uri){
    const response = await fetch(uri);
    try{
      if(!response.ok){
        throw new Error("HTTP error, status = " + response.status)}
        const blob = await response.blob();
        const imageName = uri.substring(uri.lastIndexOf('/') + 1);
const imageRef =  ref(storage, `images/${imageName}`)
const uploadResult = await uploadBytesResumable(imageRef, blob);
        console.log("Full path", uploadResult.metadata.fullPath);
        return uploadResult.metadata.fullPath;
      }
    catch(e){
      console.log(e);
    }

  }

  async function handleInputData(data) {
    console.log(data)
    let uri = "";
    if(data.imageUri){

      uri = await retrieveUpLoadImage(data.imageUri);
    } 
    console.log(uri)
    const newGoal = { text: data.newText, owner: auth.currentUser.uid, imageUri: uri};

    writeToDB(newGoal, "goals");
    setModalVisibility(false);
  }
  function handleCancel() {
    setModalVisibility(false);
  }

  const handlePressGo =(pressedGoal) => { 
    console.log("Go pressed", pressedGoal)
    navigation.navigate('Details', {goal: pressedGoal})}

  const handleDelete = (goalId) => {
    deleteFromDB(goalId, "goals");
  };
  const appName = "My App";
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Headers appName={appName}></Headers>
          <PressableButton
            pressedFunction={() => setModalVisibility(true)}
            componentStyle={{backgroundColor: "lightblue", padding: 10, borderRadius: 10}}
          >
            <Text style={styles.textStyle}>Add a Goal</Text>
          </PressableButton>
        </View>
        <View style={styles.bottomContainer}>
          <Input
            InputHandler={handleInputData}
            isVisible={modalVisibility}
            cancelHandler={handleCancel}
          />

          {/* {goals.length === 0 ? (
            <Text>Please Add a Goal</Text>
          ) : (
            <ScrollView>
             
              {goals.map((goal) => { return  <View style={styles.textContainer} key={goal.id}>
                  <Text style={styles.textStyle}>{goal.text}</Text>
                </View>;
              })}
            </ScrollView>
          )} */}

          <FlatList
  renderItem={({ item }) => (
    <GoalItem goal={item} deleteHandler={handleDelete} navigation={navigation}/>
  )}
  data={goals}
/>

          
        </View>
        <StatusBar style="auto" />
      </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  bottomContainer: {
    flex: 4,
    alignItems: "center",
    backgroundColor: "white",
    rowGap: 20,
  },
  textStyle: {
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 10,
  },
  textContainer: {
    color: "darkblue",
    marginVertical: 10,
    backgroundColor: "lightblue",
  },
});
