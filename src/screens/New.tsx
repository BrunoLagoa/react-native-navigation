import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerSceneWrapper } from '../components/drawer-scene-wrapper';

export default function New() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <Text style={styles.title}>New</Text>
      </View>
    </DrawerSceneWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
