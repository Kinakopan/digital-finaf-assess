import {View, Text, Button, Image, TextImput} from 'react-native';
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
  return <View>
    <Text>I'm on the Login page</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Home')}
    ></Button>
  </View>
}
