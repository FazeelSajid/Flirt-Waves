import React, {useCallback, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Modal
} from 'react-native';
import BottomSheet,{
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import {imgs} from '../../../../assets/Imgs/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import svg from '../../../../assets/svgs/Svg';
import Verified from '../../../../assets/svgs/verified.svg';
import Love from '../../../../assets/svgs/love.svg';
import Fitness from '../../../../assets/svgs/fitness.svg';
import Chef from '../../../../assets/svgs/chef.svg';
import Mountain from '../../../../assets/svgs/mountain.svg';
import Moon from '../../../../assets/svgs/moon.svg';
import Smoking from '../../../../assets/svgs/smoking.svg';
import Kid from '../../../../assets/svgs/kid.svg';
import Chat from '../../../../assets/svgs/chat.svg';
import Eating from '../../../../assets/svgs/eating.svg';
import {COLORS} from '../../../../../config/COLORS';
import {fonts} from '../../../../../config/Fonts';
import CustomButton from '../../../../components/CustomButton';
import Icon from 'react-native-vector-icons/Ionicons';
import ContinueWith from '../../../../components/ContinueWith';
import {imgsArray} from '../../../../assets/Imgs/Img';
import Carousel from 'react-native-reanimated-carousel';
import Animated, { interpolate, Extrapolate } from 'react-native-reanimated';


const UserDetails = ({
  isVerified = true,
  gender = 'Female',
  height = '153 cm',
  location = 'Chicago, USA',
  distance='1.3 Km',
  navigation
}) => {
  // ref
  const bottomSheetRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFavourite, setIsfavorite] = useState(false);


  const bottomSheetModalRef = useRef(null);

  // variables
  const modalSnapPoints = useMemo(() => ['100%'], []);

  // callbacks
  const handlePresentModalPress =(image) => {
    setSelectedImage(image);
    bottomSheetModalRef.current?.present();
  }
  const handleModalChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  // console.log(isSelected);
  const handleImagePress = image => {
    setSelectedImage(image);
    setIsModalVisible(true);
  };

  const snapPoints = useMemo(() => [wp(113), wp(190)], []);

  // callbacks
  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
    <View style={styles.container}>
      <ImageBackground
        source={imgs.user1}
        resizeMode="cover"
        style={styles.profileImg}>
          <View style={{flexDirection:'row', justifyContent: 'space-between'}} >
          <CustomButton
                icon={'chevron-left'}
                iconSize={wp(10)}
                iconColor={COLORS.white}
                onPress={() => navigation.goBack()}
                pressedRadius={wp('5%')}
              />
          <CustomButton
                 icon={isFavourite ?  'cards-heart'  : 'cards-heart-outline'}
                iconSize={wp(7)}
                iconColor={COLORS.white}
                containerStyle={[
                  styles.iconContainer,
                  
                ]}
                onPress={() => setIsfavorite(!isFavourite)}
                pressedRadius={wp('5%')}
              />
          </View>
          {/* <View style={{ alignItems: 'center',}} > */}
          <View style={styles.txtContainer}>
          <Icon
                  name={'location-sharp'}
                  size={wp(3)}
                  color={COLORS.white}
                />
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
                {isVerified && <Verified width={wp('6%')} height={hp('5%')} />}
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
            <View style={{alignItems: 'center'}}>
              <CustomButton
                svg={<Chat width={wp(6)} height={wp(6)} />}
                
                containerStyle={[
                  styles.iconContainer,
                  
                ]}
                onPress={() => navigation.navigate('chat')}
                pressedRadius={wp('5%')}
              />
            </View>
          </View>
          <View style={styles.tagsContainer}>
            <ContinueWith
              icon={<Love width={wp(6)} height={wp(6)} />}
              text={'Looking For Relationship'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            <ContinueWith
              icon={<Fitness width={wp(6)} height={wp(6)} />}
              text={'Occasional Exercise'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            {/* </View> */}
            {/* <View style={styles.tagsContainer}> */}
            <ContinueWith
              icon={<Chef width={wp(6)} height={wp(6)} />}
              text={'I’m a excellent chef '}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            <ContinueWith
              icon={<Mountain width={wp(6)} height={wp(6)} />}
              text={'Hiking & backpack'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            {/* </View> */}
            {/* <View style={styles.tagsContainer}> */}
            <ContinueWith
              icon={<Moon width={wp(6)} height={wp(6)} />}
              text={'I’m in bed by midnight'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            <ContinueWith
              icon={<Smoking width={wp(6)} height={wp(6)} />}
              text={'Zero Tolerance'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            {/* </View> */}
            {/* <View style={styles.tagsContainer}> */}
            <ContinueWith
              icon={<Kid width={wp(6)} height={wp(6)} />}
              text={'Thanks but no thanks'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
            <ContinueWith
              icon={<Eating width={wp(6)} height={wp(6)} />}
              text={'A little bit of everything'}
              containerStyle={styles.tag}
              textStyle={styles.tagTxt}
            />
          </View>

          <Text style={styles.nameTxt}>Gallery</Text>
          <View style={styles.imgContainer} >
            {imgsArray.map((img, index) => (
              <TouchableOpacity key={index} style={styles.img} onPress={()=>handlePresentModalPress(index)} >
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
          <CustomButton
              containerStyle={[
                styles.btn,
                {backgroundColor: COLORS.primary1, marginBottom: wp('5%')},
              ]}
              text={'Report & BLock User'}
              textStyle={[styles.btnText, {color: COLORS.blackTxtColor}]}
              onPress={() => navigation.navigate('report')}
            pressedRadius={wp(3)}
            
              
            />
        </BottomSheetView>
        <BottomSheetModal 
        ref={bottomSheetModalRef}
        index={0}
        snapPoints={modalSnapPoints}
        onChange={handleModalChanges}
        >
          <View style={styles.modalContainer}>
            <View style={{flexDirection: 'row', justifyContent:'flex-end', paddingRight: wp(5)}} >
            <CustomButton
            icon={'close'}
            iconSize={wp(7)}
            iconColor={COLORS.blackTxtColor}
            onPress={() => bottomSheetModalRef.current?.dismiss()}
            containerStyle={{
              // backgroundColor: COLORS.primary1,
              // padding: wp('3'),
              marginTop: wp(3),
            }}
          />
            </View>
          {/* <Image source={selectedImage} style={styles.fullScreenImage} /> */}
          <View style={{flex:1,}} >
          <Carousel
        width={wp(100)}
        height={hp(100)}
        // style={{ backgroundColor: 'green'}}
        data={imgsArray}
        renderItem={({ item, index }) => (
          <Image source={item} style={styles.fullScreenImage} />
        )}
        onSnapToItem={(index) => setSelectedImage(index)}
        defaultIndex={selectedImage}
      />
          </View>
          
      <View style={styles.pagination}>
        {imgsArray.map((_, index) => {
          const isCurrent = selectedImage === index;
          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: isCurrent ? wp(5) : wp(2.5),
                  backgroundColor: isCurrent ? COLORS.primary1 : COLORS.lightGrayColor,
                  borderColor: isCurrent ? COLORS.primary1 : COLORS.lightGrayColor,
                },
              ]}
            />
          );
        })}
      </View>
          
        </View>
        </BottomSheetModal>
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
    height: wp('100%'),
    paddingVertical: wp(10),
    paddingHorizontal: wp(5),
    justifyContent: 'space-between'
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
    marginTop: wp(1),
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp(4),
  },
  iconContainer: {
    justifyContent: 'center',
    padding: wp(2),
    backgroundColor: COLORS.white,
    borderRadius: wp('5%'),
    backgroundColor: COLORS.primary1
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(3),
  },
  locationTxt: {
    fontSize: wp(3.4),
    fontFamily: fonts.Regular,
  },
  tagsContainer: {
    flexDirection: 'row',
    // overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  tagTxt: {fontSize: wp(2.7)},

  img: {
    marginVertical: wp(2),
    borderRadius: wp(2),
    backgroundColor: 'green',
    overflow: 'hidden',
  },
  imgContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingVertical: wp(3)
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
    paddingVertical: wp('4%'),
    borderRadius: wp('3%'),
    marginTop: wp('4%'),
  },
  btnText: {
    fontFamily: fonts.Regular,
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
});

export default UserDetails;
