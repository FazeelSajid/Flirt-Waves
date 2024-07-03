import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
import { COLORS } from '../../config/COLORS'; // Adjust the path as necessary
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Warning from '../assets/svgs/Warning.svg';
import CustomButton from './CustomButton';
import { fonts } from '../../config/Fonts';

const PopUpModal = ({ textStyle ,heading ,visible, onClose, icon, message, btn1Txt, btn2Txt, svg, childern,btn2TxtStyle , btn1Press, btn2Press, btn1style, btn2style }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      {/* {childern} */}
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {svg}
          {heading && <Text style={styles.heading}>{heading}</Text>}
          <Text style={textStyle}>{message}</Text>
          {/* <View> */}
          <CustomButton text={btn1Txt} onPress={btn1Press} containerStyle={[styles.button, btn1style]} textStyle={styles.buttonText} pressedRadius={wp(3)} />
          { btn2Txt && <CustomButton text={btn2Txt} onPress={btn2Press} containerStyle={[styles.button, btn2style]} textStyle={[styles.buttonText, btn2TxtStyle]} pressedRadius={wp(3)} />}

          {/* </View> */}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: wp('85%'),
    backgroundColor: COLORS.white,
    borderRadius: wp('6%'),
    padding: wp('5%'),
    alignItems: 'center',
    borderWidth:1,
    borderColor: COLORS.white
  },
  iconContainer: {
    marginBottom: hp('2%'),
  },
  message: {
    fontSize: wp('4%'),
    textAlign: 'center',
    marginBottom: hp('3%'),
    marginTop: hp('3%'),
    color: COLORS.lightTxtColor,
    fontFamily: 'Lexend',
    lineHeight: wp('6%'),
    paddingHorizontal: wp('3%'),
  },
  button: {
    // backgroundColor: COLORS.primary1,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('3%'),
    
    // flex: 1
    width: '100%',
  },
  buttonText: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Regular,
  },
  heading:{
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginTop: hp('4%'),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    // paddingHorizontal: wp('3%'),
    // lineHeight: wp('7%'),
  }
});

export default PopUpModal;
