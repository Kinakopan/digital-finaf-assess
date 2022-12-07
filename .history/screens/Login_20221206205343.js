import {View, Text, Button, Image, TextImput} from 'react-native';

export default function Login({navigation}) {
  return <View>
    <Text>I'm on the Login page</Text>
    <Button
      title="Go to details"
      onPress={() => navigation.navigate('Home')}
    ></Button>
  </View>
}
