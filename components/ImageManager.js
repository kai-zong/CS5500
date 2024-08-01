import { launchCameraAsync } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View, Image, Button } from "react-native";

const ImageManager = () => { 

    const [response, requestPermission] = ImagePicker.useCameraPermissions();
    const [result, setResult] = useState("");
    async function VerifyPermissions(){
        if(response.granted){
            return true;
        }
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
    }
    async function handleImagePicker(){
        try{
            const permission = await VerifyPermissions();
            if(!permission){
                Alert.alert("permission not granted")
                return 
            }
            const taken = await launchCameraAsync();
            setResult(taken.assets[0].uri);
        }
        catch(e){
            console.error(e);
        }
    }

    return (
        <View>
            
            <Button title="Take a picture" onPress={() => {
                handleImagePicker();
            }}/>
            {result && (<Image sourece= {{uri: result}}/>)}
        </View>
    );
};

export default ImageManager;