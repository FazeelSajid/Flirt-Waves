import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../config/COLORS';
import {IconButton} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import CustomButton from './CustomButton';

const CustomHeader = ({
  right,
  heading,
  left,
  iconSize,
  leftOnpress,
  rightOnPress,
  headingColor,
  leftIconColor,
  rightIconColor,
  iconColor,
}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        icon={left}
        iconSize={iconSize}
        iconColor={leftIconColor}
        onPress={leftOnpress}
        style={styles.iconBtn}
      />
      <Text style={[styles.heading, headingColor && {color: headingColor}]}>
        {heading}
      </Text>
      <CustomButton
        icon={right}
        size={iconSize}
        iconColor={rightIconColor}
        onPress={rightOnPress}
      />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(2.5),
  },
  heading: {
    color: COLORS.bgColor,
    fontSize: hp(3),
    fontWeight: '600',
    lineHeight: wp(6),
  },
  iconBtn: {},
});
