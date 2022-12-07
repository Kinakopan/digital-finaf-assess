import { NavigationContainer } from "@react0navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import React from 'react';
import Login from './screens/Login';
import Home from './screens/Home'

  const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="starting">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}
