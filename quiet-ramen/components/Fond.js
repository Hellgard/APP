import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/fond.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 60,
    width: 60,
  }
});