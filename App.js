import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {  createStackNavigator } from "@react-navigation/stack";

import Task from "./src/pages/Task"
import NewTaks from "./src/pages/NewTask"
import Details from './src/pages/Details';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task">
        <Stack.Screen 
        name="Task"
        component={Task}
        options={{
          headerTintColor:"red"
        }}
        
        />
        <Stack.Screen 
        name="NewTask"
        component={NewTaks}
        options={{
          headerTintColor:"red"
        }}
        
        />
        <Stack.Screen 
        name="Details"
        component={Details}
        options={{
          headerTintColor:"red"
        }}
        
        />

        

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
