import { useLocalSearchParams } from "expo-router";
import React, { useEffect } from "react";
import { Button, Text, View } from "react-native";

export default function Detail() {
    const {id} = useLocalSearchParams(); //Pega o id da url


    useEffect(() =>{

    })
    
    return(
        <View>
            <Text>Detalhes: {id}</Text>

        </View>    
    );
}