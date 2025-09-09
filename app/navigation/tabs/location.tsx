import React, { useEffect, useState } from "react";
import {View, Text} from "react-native"
import * as Location from "expo-location"

export default function location(){
    const [location, setLocation] = useState<Location.LocationObject | null>(null)
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        async function getCurrencyLocation(){
            let {status} = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted'){
                setErrorMsg("Sem Permissão para acessar Localização")
                return;
            }

            let location = await Location.getCurrentPositionAsync({}) 
            setLocation(location)


        }
        
        getCurrencyLocation()
    }, [])

    let text = "waiting..."
    if (errorMsg) {
        text = errorMsg
    } else if (location){
        text = JSON.stringify(location)
    }

    return(
        <View>
            <Text>{text}</Text>
        </View>
    )

}