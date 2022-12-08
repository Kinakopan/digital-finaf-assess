import {View, Text, Button, Image, TextInput} from 'react-native';
import React from 'react';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';

export default function Login({navigation}) {
  const [text, setText] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [btmText, setbtmText] = useState("");

  // const CreateUser = async () => {
  //     const user = await createUserWithEmailAndPassword(auth, email, password);
  //     console.log("created user", user);
  // }

    const CreateUser = async () => {
      try {
        setEmail("");
        setPassword("");
        const user = await createUserWithEmailAndPassword(auth, email, password);
        console.log(user, "registered");
      } catch(error) {
        console.log(error.message);
      }
  }

  // const SignIn = async () => {
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //     console.log("Sign in", user.user.uid);
  // }

  const SignIn = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user);
      setTimeout(() => {
        navigation.navigate("Home");
      }, 1000)
    } catch(error) {
      console.log(error.message);
    }
  }

  return <View>
    <TextInput
      onChangeText={(text) => setEmail(text)}
      placeholder="Email..."/>

    <TextInput
      onChangeText={(text) => setPassword(text)} placeholder="Password..."/>

    <Button
      onPress={() => {
        SignIn();
      }}
      title="Login"/>

    <Button
      onPress={() => {
        CreateUser();
      }}
      title="Create Account"/>

    <Text>
      {/* {props.btmText} */}
    </Text>

    {/* <Button
      title="Go to Home page"
      onPress={()=> navigation.navigate("Home")}/> */}
  </View>
}
