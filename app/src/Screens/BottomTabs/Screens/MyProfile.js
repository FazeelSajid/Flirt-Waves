import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal,
  StatusBar,
  FlatList,
} from 'react-native';
import BottomSheet, {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Verified from '../../../assets/svgs/verified.svg';
import Love from '../../../assets/svgs/love.svg';
import Fitness from '../../../assets/svgs/fitness.svg';
import Chef from '../../../assets/svgs/chef.svg';
import Mountain from '../../../assets/svgs/mountain.svg';
import Moon from '../../../assets/svgs/moon.svg';
import Smoking from '../../../assets/svgs/smoking.svg';
import Kid from '../../../assets/svgs/kid.svg';
import Chat from '../../../assets/svgs/chat.svg';
import Eating from '../../../assets/svgs/eating.svg';
import Warning from '../../../assets/svgs/Warning.svg';
import Setting from '../../../assets/svgs/setting.svg';

import Icon from 'react-native-vector-icons/Ionicons';
// import Carousel from 'react-native-reanimated-carousel';
// import Animated, {interpolate, Extrapolate} from 'react-native-reanimated';
import PagerView from 'react-native-pager-view';
import PopUpModal from '../../../components/PopUpModal';
import CustomButton from '../../../components/CustomButton';
import {COLORS} from '../../../../config/COLORS';
import {imgs, imgsArray} from '../../../assets/Imgs/Img';
import ContinueWith from '../../../components/ContinueWith';
import {fonts} from '../../../../config/Fonts';
import Pencil from '../../../assets/svgs/pencil.svg';
import ImageCropPicker from 'react-native-image-crop-picker';


const MyProfile = ({
  isVerified = true,
  gender = 'Female',
  height = '153 cm',
  location = 'Chicago, USA',
  distance = '1.3 Km',
  navigation,
}) => {
  // ref
  const bottomSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavourite, setIsfavorite] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [FavoritesModal, setFavoritesModal] = useState(false);
  const [VerifyAccModal, setVerifyAccModal] = useState(false);
  const [photo, setPhoto] = useState(null);

  const launchCam = () => {
    ImageCropPicker.openCamera({
      useFrontCamera: true,
      mediaType: 'video'
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
        setPhoto(image.path);
        // toggleModal()
         navigation.navigate('verified')
      })
      .catch(error => {
        console.log('ImagePicker Error: ', error.message);
      });
  };



  const instructions = [
    'Click the ‘Record’ button below.',
    'Nod your head in a ‘yes’ motion for the entire 5 seconds.',
    'Ensure your face is clearly visible in the video.',
    'Click ‘Submit’ after recording.',
  ];

  const tagsData = [
    {
      id: '1',
      icon: <Love width={wp(6)} height={wp(6)} />,
      text: 'Looking For Relationship',
    },
    {
      id: '2',
      icon: <Fitness width={wp(6)} height={wp(6)} />,
      text: 'Occasional Exercise',
    },
    {
      id: '3',
      icon: <Chef width={wp(6)} height={wp(6)} />,
      text: 'I’m an excellent chef',
    },
    {
      id: '4',
      icon: <Mountain width={wp(6)} height={wp(6)} />,
      text: 'Hiking & backpack',
    },
    {
      id: '5',
      icon: <Moon width={wp(6)} height={wp(6)} />,
      text: 'I’m in bed by midnight',
    },
    {
      id: '6',
      icon: <Smoking width={wp(6)} height={wp(6)} />,
      text: 'Zero Tolerance',
    },
    {
      id: '7',
      icon: <Kid width={wp(6)} height={wp(6)} />,
      text: 'Thanks but no thanks',
    },
    {
      id: '8',
      icon: <Eating width={wp(6)} height={wp(6)} />,
      text: 'A little bit of everything',
    },
  ];

  const renderItem = ({item}) => (
    <ContinueWith
      icon={item.icon}
      text={item.text}
      containerStyle={styles.tag}
      textStyle={styles.tagTxt}
    />
  );

  const handleFavorite = id => {
    // const id = id
    // setIsfavorite(!isFavourite);
    setFavoritesModal(!isFavourite);
  };

  const bottomSheetModalRef = useRef(null);

  // variables
  const modalSnapPoints = useMemo(() => ['100%'], []);
  console.log(modalVisible);

  // callbacks
  const handlePresentModalPress = image => {
    setSelectedImage(image);
    // bottomSheetModalRef.current?.present();
    setModalVisible(true);
  };
  const handleDismissModalPress = () => {
    // setSelectedImage(image);
    // bottomSheetModalRef.current?.dismiss();
    setModalVisible(false);
  };
  const handleModalChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);
  // console.log(isSelected);

  const snapPoints = useMemo(() => [wp(113), wp(190)], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={styles.container}>
        <PopUpModal
          svg={<Warning width={wp(20)} height={wp(20)} />}
          visible={FavoritesModal}
          heading={'Remove'}
          message={'Do you want to remove Rosie from favorites?'}
          textStyle={styles.popUpText}
          row={true}
          btn1Txt={'Cancel'}
          btn1style={{backgroundColor: '#F5BF0333'}}
          btn1TxtStyle={{color: COLORS.primary1}}
          btn2Txt={'Yes, Remove'}
          btnsContainer={{
            flexDirection: 'row',
            paddingHorizontal: wp(20),
            marginTop: wp(8),
          }}
          btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(4)}}
          btn2TxtStyle={{fontSize: wp(4)}}
          btn1Press={() => setFavoritesModal(false)}
          btn2Press={() => {
            setIsfavorite(false);
            setFavoritesModal(false);
          }}
        />
        <PopUpModal
          // svg={<Warning width={wp(20)} height={wp(20)} />}
          visible={VerifyAccModal}
          heading={'Instructions'}
          message={'Verify your identity with a quick 5-second video'}
          textStyle={styles.popUpText}
          // row={true}
          btn1Txt={'Ok'}
          btn1style={{backgroundColor: COLORS.primary1, marginTop: wp(4)}}
          btn1TxtStyle={{color: COLORS.blackTxtColor}}
          // btn2Txt={'Yes, Remove'}
          // btnsContainer={{
          //   flexDirection: 'row',
          //   paddingHorizontal: wp(20),
          //   marginTop: wp(8),
          // }}
          // btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(4)}}
          // btn2TxtStyle={{fontSize: wp(4)}}
          btn1Press={() =>{ setVerifyAccModal(false)
            launchCam()
          }}
          // btn2Press={() => {
          //   setIsfavorite(false);
          //   setFavoritesModal(false);
          // }}
        >
          {instructions.map((instruction, index) => (
             <View style={{flexDirection: 'row', marginBottom: wp(2.8), marginLeft: wp(1), alignItems: 'center', justifyContent: 'flex-start' }} key={index} >
             <Text style={{ fontSize: wp(4.5) , color: COLORS.primary1 }}>{`\u25CF`}</Text>
             <Text key={index} style={{fontFamily: fonts.Regular, fontSize: wp(3), marginLeft: wp(3)}}>
                   {instruction}
               </Text>
             </View>
          ))}
        </PopUpModal>
        <ImageBackground
          source={imgs.user1}
          resizeMode="cover"
          style={styles.profileImg}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <CustomButton
              // icon={isFavourite ? 'cards-heart' : 'cards-heart-outline'}
              svg={<Setting width={wp(8)} height={wp(8)} />}
              iconSize={wp(7)}
              iconColor={COLORS.white}
              // containerStyle={[styles.iconContainer]}
              onPress={() => navigation.navigate('setting')}
              pressedRadius={wp('5%')}
            />
          </View>
          {/* <View style={{ alignItems: 'center',}} > */}
          <View style={styles.txtContainer}>
            <Icon name={'location-sharp'} size={wp(3)} color={COLORS.white} />
            <Text style={styles.distanceTxt}>{distance} away</Text>
            {/* </View> */}
          </View>
        </ImageBackground>

        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}>
          <BottomSheetView style={styles.contentContainer}>
            <View style={styles.section1}>
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt}>
                    {'Rosie'}, {20}
                  </Text>
                  {isVerified && (
                    <Verified width={wp('6%')} height={hp('5%')} />
                  )}
                </View>
                <Text style={styles.gender}>
                  {gender} - {height}
                </Text>
                <View style={styles.locationContainer}>
                  <Icon
                    name={'location-sharp'}
                    size={wp(5)}
                    color={COLORS.primary1}
                  />
                  <Text style={styles.locationTxt}>{location}</Text>
                </View>
              </View>
              {/* <View style={{justifyContent: 'flex-start' , backgroundColor: 'green'}}> */}

              <CustomButton
                svg={<Pencil width={wp(4)} height={hp(4)} />}
                text={'Edit'}
                textStyle={{
                  fontFamily: fonts.Regular,
                  color: COLORS.blackTxtColor,
                  marginLeft: wp(2),
                }}
                containerStyle={[styles.iconContainer, ]}
                onPress={() => navigation.navigate('editProfile')}
                pressedRadius={wp('2%')}
              />
              {/* <TouchableOpacity style={styles.edit} onPress={()=> navigation.navigate('editProfile')} >
                  <Icon
                    name="pencil"
                    size={wp(5)}
                    color={COLORS.blackTxtColor}
                  />
                  <Text
                    style={{
                      fontFamily: fonts.Regular,
                      color: COLORS.blackTxtColor,
                      marginLeft: wp(0.5),
                    }}>
                    Edit
                  </Text>
                </TouchableOpacity> */}
              {/* </View> */}
            </View>
            <View style={styles.tagsContainer}>
              <FlatList
                data={tagsData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
              />
            </View>

            <Text style={styles.nameTxt}>Gallery</Text>
            <View style={styles.imgContainer}>
              {imgsArray.map((img, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.img}
                  onPress={() => handlePresentModalPress(index)}>
                  <Image
                    source={img}
                    style={{
                      width: wp(29),
                      height: wp(29),
                    }}
                  />
                </TouchableOpacity>
              ))}
            </View>
            <View style={styles.btnsContainer} >
            <CustomButton
              containerStyle={[
                styles.btn,
                {backgroundColor: '#F5BF0333'}
              ]}
              text={'Delete Account'}
              textStyle={[styles.btnText, {color:COLORS.primary1 }]}
              onPress={() => navigation.navigate('report')}
              pressedRadius={wp(3)}
            />
            <CustomButton
              containerStyle={[
                styles.btn,
                {backgroundColor: COLORS.primary1}
              ]}
              text={'Verify Account'}
              textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
              onPress={() => {
                setVerifyAccModal(true)
                console.log(VerifyAccModal);
              }}
              pressedRadius={wp(3)}
            />

            </View>
            
          </BottomSheetView>
          {/* <BottomSheetModal
      ref={bottomSheetModalRef}
      index={0}
      snapPoints={modalSnapPoints}
      onChange={handleModalChanges}
      
> */}
          <Modal visible={modalVisible} animationType="slide">
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
            <View style={styles.modalContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: wp(5),
                }}>
                <CustomButton
                  icon={'close'}
                  iconSize={wp(7)}
                  iconColor={COLORS.blackTxtColor}
                  onPress={() => handleDismissModalPress()}
                  containerStyle={{
                    marginTop: wp(3),
                  }}
                />
              </View>
              <View style={{flex: 1}}>
                <PagerView
                  style={{flex: 1}}
                  initialPage={selectedImage}
                  onPageSelected={event =>
                    setSelectedImage(event.nativeEvent.position)
                  }>
                  {imgsArray.map((item, index) => (
                    <View
                      key={index}
                      style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={item}
                        style={styles.fullScreenImage}
                        resizeMode="contain"
                      />
                    </View>
                  ))}
                </PagerView>
              </View>
              <View style={styles.pagination}>
                {imgsArray.map((_, index) => {
                  const isCurrent = selectedImage === index;
                  return (
                    <View
                      key={index}
                      style={[
                        styles.dot,
                        {
                          width: isCurrent ? wp(5) : wp(2.5),
                          backgroundColor: isCurrent
                            ? COLORS.primary1
                            : COLORS.lightGrayColor,
                          borderColor: isCurrent
                            ? COLORS.primary1
                            : COLORS.lightGrayColor,
                        },
                      ]}
                    />
                  );
                })}
              </View>
            </View>
          </Modal>

          {/* </BottomSheetModal> */}
        </BottomSheet>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp(5),
    // alignItems: 'center',
  },
  profileImg: {
    // flex:1,
    width: wp('100%'),
    height: hp('54.5%'),
    paddingVertical: wp(10),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between',
  },
  section1: {
    flexDirection: 'row',
    // flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {flexDirection: 'row', alignItems: 'center'},
  nameTxt: {
    fontSize: wp(5),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.SemiBold,
    marginRight: wp(3),
  },
  gender: {
    // marginTop: wp(1),
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp(4),
  },
  iconContainer: {
    justifyContent: 'center',
    // padding: wp(2),
    backgroundColor: COLORS.white,
    borderRadius: wp('3%'),
    backgroundColor: COLORS.primary1,
  },
  edit: {
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: COLORS.primary1,
    top: 10,
    right: 10,
    paddingHorizontal: wp(2),
    // paddingVertical: wp(1),
    // borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(2),
  },
  locationTxt: {
    fontSize: wp(3.4),
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
  },
  tagsContainer: {
    flexDirection: 'row',
    // overflow: 'hidden',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: wp(4),
    flexWrap: 'wrap',
  },
  tag: {
    borderWidth: wp(0.1),
    borderColor: COLORS.lightGrayColor,
    padding: wp(2),
    borderRadius: wp(2),
    marginRight: wp(3),
    marginVertical: wp(2),
  },
  tagTxt: {
    fontSize: wp(3),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Medium,
  },

  img: {
    marginVertical: wp(2),
    borderRadius: wp(2),
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  imgContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: wp(3),
  },
  fullScreenImage: {
    width: wp('100%'),
    height: hp('100%'),
    // borderRadius: wp(10),
    resizeMode: 'contain',
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0, 0, 0, 0.9)',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  btn: {
    paddingVertical: wp('3.5%'),
    borderRadius: wp('3%'),
    marginTop: wp('4%'),
    marginBottom: wp('5%'),
    paddingHorizontal: wp('8%')
  },
  btnText: {
    fontFamily: fonts.Regular,
    fontSize: wp(3.5)
  },
  pagination: {
    flexDirection: 'row',
    // position: 'absolute',
    marginBottom: wp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: wp(2.5),
    borderRadius: wp(1),
    marginHorizontal: wp(1),
    borderWidth: wp(0.5),
  },
  txtContainer: {
    backgroundColor: '#FFFFFF4D',
    color: COLORS.white,
    paddingHorizontal: wp(2),
    paddingVertical: wp(1),
    borderRadius: wp(2),
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
    // flex:1
  },
  distanceTxt: {
    color: COLORS.white,
    fontSize: wp(2.5),
    fontFamily: fonts.Regular,
    marginLeft: wp(2),
  },
  popUpText: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp(3.5),
    marginVertical: wp(3),
  },
  btnsContainer:{
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: wp(2)
  }
});

export default MyProfile;
