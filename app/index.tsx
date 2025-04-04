import React, { useState } from "react"
import { Button, Text, View } from "react-native"

export default function HomeScreen() {
    const [count, setCount] = useState(0);

    return (
        <View>
            <Text>opa</Text>
            <Text>Contamento: {count}</Text>
            <Button title = "Aumente" onPress={() => {}}/>
        </View>

    );


}