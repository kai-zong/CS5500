import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GoalItem = ({goal, deleteHandler, pressHandler}) => {
    return (<View style={styles.textContainer} >
            <Text style={styles.textStyle}>{goal.text}</Text>
            <Button title='X' onPress={()=>{deleteHandler(goal.id)}} />
            <Button title='i' onPress={()=>{pressHandler()}}/>
        </View>)

}

export default GoalItem;

const styles = StyleSheet.create({
    textStyle: {
        margin: 30,
        fontSize: 70,
        padding: 10,
        borderRadius: 10,
      },
      textContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        color: "darkblue",
        marginVertical: 10,
        backgroundColor: "lightblue",
      },})