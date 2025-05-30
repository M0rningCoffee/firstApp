import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Button} from "react-native";

export default function List(){
    const router = useRouter();
    return (
        <View>
            <Text>Página do guey</Text>
            <Button title="1- Detalhe" 
            onPress={() => router.push(`/personagens/${1}`)}/>
        </View>
    );

}