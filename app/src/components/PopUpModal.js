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

const PopUpModal = ({ visible, onClose, icon, message, buttonText, svg }) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Warning width={wp('20%')} height={hp('10%')} />
          <Text style={styles.message}>{message}</Text>
          <CustomButton text={buttonText} onPress={onClose} containerStyle={styles.button} textStyle={styles.buttonText} />
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
    width: wp('90%'),
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
    backgroundColor: COLORS.primary1,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('3%'),
    
    // flex: 1
    width: '100%',
  },
  buttonText: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: 'Lexend',
  },
});

export default PopUpModal;
