import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Component/Search'
export default class App extends React.Component {
  reder(){
    return (
    <Search/>
  );
}
}
