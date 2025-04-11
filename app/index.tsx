import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import "react-native";
import {Button, Text, TextInput, View} from "react-native"

export default function HomeScreen() {
    const STARTVALUE = 0;
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Coffee");

    function alterarCount(value : number){
        setCount(count + value);
    }

    return (
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Text>Opa, {name}</Text>
            <Text>Contamento: {count}</Text>
            <Button title = "Aumente" onPress={() => {alterarCount(1)}}
            />
            <Button title = "Diminua" onPress={() => {alterarCount(-1)}}
            />
            <Button title = "Reset" onPress={() => {setCount(STARTVALUE)}}
            />
            <CustomButton title="botão vermei" onPress={() => {setName('Dev ' + count)}}/>

            <TextInput placeholder="Digite" onChangeText={setName}/>

            
        </View>

    );


}