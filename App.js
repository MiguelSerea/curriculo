import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import CurriculoScreen from "./screens/CurriculoScreen";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Currículos" }}
        />
        <Stack.Screen
          name="Curriculo"
          component={CurriculoScreen}
          options={{ title: "Detalhes do Currículo" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}