import {View, Text, Button, Image, TextInput} from 'react-native';
import React from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';

export default function Login({navigation}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const CreateUser = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }
  return <View>
    <Text>I'm on the Login page</Text>
    <TextInput onChangeText={(text) => setEmail(text)} placeholder="email"/>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Home')}
    ></Button>
  </View>
}
