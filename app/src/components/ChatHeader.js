import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomButton from './CustomButton';
import {fonts} from '../../config/Fonts';

const ChatHeader = ({
  right,
  heading,
  left,
  iconSize,
  leftOnpress,
  rightOnPress,
  headingColor,
  leftIconColor,
  rightIconColor,
  rightText,
  rightTextStyle,
  img,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CustomButton
          icon={left}
          iconSize={iconSize}
          iconColor={leftIconColor}
          onPress={leftOnpress}
          style={styles.iconBtn}
        />
        <Image source={img} style={styles.img} />
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Rosie</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>

      <View style={styles.callContainer}>
        <CustomButton
          icon={'phone'}
          iconSize={wp(7)}
          iconColor={COLORS.primary1}
          onPress={rightOnPress}
          text={rightText}
          textStyle={rightTextStyle}
        />
        <CustomButton
          icon={'video'}
          iconSize={wp(7)}
          iconColor={COLORS.primary1}
          onPress={rightOnPress}
          text={rightText}
          textStyle={rightTextStyle}
        />
      </View>
    </View>
  );
};

export default ChatHeader;

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
  img: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('7%'),
  },
  nameContainer: {
    paddingLeft: wp(2),
  },
  name: {
    color: COLORS.blackTxtColor,
    fontSize: hp(2.2),
    fontFamily: fonts.SemiBold,
  },
  status: {
    color: COLORS.bgColor,
    fontSize: hp(1.7),
    fontFamily: fonts.Regular,
  },
  iconBtn: {
    paddingHorizontal: wp(3),
  },
  callContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(18),
  },
});
