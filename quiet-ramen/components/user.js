import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput} from 'react-native';

const Login = () => {
  const [text, setText] = useState('');
  return (
    <View style={{paragraph: 90}}>
      <TextInput
        style={{margin: 10}}
        placeholder=" Username"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
       Login
        <Login/>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 4,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
