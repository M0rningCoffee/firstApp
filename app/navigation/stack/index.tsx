import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function optionsScreen(){
    const router = useRouter();
    return (
        <View>
            Estou nos options
            <Button title="Ir para detalhes" onPress={() => router.push("/navigation/stack/details")} />
        </View>
    );
}