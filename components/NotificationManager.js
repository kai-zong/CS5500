import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Notifications from 'expo-notifications';

export async function VerifyPermissions(){
    try{
    const permission = await Notifications.getPermissionsAsync();
    console.log(permission);
    if(permission.status !== "granted"){
        const newPermission = await Notifications.requestPermissionsAsync();
        return newPermission.status;
    }
    return permission.status;}
    catch(e){
        console.log(e);
    }
}
const NotificationManager = () => {
    

    async function scheduleNotificationHandler(){
        try{
        const permission = await VerifyPermissions();
        if(permission !== "granted"){
            return;
        }

        await Notifications.scheduleNotificationAsync({
            content: {
                title: "Goal rReminder",
                body: "Don't forget to add a goal today",
            },
            trigger: {
                seconds: 10,
            }
        })
        ;
    console.log("notification scheduled")}
        catch(e){
            console.log(e);
        }
    } 
    return (
        <View>
            <Button title=" Remind me to add a goal"
            onPress={scheduleNotificationHandler}/>
        </View>
    );
};

export default NotificationManager;