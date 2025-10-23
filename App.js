import React from "react";
import { ScrollView } from 'react-native';
import Titulo from "./componentes/Titulo";
import Saudacao from "./componentes/Saudacao";

export default function App(){
  return(
    <ScrollView style={{ padding:20}}>
    <Titulo />
    <Saudacao nome="plk"/>
    <Saudacao nome="plk"/>
    <Saudacao nome="plk"/>




    </ScrollView>

  )
}