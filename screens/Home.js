import {View, Text, Button, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useState } from 'react';
import { auth } from '../firebase/firebaseConfig.js';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  textinput: {
    fontSize: 16,
    fontWeight: "bold",
    width: 177,
    height: 45,
    borderRadius: 5,
    textAlign: "left",
    color: "#9A9A9A",
    backgroundColor: "#FFE0E0",
    paddingLeft: 21,
  },
  btnCont: {
    fontSize: 16,
    textAlign: "center",
    width: 246,
    height: 65,
    borderRadius: 10,
    color: "#fff",
    backgroundColor: "#9747FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {

  },
});

export default function Home({navigation}) {
  const [text, setText] = useState("");

  return <View style={styles.wrapper}>
    <TextInput
      style={styles.textinput}
      onChangeText={(text) => setText(text)}
      // value={text}
      placeholder="Placeholder"/>

    <TouchableOpacity
      style={styles.btnCont}>
      <Button
        style={styles.btn}
        color={"#fff"}
        onPress={
            () => {
                text === "password" ? navigation.navigate("Login") : alert(text + " is not correct input to unlock") ;
            }
        }
        title="Unlock"/>
    </TouchableOpacity>
  </View>
}
