import React, {useState} from "react";
import "react-native";
import { TextInput } from "react-native";

interface prop {
    campo: string;
}

export default function Form({campo} : prop){
    const [nomeUser, setUser] = useState("");
    const [idadeUser, setAge] = useState(0);
    const [cursando, setCurso] = useState("Nenhum");

    return (
        <TextInput placeholder="Digite seu nome: " onChangeText={setUser}/>
        <TextInput placeholder="Digite sua idade: " onChange={setAge}/>
        <TextInput placeholder="Qual o curso que está fazendo? : " onChangeText={setUser}/>
    );

}