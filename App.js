import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity,ScrollView,ImageBackgroundBase, Dimensions } from 'react-native';
import InputTextFields from './components/InputTextFields';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//Components
import Login from './components/Login';
import FirstPage from './components/FirstPage'
const AppNavigator = createStackNavigator(  
  {  
      FirstPage: FirstPage,  
      Login: Login  
  },  
  {  
      initialRouteName: "FirstPage"  
  }  
);  

const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}