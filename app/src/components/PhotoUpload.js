import React, {useState} from 'react';
import {
  View,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import {COLORS} from '../../config/COLORS';
import CustomButton from './CustomButton';
import {fonts} from '../../config/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const PhotoUpload = ({photos, setPhotos, toggleModal}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const launchGallery = () => {
    ImageCropPicker.openPicker({
      // width: 300,
      // height: 400,
      // cropperActiveWidgetColor: COLORS.primary1, // Example color
      // cropperStatusBarColor: COLORS.primary1,
      // cropperToolbarColor: COLORS.primary2,
      // cropperToolbarWidgetColor: COLORS.blackTxtColor,
      // cropperToolbarTitle: 'Edit Photo',
      // cropperCircleOverlay: true,
      // cropping: true,
      mediaType: 'photo',
    })
      .then(image => {
        setPhotos([...photos, image.path]);
        toggleModal()
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error.message);
      });
  };

  const launchCam = () => {
    ImageCropPicker.openCamera({
      useFrontCamera: true,
      // width: 300,
      // height: 400,
      // cropperActiveWidgetColor: COLORS.primary1, // Example color
      // cropperStatusBarColor: COLORS.primary1,
      // cropperToolbarColor: COLORS.primary2,
      // cropperToolbarWidgetColor: COLORS.primary1,
      // cropperToolbarTitle: 'Edit Photo',
      // cropperCircleOverlay: true,
      // cropping: true,
    })
      .then(image => {
        setPhotos([...photos, image.path]);
        toggleModal()
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error.message);
      });
  };

  const handleImagePress = image => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <CustomButton
        text={'Take Photo'}
        onPress={launchCam}

        textStyle={styles.btnTxt}
        containerStyle={{flexDirection: 'row'}}
        icon={'camera-outline'}
        iconColor={COLORS.primary1}
        iconSize={wp("7%")}
      />
      <View style={{backgroundColor: COLORS.lightGrayColor, height: wp(0.3), marginVertical: wp( 4)}} />
      <CustomButton
        text={'Choose Photo'}
        onPress={launchGallery}

        textStyle={styles.btnTxt}
        containerStyle={{flexDirection: 'row'}}
        icon={'image-multiple-outline'}
        iconColor={COLORS.primary1}
        iconSize={wp("7%")}
      />
      {/* <Button title="Add Photo from Gallery" onPress={launchGallery} /> */}
      {/* <Button title="Add Photo from Camera" onPress={launchCam} /> */}
    </View>
  );
};

export default PhotoUpload;

const styles = StyleSheet.create({
  container: {
    // marginVertical: 10,
  },
  btnTxt: {
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    fontSize: wp('5'),
    marginLeft: wp(4)
  },
});
