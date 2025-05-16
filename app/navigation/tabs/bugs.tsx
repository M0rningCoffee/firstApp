import React from "react";
import { Image, View } from "react-native";

export default function bugBountyScreen(){
    return(
        <View>
            Bugs do Bounty
            <Image source={require("@/assets/images/fumiga.jpg")} />
        </View>
    )
}