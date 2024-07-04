import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../config/COLORS';

const LocationCard = ({text1,leftOnpress, leftIcon, text2, txt1style, txt2style, rightIcon, containerStyle, rigntOnpress, rightSvg, leftSvg}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity style={styles.iconContainer} onPress={leftOnpress} >
        {leftSvg}
        {leftIcon && <Icon name={leftIcon} size={wp('7%')} color={COLORS.white} />}
      </TouchableOpacity>
        
        <View style={{paddingHorizontal: wp(3), paddingVertical: hp('0.5')}}>
          <Text style={txt1style}>{text1}</Text>
          <Text style={txt2style}>{text2}</Text>
        </View>
      </View>
      <TouchableOpacity style={{ justifyContent: 'center'}} onPress={rigntOnpress} >
        {rightSvg}
        {rightIcon &&<Icon name={rightIcon} size={wp('7%')} color={COLORS.primary1} />}
      </TouchableOpacity>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // flex: 1
  },
  iconContainer: {
    justifyContent: 'center',
    paddingHorizontal: wp(3),
    backgroundColor: COLORS.primary1,
    borderRadius: wp('2%'),
    // alignItems: 'center',
  },
});
