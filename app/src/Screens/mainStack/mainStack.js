import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tabs from '../BottomTabs/Tabs'

const Stack = createNativeStackNavigator()
const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName='tabs' screenOptions={{
      headerShown: false
    }} >
      <Stack.Screen name='tabs' component={Tabs} />
      {/* <Stack.Screen name='Browse' component={Browse} />
      <Stack.Screen name='Favourite' component={Favorites} />
      <Stack.Screen name='Messages' component={Messages} />
      <Stack.Screen name='Profile' component={MyProfile} /> */}
    </Stack.Navigator>
  )
}

export default MainStack

const styles = StyleSheet.create({})