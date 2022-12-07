import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import React from 'react';
import Login from './screens/Login';
import Home from './screens/Home'

export default function App() {
  const Stack = createStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  </GestureHandlerRootView>
  );
}
