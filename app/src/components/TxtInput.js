import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
// import COLORS from '../../Config/Colors';
// import { Icon } from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../config/COLORS';

const TxtInput = ({
  style,
  rightIcon,
  placeholder,
  rightIconSize,
  rightIconColor,
  keyboardType,
  onChangeText,
  value,
  onBlur,
  multiline,
  leftIcon,
  leftIconSize,
  leftIconColor,
  secureTextEntry
}) => {

  const [isPasswordVisible, setIsPasswordVisible] = useState(!secureTextEntry);

  const [isfocused, setFocused] = useState(false);


  const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={[styles.searchContainer, style, isfocused && styles.focused]}>
      <Icon name={rightIcon} size={rightIconSize} color={rightIconColor} />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        selectionColor={COLORS.primary1}
        keyboardType={keyboardType}
        onFocus={()=> setFocused(true)}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        multiline={multiline}
      />
       {secureTextEntry && (
                <TouchableOpacity onPress={togglePasswordVisibility} style={styles.icon}>
                <Icon name={leftIcon} size={leftIconSize} color={leftIconColor} />
              </TouchableOpacity>
            )}
      
    </View>
  );
};

export default TxtInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    // color: COLORS.black,
    fontFamily: 'Lexend',
    color: COLORS.lightTxtColor,
    marginLeft: 5,
    flex: 1,
  },
  focused: {
    borderColor: COLORS.primary1,
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
},
});
