import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../BottomTabs/Tabs'
import Chat from './Screens/Others/Chat'

const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='tabs' screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name='tabs' component={Tabs} />
      <Stack.Screen name='chat' component={Chat} />
      
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})