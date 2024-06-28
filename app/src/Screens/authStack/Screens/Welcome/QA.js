import React, {useState}  from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  PermissionsAndroid 
} from 'react-native';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../../../../components/CustomHeader';
import CustomButton from '../../../../components/CustomButton';
import TxtInput from '../../../../components/TxtInput';
import BottomSheet from '../../../../components/BottomSheet';
import DatePicker from 'react-native-date-picker';
import Gender from '../../../../components/Gender';
import {fonts} from '../../../../../config/Fonts';
import PhotoUpload from '../../../../components/PhotoUpload';
import ContinueWith from '../../../../components/ContinueWith';
import Slider from '@react-native-community/slider';
import svg from '../../../../assets/svgs/Svg';
import PopUpModal from '../../../../components/PopUpModal';
import Location from  '../../../../assets/svgs/location.svg'
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import PhotoView from '../../../../components/PhotoView';
import * as Progress from 'react-native-progress';


const questions = [
  {
    id: 1,
    question: 'Tell us about yourself',
    type: 'multi',
    fields: ['name', 'dob', 'gender'],
  },
  {
    id: 2,
    question: 'Whom are you looking for?',
    type: 'choice',
    options: ['Men', 'Women', 'Everyone'],
  },
  {
    id: 3,
    question: 'Add your photos',
    type: 'photo',
  },
  {
    id: 4,
    question: 'Looking for?',
    type: 'choice',
    options: ['A Relationship', 'Nothing Serious', "I'll know when i find it"],
  },
  {
    id: 5,
    question: "What's your height?",
    type: 'slider',
  },
  {
    id: 6,
    question: "What's your exercise habits?",
    type: 'choice',
    options: [
      'Occasional Exercise',
      'Enough Cardio to keep on',
      'Exercise all the time',
    ],
  },
  {
    id: 7,
    question: "What's your cooking skills?",
    type: 'choice',
    options: [
      "I'm a microwave master",
      "I'm a delivery expert",
      'I know a few good recipes',
      "I'm a master chef",
    ],
  },
  {
    id: 8,
    question: 'What two words explain you?',
    type: 'choice',
    options: [
      'Introvert and Lazybones',
      'Natural born go-getter',
      'Hip and laid-back',
    ],
  },
  {
    id: 9,
    question: "What's your nightlife?",
    type: 'choice',
    options: [
      "I'm in bed by midnight",
      "I'm a night owl",
      'I party in moderation',
    ],
  },
  {
    id: 10,
    question: 'Your opinion on smoking',
    type: 'choice',
    options: ['I smoke', 'Not a fan but whatever', 'Zero tolerance'],
  },
  {
    id: 11,
    question: 'What about kids?',
    type: 'choice',
    options: [
      'I love the one I have',
      "I'd like some",
      'I have some but want more',
      'Thanks but no thanks',
    ],
  },
  {
    id: 12,
    question: 'What are your eating habits?',
    type: 'choice',
    options: [
      'A little of everything',
      "Vegon",
      'Flexitarian',
      'Vegetarian',
      "Junk food forever",
      'halal'

    ],
  }
];

const QA = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [locationPop, setLocationPop] = useState(false);
  const [location, setLocation] = useState(null);


  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Handle the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // console.log(currentQuestionIndex);
    } else {
      console.log('User responses:', responses);
      setLocationPop(true)

      // Navigate to the next screen or submit the responses
      // location && navigation.navigate('mainStack', { location }); 
    }
  };

  // Handle the previous question
  const handlePrev = () => {
    if (currentQuestionIndex >= 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  // Handle skipping a question
  const handleSkip = () => {
    handleNext();
  };

  // Handle input change
  const handleInputChange = (questionId, value) => {
    setResponses({...responses, [questionId]: value});
  };

  const date = selectedDate.toLocaleDateString();

  const currentQuestion = questions[currentQuestionIndex];

  const [height, setHeight] = useState(165);

  const convertToFeetInches = cm => {
    const inches = cm / 2.54;
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}'${remainingInches}"`;
  };


  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      if (result === RESULTS.GRANTED) {
        getLocation();
      }
    } else if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      }
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        setLocation(position.coords);
        setLocationPop(false);
        navigation.navigate('mainStack', { location });
      },
      (error) => {
        console.log(error.code, error.message);
        setLocation(false);
      },
      // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };
