import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../../config/COLORS'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const ContinueWith = () => {
  return (
    <TouchableOpacity style={styles.container} >
      <Text style={styles.text} >Continue With Email</Text>
    </TouchableOpacity>
  )
}

export default ContinueWith

const styles = StyleSheet.create({
    container:{
        backgroundColor:COLORS.white,
        width:wp('100%'),
        // height:'100%',
        justifyContent:'center',
        alignItems:'center',
        // flex: 1/
        paddingVertical: hp('2%'),
        // paddingHorizontal: wp('30%'),
        borderRadius: wp('5%'),
        // flex: 1
    },
    text:{
        color:COLORS.blackTxtColor,
        fontSize:wp('4%'),
        fontFamily:'Lexend',
    }
})