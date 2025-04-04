import CustomButtom from "@/components/Title";
import React, { useState } from "react"
import { Button, Text, View } from "react-native"

export default function HomeScreen() {
    const STARTVALUE = 0;
    const [count, setCount] = useState(0);

    function alterarCount(value : number){
        setCount(count + value);
    }

    return (
        <View>
            <Text>opa</Text>
            <Text>Contamento: {count}</Text>
            <Button title = "Aumente" onPress={() => {alterarCount(1)}}
            />
            <Button title = "Diminua" onPress={() => {alterarCount(-1)}}
            />
            <Button title = "Reset" onPress={() => {setCount(STARTVALUE)}}
            />
            <CustomButtom title="Real"/>
        </View>

    );


}