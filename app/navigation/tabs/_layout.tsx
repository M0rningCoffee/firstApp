import { Slot, Tabs } from "expo-router";
import React from "react"
import { Ionicons } from "@expo/vector-icons"; 


export default function Layout() {
  return(
    <Tabs screenOptions={{tabBarActiveTintColor: 'brown'}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          tabBarIcon: ({color, size}) => <Ionicons name="cafe-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({color, size}) => <Ionicons name="information-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="bugs"
        options={{
          title: "Bug Bounty",
          tabBarIcon: ({color, size}) => <Ionicons name="bug-outline" size={size} color={color}></Ionicons>
        }}
      />
        <Tabs.Screen
        name="notes"
        options={{
          title: "Anotações",
          tabBarIcon: ({color, size}) => <Ionicons name="document-outline" size={size} color={color}></Ionicons>
        }}
      />
    </Tabs>
    
    
  );
}