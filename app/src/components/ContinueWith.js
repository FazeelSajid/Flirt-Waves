import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { fonts } from '../../config/Fonts';

const ContinueWith = ({text, icon, bgColor, textStyle, onPress, containerStyle}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        containerStyle,
        icon ? {paddingVertical: wp('1.5%')} : {paddingVertical: wp('4%')},
      ]}
      onPress={onPress}
      >
      {icon}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ContinueWith;

const styles = StyleSheet.create({
  container: {
    // width:wp('100%'),
    // height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // flex: 1,
    // paddingHorizontal: wp('30%'),
    borderRadius: wp('3%'),
    // flex: 1
  },
  text: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Regular,
    marginLeft: wp('2%'),
  },
});
