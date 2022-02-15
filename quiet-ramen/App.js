import * as React from 'react';
import { useState } from 'react'; 
import { Text, TextInput, Image, Color, Button, View, 
  TouchableOpacity, ImageBackground, navigation, StyleSheet, StatusBar, TouchableHighlight, ScrollView, Icon, Dimensions} from 'react-native';
import Constants from 'expo-constants';
// You can import from local filesw
import User from './components/user';
import Sport from './components/Sport';
import Balade from './components/Balade';
import Picnic from './components/Piquenique';
import Event from './components/Evenement';
import Fond from './components/Fond';
import MapSport from './components/MapSport';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { NavigationContainer , DefaultTheme, DarkTheme} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

window.name = "Home";

function LoginScreen( {navigation} ) {
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles_login.inputView}>
        <TextInput
          style={styles_login.TextInput}
          placeholder="Username."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View >
      <TouchableOpacity onPress={()=>{navigation.navigate('Home'), window.name = 'Anonyme'}}>
        <Text style={styles_login.forgot_button}>Want to be Anonyme ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles_login.loginBtn} onPress={()=>{navigation.navigate('Home'), window.name = email}}>
        <Text style={styles_login.loginText} >LOGIN</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

function HomeScreen( {navigation} ) {
  navigation.setOptions({ title: window.name});
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <ScrollView style={styles.container} >
           <Text style={styles.Title}>
            E-SCAPE
          </Text>
      </ScrollView>
     </ImageBackground>
    </View>
  );
}

 /*<TouchableHighlight style={styles.paragraph} onPress={()=>navigation.navigate('Sport')}>
          <Sport/>
        </TouchableHighlight>
         <TouchableHighlight style={styles.paragraph} onPress={()=>navigation.navigate('Balade')}>
          <Balade/>
        </TouchableHighlight>
         <TouchableHighlight style={styles.paragraph} onPress={()=>navigation.navigate('Picnic')}>
          <Picnic/>
        </TouchableHighlight>
       <TouchableHighlight style={styles.paragraph} onPress={()=>navigation.navigate('Event')}>
          <Event/>
        </TouchableHighlight>
        */

function SportScreen( {navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <ScrollView style={styles.container}>
        <Text style={styles.Title}>
          E-SCAPE
        </Text>
        <Card style={styles.paragraph}>
          <MapSport/>
        </Card>
      </ScrollView>
     </ImageBackground>
    </View>
  );
}

function BaladeScreen( {navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <ScrollView style={styles.container}>
        <Text style={styles.Title}>
          E-SCAPE
        </Text>
        <Card style={styles.paragraph}>
          <MapSport/>
        </Card>
      </ScrollView>
     </ImageBackground>
    </View>
  );
}

function PiqueniqueScreen( {navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <ScrollView style={styles.container}>
        <Text style={styles.Title}>
          E-SCAPE
        </Text>
        <Card style={styles.paragraph}>
          <MapSport/>
        </Card>
      </ScrollView>
     </ImageBackground>
    </View>
  );
}

function EventScreen( {navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
         <ScrollView style={styles.container}>
        <Text style={styles.Title}>
          E-SCAPE
        </Text>
        <Card style={styles.paragraph}>
          <Event/>
        </Card>
      </ScrollView>
     </ImageBackground>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const MyTheme = {
     ...DefaultTheme,
     colors: {
      ...DefaultTheme.colors,
      card: 'rgb(160, 214, 237)',
     },
   };

const image = { uri: "https://i.pinimg.com/736x/ba/96/51/ba96512a352fc8c7e602a3a31e9192ac.jpg" };

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer theme={MyTheme}>
       <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Sport" component={SportScreen} />
        <Stack.Screen name="Balade" component={BaladeScreen} />
        <Stack.Screen name="Picnic" component={PiqueniqueScreen} />
        <Stack.Screen name="Event" component={EventScreen} />
       </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles_login = StyleSheet.create({
  inputView: {
    backgroundColor: "#FFFDD0",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "left",
    marginLeft: 50,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    marginLeft: 100,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#79f8f8",
    marginLeft: 30,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  paragraph: {
    margin: 22,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Title: {
    margin: 22,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'blue',
  },
  image: {
    height: 700,
    flex: 1,
    justifyContent: "center",
  },
});
