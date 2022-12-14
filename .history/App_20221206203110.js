import {NavigationContainer} from "@react0navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen/>
        <Stack.Screen/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
