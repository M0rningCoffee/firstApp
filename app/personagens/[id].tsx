import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Detail() {
    const {id} = useLocalSearchParams(); //Pega o id da url
    return(
        <View>
            <Text>Detalhes: {id}</Text>

        </View>    
    );
}