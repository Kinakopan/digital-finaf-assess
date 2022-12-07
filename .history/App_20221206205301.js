import {NavigationContainer} from "@react0navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import Login from './screens/Login';
import Home from './screens/Home'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="starting">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
