import {LogBox, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Gender = ({gender, icon, isSelected, setSelectedGender}) => {

  
  console.log(isSelected);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, isSelected && {borderColor: COLORS.primary1, borderWidth: 1}]}
      focusable={true}
      onPress={() => setSelectedGender(gender)}
      >
      <View style={[styles.innerContainer, isSelected ? {backgroundColor: COLORS.primary1} : {backgroundColor: COLORS.lightGrayColor}]} >
        <Icon name={icon} size={30} color={isSelected? COLORS.white : COLORS.darkGrayColor} />
      </View>
      <Text style={styles.gender}>{gender}</Text>
    </TouchableOpacity>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    backgroundColor:  COLORS.white,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2.5%'),
    paddingVertical: hp('3.2%'),
    paddingHorizontal: wp('13%'),
    borderRadius: wp('3%'),
  },
  innerContainer: {
    
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('3.5%'),
    // height: hp('2%') ,
    borderRadius: wp('100%'),
  },
  gender: {
    marginTop: wp('5%'),
    fontFamily: 'Lexend',
  },
});