// console.log(location.coords);
  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('8%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={handlePrev}
      />
      <Text
        style={[
          styles.heading,
          currentQuestion.type === 'choice' ||
            ('photo' || 'slider' && {marginTop: hp('3%')}),
        ]}>
        {currentQuestion.question}
      </Text>
      <ScrollView
        style={currentQuestion.type === 'choice' ? {marginTop: hp('13%')} : ''}>
        {currentQuestion.type === 'multi' && (
          <>
            <TxtInput
              style={styles.TxtInput}
              value={responses['name'] || ''}
              onChangeText={text => handleInputChange('name', text)}
              placeholder="Enter Name"
              placeholderTextColor={COLORS.lightGrayColor}
            />
            <Text style={styles.dob}>Date Of Birth</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
            <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
                <CustomButton
                  icon={'close'}
                  iconSize={20}
                  iconColor={COLORS.blackTxtColor}
                  onPress={toggleModal}
                  containerStyle={styles.bottomSheetBtn}
                />
              <View style={styles.bottomSheetInnerContainer}>
                <DatePicker
                  mode="date"
                  onDateChange={setSelectedDate}
                  open={modalVisible}
                  date={selectedDate}
                  onConfirm={date => {
                    setModalVisible(false);
                    setSelectedDate(date);
                  }}
                  onCancel={() => {
                    setModalVisible(false);
                  }}
                  dividerColor={COLORS.primary1}
                  
                  // style={{
                  //   padding: 0,
                  //   margin: 0,
                  //   // width: wp('100%'),
                  //   // justifyContent: 'space-between',
                  // }}
                  // style={{ backgroundColor: 'red', alignItems: 'center'}}
                  
                />
              </View>
              <CustomButton
                containerStyle={styles.button}
                text={'Save'}
                textStyle={{
                  fontFamily: fonts.Medium,
                  color: COLORS.blackTxtColor,
                }}
                onPress={() => {
                  handleInputChange('dob', date);
                  toggleModal();
                }}
              />
            </BottomSheet>
            <Text style={styles.dob}>Select Gender</Text>
            <View style={styles.genderContainer}>
              <Gender
                gender={'Male'}
                icon={'male'}
                isSelected={selectedGender === 'Male'}
                onPress={gender => {
                  setSelectedGender(gender);
                  handleInputChange('gender', gender);
                }}
                containerStyle={{
                  // marginTop: hp('2.5%'),
                  paddingVertical: wp('5%'),
                  paddingHorizontal: wp('10%'),
                  backgroundColor: COLORS.white,
                }}
              />
              <Gender
                gender={'Female'}
                icon={'female'}
                isSelected={selectedGender === 'Female'}
                onPress={gender => {
                  setSelectedGender(gender);
                  handleInputChange('gender', gender);
                }}
                containerStyle={{
                  // marginTop: hp('2.5%'),
                  paddingVertical: wp('5%'),
                  backgroundColor: COLORS.white,
                  paddingHorizontal: wp('10%'),
                }}
              />
            </View>
          </>
        )}
        {currentQuestion.type === 'choice' &&
          currentQuestion.options.map(option => (
            <ContinueWith
              key={option}
              containerStyle={[
                styles.optionButton,
                responses[currentQuestion.id] === option &&
                  styles.selectedOptionButton,
              ]}
              onPress={() => handleInputChange(currentQuestion.id, option)}
              text={option}
              textStyle={styles.optionText}
            />
          ))}

        {/* /////////////////////////////////////////////// PHOTOS//////////////////////////////////////////////////////// */}
        {currentQuestion.type === 'photo' && (
          <View>
            <Text style={styles.photoDes}>
              Add minimum 1 photo to continue. One of these images should be a
              picture of yourself.
            </Text>
            {/* <Button title="Upload Photo" onPress={toggleModal} /> */}
            <View
              style={{
                flexDirection: 'row',
                marginTop: wp('3%'),
                height: hp('28%'),
                padding: wp('2%'),
              }}>
              <View
                style={{
                  flex: 1,
                  marginRight: wp('2%'),
                }}>
                  {photos[0] ? <PhotoView photo={photos[0]}  /> : <Gender
                  iconSize={wp('14%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />  }
                {/* <Gender
                  iconSize={wp('14%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                /> */}
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  height: ' 100%',
                  gap: wp('2%'),
                  width: wp('27%'),
                }}>
                 {photos[1] ? <PhotoView photo={photos[1]}  /> : <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />  }
                 {photos[2] ? <PhotoView photo={photos[2]}  /> : <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />  }
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                flex: 1,
                height: hp('13%'),
                paddingHorizontal: wp('2%'),
                gap: wp('2%'),
              }}>
             {photos[3] ? <PhotoView photo={photos[3]}  /> : <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[3] && photos[3]}
                  containerStyle={styles.photoContainer}
                />  }
              {photos[4] ? <PhotoView photo={photos[4]}  /> : <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />  }
              {photos[5] ? <PhotoView photo={photos[5]}  /> : <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />  }
            </View>

            <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
              {/* <View style={styles.bottomSheetMainContainer}> */}
              {/* <Text style={styles.heading}>Select Method</Text> */}

              {/* </View> */}

              <CustomButton
                  icon={'close'}
                  iconSize={20}
                  iconColor={COLORS.blackTxtColor}
                  onPress={toggleModal}
                  containerStyle={styles.bottomSheetBtn}
                />
              <View style={styles.bottomSheetInnerContainer}>
                
                <PhotoUpload
                  photos={photos}
                  setPhotos={newPhotos => {
                    setPhotos(newPhotos);
                    handleInputChange(currentQuestion.id, newPhotos);
                  }}
                />
              </View>
              {/* <CustomButton
                containerStyle={styles.button}
                text={'Save'}
                textStyle={{
                  fontFamily: fonts.Medium,
                  color: COLORS.blackTxtColor,
                }}
                onPress={() => {
                  // handleInputChange('dob', date);
                  toggleModal();
                }}
              /> */}
            </BottomSheet>
          </View>
        )}
        {currentQuestion.type === 'slider' && (
          <View style={styles.heightContainer} >
            <View style={styles.heightBox}>
              <Text
                style={styles.heightText}>{`${height} cm (${convertToFeetInches(
                height,
              )})`}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={100}
              maximumValue={220}
              step={1}
              value={height}
              onValueChange={setHeight}
              minimumTrackTintColor={COLORS.primary1}
              maximumTrackTintColor={COLORS.white}
              thumbTintColor={COLORS.primary1}
              thumbImage={require('../../../../assets/svgs/thumb.png')}
              trackStyle={{height: 20}}
              thumbStyle={styles.thumb}
              
            />
          </View>
        )}
      </ScrollView>
      <PopUpModal 
       visible={locationPop}
       svg={<Location width={wp('20%')} height={hp('10%')} />}
       btn1Press={requestLocationPermission}
       icon="alert" // You can change this to any Ionicons icon name
       message='Enable location through which we can provide you with profile who are nearby and meet your preferences.'
       btn1Txt="Use my current location"
       btn1style={{backgroundColor: COLORS.primary1}}
       btn2Txt={'Maybe, later'}
       btn2Press={()=> setLocationPop(false)}
       btn2style={{backgroundColor: COLORS.primary2, width: '100%', marginTop: wp(3)}}
       textStyle ={styles.popStyle}
       btn2TxtStyle={{color: COLORS.primary1}}
      />
      <Progress.Bar  progress={0.3} width={200} />
      <View style={styles.buttonContainer}>
        <Text style={styles.heading}>
          {currentQuestion.id}
          <Text style={styles.questionNumber}>/{questions.length}</Text>
        </Text>
        <CustomButton
          icon={'chevron-right'}
          iconSize={wp('6%')}
          iconColor={COLORS.blackTxtColor}
          onPress={handleNext}
          containerStyle={[styles.button, {flexDirection: 'row'}]}
        />
      </View>
    </View>
  );
};

