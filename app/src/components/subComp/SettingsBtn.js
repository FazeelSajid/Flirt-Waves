import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import COLORS from '../../Config/Colors'
import { Icon } from 'react-native-paper'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const SettingsBtn = ({onPress, text, icon}) => {
  return (
    <Pressable style={({pressed})=>[styles.container, pressed && styles.pressed]} onPress={onPress} >
      <Text style={styles.text} >{text}</Text>
      {icon && <Icon source={icon} size={25} />}
    </Pressable>
  )
}

export default SettingsBtn

const styles = StyleSheet.create({
    container:{
        backgroundColor: COLORS.cardBgColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: wp('3.2%'),
        borderRadius: wp('2%'),
        
    },
    pressed :{
        opacity: 0.7, borderRadius: 13
    },
    text:{
        color: COLORS.darkTextColor
    }
})