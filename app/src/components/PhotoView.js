import {
  StyleSheet,
  Text,
  Touchable,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
// import { Image } from 'react-native-svg'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import {COLORS} from '../../config/COLORS';
import {fonts} from '../../config/Fonts';
import CustomButton from './CustomButton';

const PhotoView = ({photo, onPress}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  // console.log(isSelected);
  const handleImagePress = image => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  return (
    <TouchableOpacity
      onPress={() => handleImagePress(photo)}
      style={styles.container}>
      <ImageBackground source={{uri: photo}} style={styles.photo}>
        <TouchableOpacity style={styles.edit}>
          <Icon name="pencil" size={wp(5)} color={COLORS.blackTxtColor} />
          <Text
            style={{
              fontFamily: fonts.Regular,
              color: COLORS.blackTxtColor,
              marginLeft: wp(0.5),
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </ImageBackground>

      <Modal visible={isModalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <Image source={{uri: selectedImage}} style={styles.fullScreenImage} />
          {/* <Button title="Close" onPress={() => setIsModalVisible(false)} /> */}
          <CustomButton
            text={'Close'}
            onPress={() => setIsModalVisible(false)}
            containerStyle={{
              backgroundColor: COLORS.primary1,
              padding: wp('3'),
              marginTop: wp(3),
            }}
          />
        </View>
      </Modal>

      {/* <Image source={{ uri: photo }} style={styles.photo} /> */}
    </TouchableOpacity>
  );
};

export default PhotoView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: hp('2.5%'),
    // paddingVertical: wp('10%'),
    // paddingHorizontal: wp('10%'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
  },
  photo: {
    width: wp(55.3),
    height: hp(26),
  },
  edit: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: COLORS.primary1,
    top: 10,
    right: 10,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: wp(90),
    height: hp('90%'), 
    borderRadius: wp(10)
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
