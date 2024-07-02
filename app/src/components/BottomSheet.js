import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { COLORS } from '../../config/COLORS';
import CustomButton from './CustomButton';
import { widthPercentageToDP } from 'react-native-responsive-screen';


const BottomSheet = ({isVisible, onClose, children }) => {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    style={styles.modal}
    onSwipeComplete={onClose}
    // swipeDirection="down"
  >
    <View style={styles.container}>
      
     {children}
    </View>
  </Modal>
  )
}

export default BottomSheet

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      container: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: widthPercentageToDP('6%'),
        borderTopRightRadius:  widthPercentageToDP('6%'),
        // paddingTop: widthPercentageToDP('2%'),
        paddingHorizontal: widthPercentageToDP('4%'),
        paddingVertical: widthPercentageToDP('4%'),
      },
      
})