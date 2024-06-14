import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TxtInput from './app/src/components/TxtInput';
import {COLORS} from './app/config/COLORS';
import CustomButton from './app/src/components/CustomButton';
import VerificationInput from './app/src/components/VerificationInput';
import CustomHeader from './app/src/components/CustomHeader';
import SettingsItem from './app/src/components/SettingItem';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PopUp from './app/src/components/PopUp';
import Gender from './app/src/components/Gender';
import PopUpModal from './app/src/components/PopUpModal';
import svg from './assets/svg';
import BottomSheet from './app/src/components/BottomSheet';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);

  const handleOnFOcus = () => {
    setFocused(true);
  };
  const handleOnBlur = () => {
    setFocused(false);
  };

  const handleVerificationCodeChange = code => {
    console.log('Verification Code:', code);
  };

  const options = [
    { label: 'Take a Photo', icon: 'camera', onPress: () => console.log('Take a Photo') },
    { label: 'Choose a Photo', icon: 'image', onPress: () => console.log('Choose a Photo') },
  ];

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={{padding: 10, flex: 1, backgroundColor: COLORS.primary2}}>
      {/* <Text style={{fontFamily: 'Lexend'}} >App</Text> */}
      <TxtInput
        placeholder={'Search'}
        onFocus={handleOnFOcus}
        onBlur={handleOnBlur}
        // isfocused={isfocused}
        rightIcon={'search'}
        rightIconSize={17}
        leftIcon={'eye'}
        leftIconColor={COLORS.lightTxtColor}
        leftIconSize={20}
        secureTextEntry={true}
      />

      <VerificationInput
        numberOfInputs={4}
        onChange={handleVerificationCodeChange}
        containerStyle={styles.inputContainer}
        inputStyle={styles.input}
      />

      <CustomHeader
        heading={'Heading'}
        btnTxt={'Button'}
        onpress={() => {}}
        left={'plus'}
        leftIconColor={COLORS.primary1}
        rightIconColor={COLORS.primary1}
        iconSize={20}
      />

      <PopUp
        color={'#04C200'}
        heading={'Success'}
        message={'Password reset successfully!'}
      />

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Gender
          gender={'Male'}
          icon={'male'}
          isSelected={selectedGender === 'Male'}
          setSelectedGender={setSelectedGender}
        />
        <Gender
          gender={'Female'}
          icon={'female'}
          isSelected={selectedGender === 'Female'}
          setSelectedGender={setSelectedGender}
        />
      </View>

      <CustomButton
        icon={'chevron-right'}
        iconSize={wp('5%')}
        iconColor={COLORS.blackTxtColor}
        onPress={toggleModal}
        containerStyle={{
          paddingHorizontal: wp('3%'),
          paddingVertical: wp('3.5%'),
          width: wp('15%'),
          marginTop: wp('3%'),
          borderRadius: wp('2%'),
          backgroundColor: COLORS.primary1,
        }}
      />

      <View>
        {/* <PopUpModal
          visible={modalVisible}
          onClose={toggleModal}
          icon="alert" // You can change this to any Ionicons icon name
          message="We're sorry, but the profile picture you've uploaded does not appear to be a real picture of yourself. In order to maintain a safe and authentic community, we require all users to use a genuine photo."
          buttonText="Ok, I understand"
        /> */}
        <BottomSheet isVisible={modalVisible} onClose={toggleModal} >
          {options.map((item, index)=>{
            return(
              <View key={index} >
                
              </View>
            )
          })}
        </BottomSheet>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderColor: COLORS.primary1, // Black border color
    borderWidth: 2,
  },
});
