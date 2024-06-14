import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TxtInput from './app/src/components/TxtInput';
import {COLORS} from './app/config/COLORS';
import CustomButton from './app/src/components/CustomButton';

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const handleOnFOcus = () => {
    setFocused(true);
  };
  const handleOnBlur = () => {
    setFocused(false);
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
      <CustomButton icon={'plus'} bgColor={COLORS.primary1} />
    </View>
  );
}

const styles = StyleSheet.create({});
