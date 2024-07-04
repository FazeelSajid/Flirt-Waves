import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React, {Children} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = ({
  containerStyle,
  borderColor,
  onPress,
  mode,
  text,
  textStyle,
  txtColor,
  icon,
  iconSize,
  iconColor,
  pressedRadius,
  svg,
  img,
  imgStyle
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        containerStyle,
        mode && {
          backgroundColor: 'transparent',
          borderColor: borderColor,
          borderWidth: 2,
        },
        pressed && {opacity: 0.5, borderRadius: pressedRadius},
      ]}>
      {/* {svg && svg} */}
      {icon ? (
  <>
    <Icon name={icon} size={iconSize} color={iconColor} />
    {text && <Text style={[textStyle, txtColor]}>{text}</Text>}
  </>
) : text ? (
  <Text style={[textStyle, txtColor]}>{text}</Text>
) : svg ? (
 svg
): (
  <Image source={img} style={imgStyle} />
  
)}

    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: wp('3%'),
    // padding: 8,
    // borderRadius: 4
  },
});
