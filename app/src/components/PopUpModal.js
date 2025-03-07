import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Foundation';
// import { COLORS } from '../../config/COLORS'; // Adjust the path as necessary
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Warning from '../assets/svgs/Warning.svg';
import CustomButton from './CustomButton';
import { fonts } from '../../config/Fonts';
import { COLORS } from '../../config/COLORS';

const PopUpModal = ({
  textStyle,
  heading,
  visible,
  onClose,
  icon,
  message,
  btn1Txt,
  btn2Txt,
  svg,
  children,
  btn2TxtStyle,
  btn1Press,
  btn2Press,
  btn1style,
  btn2style,
  row,
  btn1TxtStyle,
  btnsContainer,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
    >
      <StatusBar backgroundColor={'rgba(0, 0, 0, 0.5)'} />
      <View style={styles.modalOverlay}>
        <View style={[styles.modalContainer, !children && { alignItems: 'center' }]}>
          {svg}
          {heading && <Text style={styles.heading}>{heading}</Text>}
          {message && <Text style={[styles.message, textStyle]}>{message}</Text>}
          {children}
          <View style={[styles.buttonContainer, btnsContainer]}>
            <CustomButton
              text={btn1Txt}
              onPress={btn1Press}
              containerStyle={[styles.button, btn1style]}
              textStyle={[styles.buttonText, btn1TxtStyle]}
              pressedRadius={wp(3)}
            />
            {btn2Txt && (
              <CustomButton
                text={btn2Txt}
                onPress={btn2Press}
                containerStyle={[styles.button, btn2style]}
                textStyle={[styles.buttonText, btn2TxtStyle]}
                pressedRadius={wp(3)}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1, // Ensures the overlay takes up the full screen
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: wp('3%'),
  },
  modalContainer: {
    width: wp('80%'),
    backgroundColor: COLORS.white,
    borderRadius: wp('6%'),
    padding: wp('4%'),
    alignItems: 'center', // Ensures the content inside is centered
    borderWidth: 1,
    borderColor: COLORS.white,
    marginHorizontal: wp('3%'),
    justifyContent: 'center',
  },
  iconContainer: {
    marginBottom: hp('2%'),
  },
  message: {
    fontSize: wp('4%'),
    textAlign: 'center',
    marginBottom: hp('3%'),
    marginTop: hp('1%'), // Adjusted marginTop for better spacing
    color: COLORS.lightTxtColor,
    fontFamily: 'Lexend',
    lineHeight: wp('6%'),
    paddingHorizontal: wp('3%'),
  },
  buttonContainer: {
    // flexDirection: 'row', // Align buttons in a row
    justifyContent: 'space-between', // Space buttons evenly
    marginTop: hp('2%'), // Added marginTop for spacing
    width: '100%', // Ensure the buttons take up the full width of the modal
  },
  button: {
    backgroundColor: COLORS.primary1, // Ensure the button has a background color
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('3%'),
    marginHorizontal: wp('1%'), // Added horizontal margin for spacing between buttons
    // width: 'auto', // Ensure button width is auto
  },
  buttonText: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Regular,
    textAlign: 'center', // Center the button text
  },
  heading: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginTop: hp('3%'),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    textAlign: 'center',
  },
});

export default PopUpModal;
