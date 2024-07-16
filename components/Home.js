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
import { useState } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";

export default function Home({ navigation }) {
  // const [text, setText] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [goals, setGoals] = useState([]);
  function handleInputData(data) {
    const newGoal = { text: data, id: Math.random() };
    setGoals((currentGoals) => {
      return [...currentGoals, newGoal];
    });
    setModalVisibility(false);
  }
  function handleCancel() {
    setModalVisibility(false);
  }

  const handlePressGo =(pressedGoal) => { 
    console.log("Go pressed", pressedGoal)
    navigation.navigate('Details', {goal: pressedGoal})}

  const handleDelete = (goalId) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };
  const appName = "My App";
  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topContainer}>
          <Headers appName={appName}></Headers>
          <Button
            onPress={() => setModalVisibility(true)}
            title="Add a Goal"
          ></Button>
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
    <GoalItem goal={item} deleteHandler={handleDelete} pressHandler={handlePressGo}/>
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