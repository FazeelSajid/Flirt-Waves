import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TxtInput from './TxtInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

const PhoneNumberModal = ({ visible, onClose }) => {

  const phoneNumberSchema = Yup.object().shape({
    phone: Yup
      .string()
      .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
      .required('Phone number is required')
  });

  return (
    <Formik 
      validationSchema={phoneNumberSchema}
      initialValues={{ phone: '' }}
      onSubmit={(values) => {
        console.log(values);
        onClose();
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <Modal
          animationType="fade"
          transparent={true}
          visible={visible}
          onRequestClose={onClose}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}} >
                <Text style={styles.heading}>Update Phone Number</Text>
                <IconButton icon={'close'} size={25} onPress={onClose} />
              </View>
              <Text style={styles.label}>Phone Number</Text>
              <TxtInput 
                keyboardType={'number-pad'}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
              />
              {errors.phone && touched.phone ? (
                <Text style={styles.errorText}>{errors.phone}</Text>
              ) : null}
              <PaperBtn 
                containerStyle={styles.closeButton} 
                textStyle={styles.closeButtonText} 
                onPress={handleSubmit} 
              >
                Update
              </PaperBtn>
            </View>
          </View>
        </Modal>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp('4%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: hp('3%'),
  },
  closeButton: {
    // backgroundColor: '#FF5722',
    borderRadius: wp('5%'),
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  label: {
    color: COLORS.darkTextColor,
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
    fontWeight: '500',
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('2%'),
  },
});

export default PhoneNumberModal;
