import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../../../../config/COLORS';
import TxtInput from '../../../../components/TxtInput';
import BottomSheet from '../../../../components/BottomSheet';
import Gender from '../../../../components/Gender';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../config/Fonts';
import CustomButton from '../../../../components/CustomButton';
import DatePickr from '../../../../components/DatePickr';
import CustomHeader from '../../../../components/CustomHeader';
import Thumb from '../../../../assets/svgs/Thumb.svg';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const EditProfileInfo = ({navigation}) => {
  const [responses, setResponses] = useState({});
  const [height, setHeight] = useState(165);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const convertToFeetInches = cm => {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}'${remainingInches}"`;
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleInputChange = (questionId, value) => {
    setResponses({...responses, [questionId]: value});
  };
  return (
    <ScrollView style={{flex: 1}}  contentContainerStyle={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={navigation.goBack}
        heading={'Profile Info'}
        headingStyle={{
          fontFamily: fonts.SemiBold,
          color: COLORS.blackTxtColor,
          fontSize: wp(6),
        }}
      />
      <Text style={styles.dob}>Enter Name</Text>

      <TxtInput
        style={styles.TxtInput}
        value={responses['name'] || ''}
        onChangeText={text => handleInputChange('name', text)}
        placeholder="Enter Name"
        placeholderTextColor={COLORS.darkGrayColor}
      />
      <Text style={styles.dob}>Email Address</Text>

      <TxtInput
        style={styles.TxtInput}
        value={responses['email'] || ''}
        onChangeText={text => handleInputChange('email', text)}
        placeholder="Email Address"
        placeholderTextColor={COLORS.darkGrayColor}
      />
      <Text style={styles.dob}>Date Of Birth</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Text style={styles.dateText}>{selectedDate}</Text>
      </TouchableOpacity>
      <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
        {/* <View></View> */}
        <View style={styles.bottomSheetInnerContainer}>
          {/* <DatePicker/> */}
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: wp(2),
            }}>
            <Text style={styles.title}>Date Of Birth</Text>
            <CustomButton
              icon={'close'}
              iconSize={20}
              iconColor={COLORS.blackTxtColor}
              onPress={toggleModal}
              containerStyle={styles.bottomSheetBtn}
            />
          </View>

          <DatePickr setDate={setSelectedDate} toggleModal={toggleModal} />
        </View>
      </BottomSheet>
      <Text style={styles.dob}>Select Gender</Text>
      <View style={styles.genderContainer}>
        <Gender
          gender={'Male'}
          icon={'male'}
          isSelected={selectedGender === 'Male'}
          onPress={gender => {
            setSelectedGender(gender);
            handleInputChange('gender', gender);
          }}
          containerStyle={{
            // marginTop: hp('2.5%'),
            paddingVertical: wp('5%'),
            paddingHorizontal: wp('10%'),
            backgroundColor: COLORS.white,
          }}
        />
        <Gender
          gender={'Female'}
          icon={'female'}
          isSelected={selectedGender === 'Female'}
          onPress={gender => {
            setSelectedGender(gender);
            handleInputChange('gender', gender);
          }}
          containerStyle={{
            // marginTop: hp('2.5%'),
            paddingVertical: wp('5%'),
            backgroundColor: COLORS.white,
            paddingHorizontal: wp('10%'),
          }}
        />
      </View>
   
    <Text style={[styles.dob, {  marginTop: wp('3%'), marginBottom: wp('0'),}]}>Height</Text>

      <View style={styles.heightContainer}>
        <MultiSlider
          values={[height]}
          onValuesChange={setHeight}
          min={100}
          max={200}
          step={1}
          selectedStyle={{
            backgroundColor: COLORS.primary1,
          }}
          unselectedStyle={{
            backgroundColor: COLORS.white,
          }}
          trackStyle={{
            height: wp(1.5),
            borderRadius: wp(1),
          }}
          customMarker={props => {
            return (
              <View style={{alignItems: 'center', paddingTop: wp(1)}}>
                <Thumb width={wp(7)} height={wp(7)} />
              </View>
            );
          }}
        />
        <View style={styles.heightBox}>
          <Text style={styles.heightText}>{`${height} cm (${convertToFeetInches(
            height,
          )})`}</Text>
        </View>
      </View>

      <CustomButton text={'Save Changes'} containerStyle={[styles.btnContainer]} textStyle={{fontSize: wp(4.5), fontFamily: fonts.Regular, color: COLORS.blackTxtColor}} />

    </ScrollView>
  );
};

export default EditProfileInfo;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
    backgroundColor: COLORS.primary2,
    paddingBottom: wp(8),
  },
  dob: {
    marginTop: wp('7%'),
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Medium,
    marginBottom: wp('4%'),
  },
  dateText: {
    backgroundColor: COLORS.white,
    padding: wp('4%'),
    borderRadius: wp('2%'),
    // textAlign: 'center',
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
  },
  bottomSheetBtn: {
    alignSelf: 'flex-end',
    // backgroundColor: 'red'
  },
  bottomSheetInnerContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'green',
    paddingHorizontal: wp(3),
    // paddingVertical: wp(3),
    // marginBottom: wp(4),
    // width: '100%'
  },
  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: COLORS.blackTxtColor,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: wp('5%'),
  },
  heightBox: {
    borderColor: COLORS.primary1, // similar to the slider color
    borderWidth: 1,
    borderRadius: wp('2%'),
    padding: wp('2%'),
    // marginBottom: hp('2%'),
    backgroundColor: COLORS.white,
    // marginTop: wp('5'),
  },
  heightText: {
    fontSize: wp('5%'),
    color: '#000000',
    textAlign: 'center',
  },
  heightContainer: {
    paddingHorizontal: wp(3),
  },
  btnContainer: {
    justifyContent: 'center',
    // padding: wp(2),
    borderRadius: wp('3%'),
    backgroundColor: COLORS.primary1,
    paddingVertical: wp(2.5), 
    marginBottom: wp(3), 
    marginTop: wp(7), 
  },
});
