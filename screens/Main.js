import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { Avatar, Card, Title, Paragraph } from "react-native-paper";

const styles = StyleSheet.create({});

export default function Main({}) {
  const [data, setData] = useState([]);
  const [numData, setNumData] = useState();
  const [val, setVal] = useState("");
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://fakerapi.it/api/v1/images?_quantity=${numData}`
      );
      setData(res.data.data);
      console.log(res.data.data);
      if(numData == 0){
        setError(true)
      }
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <ScrollView>
    <View style={styles.wrapper}>
      <TextInput
        placeholder="number of fake data"
        // value={val}
        onChangeText={(text) => setNumData(text)}
      />
      <Button title="Get Fake API" onPress={() => fetchData()} />
      {error && <Text>Data not found</Text>}

      {numData > 0 &&(

        data.map((o, i) => {
          return (
            <View style={{marginBottom: 30}}>
            <Card key={i}>
              <Card.Content>
                <Title>{o.title}</Title>
                <Paragraph>{o.description}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: o.url }} />
            </Card>
            </View>
          );
        })
      )}
    </View>
    </ScrollView>
  );
}
