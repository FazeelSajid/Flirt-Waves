import {StyleSheet, Text, TouchableOpacity, View, Image, Modal, Button} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../config/Fonts';
import CustomButton from './CustomButton';

const Gender = ({gender, icon, isSelected, onPress, withOutbgIcon, containerStyle, iconSize, photo}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(isSelected);
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        containerStyle,
        isSelected && {borderColor: COLORS.primary1, borderWidth: 1},
      ]}
      focusable={true}
      onPress={() => (photo ?handleImagePress(photo) : onPress(gender) )}>
      {gender && (
        <View
          style={[
            styles.innerContainer,
            isSelected
              ? {backgroundColor: COLORS.primary1}
              : {backgroundColor: COLORS.lightGrayColor},
          ]}>
          <Icon
            name={icon}
            size={30}
            color={isSelected ? COLORS.white : COLORS.darkGrayColor}
          />
        </View>
      )}
      {withOutbgIcon && <Icon name={withOutbgIcon} size={iconSize} color={COLORS.primary1} />}

          {/* <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: selectedImage }} style={styles.fullScreenImage} />
            <CustomButton text={'Close'}  onPress={() => setIsModalVisible(false)} containerStyle={{backgroundColor: COLORS.primary1, padding: wp('3'), marginTop: wp(3)}}   />
        </View>
      </Modal> */}

     {gender && <Text style={styles.gender}>{gender}</Text> } 
    </TouchableOpacity>
  );
};

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('2.5%'),
    // paddingVertical: wp('10%'),
    // paddingHorizontal: wp('10%'),
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
    fontFamily: fonts.Regular,
    color: COLORS.blackTxtColor
  },
  // fullScreenImage: {
  //   width: '90%',
  //   height: '70%',
  // },
  photo: {
    width: '100%',
    height: '100%',
    // margin: 5,
  },
  // modalContainer: {
  //   flex: 1,
  //   backgroundColor: 'rgba(0, 0, 0, 0.9)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
});
