import React from "react";
import { View, Image } from "react-native";

export default function notesScreen(){
    return(
        <View>
            Essas anotações são as minhas, ou as suas?
            <Image source={require("@/assets/images/Escrita.jpg")}></Image>
        </View>
    )

}