export default QA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
    backgroundColor: COLORS.primary2,
  },
  heading: {
    fontFamily: fonts.SemiBold,
    fontSize: wp('5%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
  },
  TxtInput: {
    marginTop: wp('10%'),
  },
  dob: {
    marginTop: wp('7%'),
    color: COLORS.primary1,
    fontSize: wp('4%'),
    fontFamily: fonts.Medium,
    marginBottom: wp('4%'),
  },
  dateText: {
    backgroundColor: COLORS.white,
    padding: wp('4%'),
    borderRadius: wp('2%'),
    textAlign: 'center',
    color: COLORS.blackTxtColor,
  },
  bottomSheetBtn: {
    alignSelf: 'flex-end',
    // backgroundColor: 'red'
  },
  continueWith: {
    backgroundColor: COLORS.white,
    marginTop: wp('5%'),
    // paddingVertical: wp('2%'),
  },
  bottomSheetInnerContainer: {
    // alignItems: 'center',
    // backgroundColor: 'green'
    paddingHorizontal: wp(3),
    paddingVertical: wp(3),
    marginBottom: wp(4),
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: wp('5%'),
  },
  optionButton: {
    borderWidth: wp('0.5%'),
    borderColor: COLORS.white,
    borderRadius: wp('1.5%'),
    // padding: wp('2%'),
    marginVertical: wp('3%'),
    paddingVertical: wp('3%'),
    backgroundColor: COLORS.white,
  },
  photoDes: {
    color: COLORS.darkGrayColor,
    fontSize: wp('4%'),
    textAlign: 'center',
    marginTop: wp('5%'),
    marginBottom: wp('10%'),
  },
  photoContainer: {
    borderRadius: wp('4%'),
    backgroundColor: COLORS.white,
  },
  selectedOptionButton: {
    borderColor: COLORS.primary1,
    borderWidth: wp('0.5%'),
    // borderBlockEndColor: COLORS.primary1,
  },
  optionText: {
    textAlign: 'center',
    color: COLORS.darkGrayColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: hp('2%'),
  },
  questionNumber: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
  },
  button: {
    backgroundColor: COLORS.primary1,
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('4%'),
  },
  slider: {
    // width: wp('100%'),
    height: hp('4%'),
    // backgroundColor: 'green'
  },
  heightBox: {
    borderColor: COLORS.primary1, // similar to the slider color
    borderWidth: 1,
    borderRadius: wp('2%'),
    padding: wp('2%'),
    marginBottom: hp('2%'),
    backgroundColor: COLORS.white,
    marginTop: wp('20')
  },
  heightText: {
    fontSize: wp('5%'),
    color: '#000000',
    textAlign: 'center',
  },
  heightContainer:{
    paddingHorizontal: wp(3)
  }, 
  popStyle: {
    fontSize: wp('4%'),
    textAlign: 'center',
    marginBottom: hp('3%'),
    marginTop: hp('3%'),
    color: COLORS.lightTxtColor,
    fontFamily: 'Lexend',
    lineHeight: wp('8%'),
    paddingHorizontal: wp('3%'),
  }
});
