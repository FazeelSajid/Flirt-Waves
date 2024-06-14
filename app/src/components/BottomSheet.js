import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { COLORS } from '../../config/COLORS';
import CustomButton from './CustomButton';


const BottomSheet = ({isVisible, onClose, children }) => {
  return (
    <Modal
    isVisible={isVisible}
    onBackdropPress={onClose}
    style={styles.modal}
    onSwipeComplete={onClose}
    swipeDirection="down"
  >
    <View style={styles.container}>
     <CustomButton icon={'close'} iconSize={20} iconColor={COLORS.blackTxtColor} onPress={onClose} containerStyle={{alignSelf: 'flex-end'}} />
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
      },
      closeButton: {
        alignSelf: 'flex-end',
      },
})