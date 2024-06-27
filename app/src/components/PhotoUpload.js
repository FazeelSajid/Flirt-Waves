import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { COLORS } from '../../config/COLORS';
import CustomButton from './CustomButton';
import { fonts } from '../../config/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PhotoUpload = ({ photos, setPhotos }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const launchGallery = () => {
    ImageCropPicker.openPicker({
      // width: 300,
      // height: 400,
      cropperActiveWidgetColor: COLORS.primary1, // Example color
      cropperStatusBarColor: COLORS.primary1,
      cropperToolbarColor: COLORS.primary2,
      cropperToolbarWidgetColor: COLORS.blackTxtColor,
      cropperToolbarTitle: 'Edit Photo',
      // cropperCircleOverlay: true,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {
      setPhotos([...photos, image.path]);
    }).catch(error => {
      console.log('ImagePicker Error: ', error.message);
    });
  };

  const launchCam = () => {
    ImageCropPicker.openCamera({
      // width: 300,
      // height: 400,
      cropperActiveWidgetColor: COLORS.primary1, // Example color
      cropperStatusBarColor: COLORS.primary1,
      cropperToolbarColor: COLORS.primary1,
      cropperToolbarWidgetColor: COLORS.primary1,
      cropperToolbarTitle: 'Edit Photo',
      cropperCircleOverlay: true,
      cropping: true,
    }).then(image => {
      setPhotos([...photos, image.path]);
    }).catch(error => {
      console.log('ImagePicker Error: ', error.message);
    });
  };

  const handleImagePress = (image) => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <CustomButton  text={'Take Photo'} onPress={launchGallery} textStyle={{color: COLORS.primary1, fontFamily : fonts.Regular, fontSize: wp('5')}} containerStyl />
      <Button title="Add Photo from Gallery" onPress={launchGallery} />
      <Button title="Add Photo from Camera" onPress={launchCam} />
    </View>
  );
};

export default PhotoUpload;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  photoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  photo: {
    width: 100,
    height: 100,
    margin: 5,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '90%',
    height: '70%',
  },
});
