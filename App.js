import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './app/src/Screens/authStack/authStack'

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})