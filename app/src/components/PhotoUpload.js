import React, { useState } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const PhotoUpload = ({ photos, setPhotos }) => {
  const pickImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setPhotos([...photos, uri]);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Add Photo" onPress={pickImage} />
      <View style={styles.photoContainer}>
        {photos.map((photo, index) => (
          <Image key={index} source={{ uri: photo }} style={styles.photo} />
        ))}
      </View>
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
});
