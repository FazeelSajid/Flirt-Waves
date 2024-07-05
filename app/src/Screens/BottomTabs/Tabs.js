import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Screens/Home'
import Browse from './Screens/Browse'
import Favorites from './Screens/Favorites'
import Messages from './Screens/Messages'
import MyProfile from './Screens/MyProfile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS } from '../../../config/COLORS'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createMaterialTopTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator 
    tabBarPosition='bottom'
    // style={{backgroundColor: 'green', height: '100%'}}
    screenOptions={({route})=>{
      return{
        // tabBarContentContainerStyle : {backgroundColor: ''} ,
      headerShown: false,
      tabBarActiveTintColor: COLORS.primary1,
      tabBarInactiveTintColor: COLORS.darkGrayColor,  
      tabBarAndroidRipple: { borderless: true, color: COLORS.primary2},
      tabBarShowLabel : false,
      // tabBarItemStyle: {} ,
      tabBarIndicatorStyle: {
        backgroundColor: COLORS.primary1, // Change this to your desired color
        height: wp(1),
        top: 0 
      },
      tabBarIcon: ({focused, color, size})=>{
        let iconName;

        if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-roof'
        }
        else if (route.name === 'Browse') {
            iconName = focused? 'compass' : 'compass-outline'
        }
        else if (route.name === 'Favorite') {
            iconName = focused? 'cards-heart' : 'cards-heart-outline'
        }
        else if (route.name === 'Messages') {
            iconName = focused? 'android-messages' : 'android-messages'
        }
        else {
            iconName = focused? 'account-circle' : 'account-circle-outline'
        }
        return <Icon name={iconName} size={25} color={color}  />
    }
    }}} initialRouteName='Favorite'
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Browse' component={Browse} />
      <Tab.Screen name='Favorite' component={Favorites} />
      <Tab.Screen name='Messages' component={Messages} />
      <Tab.Screen name='Account' component={MyProfile} />


    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})