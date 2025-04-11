import React, {useState} from "react";
import "react-native";
import { TextInput } from "react-native";

interface prop {
    campo: string;
}

export default function Form({campo} : prop){
    const [user, inputUser] = useState("");


    return (
        <TextInput placeholder={campo} onChangeText={inputUser}/>

    );

}