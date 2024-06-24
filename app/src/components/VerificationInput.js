import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../config/COLORS';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const VerificationInput = ({ numberOfInputs = 4, onChange, containerStyle, inputStyle }) => {

    const [inputValues, setInputValue] = useState(Array(numberOfInputs).fill(''));
    const inputs = useRef([])
    const [focused, setFocused]= useState(false)


    const handleOnChange= ( value, index ) =>{
        const values = [...inputValues];
        values[index] = value;
        setInputValue(values)
        // console.log(inputValues);
        onChange(values.join(''))

        if (value && index < numberOfInputs -1) {
            inputs.current[index + 1].focus()
        }
    }

    const handleKey = (key, index) => {
        if (key === 'Backspace' && index > 0 ) {
            inputs.current[index-1].focus()
        }
        // console.log(key)
    }
    return (
        <View style={[styles.container, containerStyle]}>
            {
                inputValues.map((item, index) => {
                    return (
                        <TextInput
                        key={index}
                        style={[styles.input, focused && styles.focused, ]}
                        value={item}
                        onChangeText={(value) => handleOnChange(value, index)} 
                        maxLength={1}
                        keyboardType='number-pad'
                        ref={(input) => inputs.current[index] = input }
                        onFocus={()=> setFocused(true)}
                        onBlur={()=> setFocused(false)}
                        onKeyPress={({nativeEvent: {key}}) => handleKey(key, index)}
                        />
                    )
                })
            }
        </View>
    )
 
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: wp('12%'),
    height: hp('6%'),
    borderWidth: 1,
    borderColor: '#DEDFE2',
    textAlign: 'center',
    fontSize: 18,
    margin: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  focused: {
    borderColor: COLORS.primary1,
  },
});

export default VerificationInput;
