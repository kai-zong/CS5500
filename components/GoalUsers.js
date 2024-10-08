import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState} from "react";
import { writeToDB, readAllDocs } from "../firebaseSetup/firebaseHelper";

export default function GoalUsers({id}) {
    const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUserData() {
        try{
        let usersFromDB = await readAllDocs(`goals/${id}/users`);
        if(usersFromDB.length){
            setUsers(usersFromDB);
            console.log("**************************")
            return;
        }
      const dataResponse = await fetch("https://jsonplaceholder.typicode.com/users");
      if(!dataResponse.ok){
        throw new Error("Error fetching data");
      }
        const data = await dataResponse.json();

        data.forEach(userData => {
            writeToDB(userData, `goals/${id}/users`)
        });
        setUsers(data);
        }
        catch(e){
            console.error("Error fetching data: ", e);
    }}
    fetchUserData();
  }, []);

  
  
  return (
    <View>
      <Text>GoalUsers</Text>
      <FlatList renderItem={({item}) => <Text>{item.name}</Text>} data={users} />
    </View>
  );
}
