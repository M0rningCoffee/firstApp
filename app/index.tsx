import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen(){
    const router = useRouter();
    return (
        <View>
            <Button title="tabs" onPress={() => router.push("/navigation/tabs")} />
                <Button title="drawer" onPress={() => router.push("/navigation/drawer")} />
                    <Button title="stack" onPress={() => router.push("/navigation/stack")} />
                        <Button title="personagens" onPress={() => router.push("/personagens")}/>

        </View>
        
    )
}