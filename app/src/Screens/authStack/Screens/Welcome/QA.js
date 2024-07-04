import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../../../../components/CustomHeader';
import CustomButton from '../../../../components/CustomButton';
import TxtInput from '../../../../components/TxtInput';
import BottomSheet from '../../../../components/BottomSheet';
// import DatePicker from 'react-native-date-picker';
import Gender from '../../../../components/Gender';
import {fonts} from '../../../../../config/Fonts';
import PhotoUpload from '../../../../components/PhotoUpload';
import ContinueWith from '../../../../components/ContinueWith';
import PopUpModal from '../../../../components/PopUpModal';
import Location from '../../../../assets/svgs/location.svg';
import Warning from '../../../../assets/svgs/Warning.svg';
import Thumb from '../../../../assets/svgs/Thumb.svg';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import PhotoView from '../../../../components/PhotoView';
import DatePickr from '../../../../components/DatePickr';
import MultiSlider from '@ptomasroos/react-native-multi-slider';


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
    isSkipable: true,
  },
  {
    id: 5,
    question: "What's your height?",
    type: 'slider',
    isSkipable: true,
  },
  {
    id: 6,
    question: "What's your exercise habits?",
    type: 'choice',
    isSkipable: true,
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
    isSkipable: true,
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
    isSkipable: true,
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
    isSkipable: true,
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
    isSkipable: true,
    options: ['I smoke', 'Not a fan but whatever', 'Zero tolerance'],
  },
  {
    id: 11,
    question: 'What about kids?',
    type: 'choice',
    isSkipable: true,
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
    isSkipable: true,
    options: [
      'A little of everything',
      'Vegon',
      'Flexitarian',
      'Vegetarian',
      'Junk food forever',
      'halal',
    ],
  },
];

const QA = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [locationPop, setLocationPop] = useState(false);
  const [location, setLocation] = useState(null);
  const [photoPopup, setPhotoPopup] = useState(false);


  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Handle the next question
  const handleNext = () => {
    if (currentQuestion.type === 'photo' && photos.length === 0) {
        setPhotoPopup(true)
    }else{
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        // console.log(currentQuestionIndex);
        console.log(((currentQuestionIndex + 1) / questions.length) * 100);
      } else {
        console.log('User responses:', responses);
        setLocationPop(true);
  
        // Navigate to the next screen or submit the responses
        // location && navigation.navigate('mainStack', { location });
      }
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
  const handleSkip = (questionId) => {
    // if (currentQuestion.id > questions.length-1) {
    //   handleNext()
    //   console.log('next');
    // } else {
    //   setResponses({...responses, [questionId]: 'Skipped'});
    // handleNext();
    // }
    setLocationPop(true);
  };

  // Handle input change
  const handleInputChange = (questionId, value) => {
    setResponses({...responses, [questionId]: value});
  };

  // const date = selectedDate.toLocaleDateString();

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
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      }
    }
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        // console.log(position);
        setLocation(position.coords);
        setLocationPop(false);
        navigation.navigate('mainStack', {location});
      },
      error => {
        console.log(error.code, error.message);
        setLocation(false);
      },
    );
  };
  // console.log(location.coords);
  return (
    <View style={styles.container}>
      {currentQuestion.isSkipable ? <CustomHeader
        left={'chevron-left'}
        iconSize={wp('8%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={handlePrev}
        rightText={'Skip'}
        rightTextStyle={{
          fontFamily: fonts.SemiBold,
          color: COLORS.blackTxtColor,
          fontSize: wp(4.5),
          textDecorationLine: 'underline'
        }}
        rightOnPress={handleSkip}
      /> :
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('8%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={handlePrev}
      />
      }
      <Text
        style={[
          styles.heading,
          // currentQuestion.type != 'choice' || 'photo' ||'slider' && {marginTop: hp('3%')},
        ]}>
        {currentQuestion.question}
      </Text>
      <ScrollView
        style={[currentQuestion.type === 'choice' ? {marginTop: hp('13%')} : '']} contentContainerStyle={{flexGrow :1, justifyContent: 'space-between'}} >
          <View style={{  }} >
        {currentQuestion.type === 'multi' && (
          <>
            <TxtInput
              style={styles.TxtInput}
              value={responses['name'] || ''}
              onChangeText={text => handleInputChange('name', text)}
              placeholder="Enter Name"
              placeholderTextColor={COLORS.darkGrayColor}
            />
            <Text style={styles.dob}>Date Of Birth</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.dateText}>{selectedDate}</Text>
            </TouchableOpacity>
            <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
              {/* <View></View> */}
              <View style={styles.bottomSheetInnerContainer}>
                {/* <DatePicker/> */}
                <View
                  style={{
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    marginBottom: wp(2),
                  }}>
                  <Text style={styles.title}>Date Of Birth</Text>
                  <CustomButton
                    icon={'close'}
                    iconSize={20}
                    iconColor={COLORS.blackTxtColor}
                    onPress={toggleModal}
                    containerStyle={styles.bottomSheetBtn}
                  />
                </View>

                <DatePickr
                  setDate={setSelectedDate}
                  toggleModal={toggleModal}
                />
              </View>
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
                {photos[0] ? (
                  <PhotoView photo={photos[0]} />
                ) : (
                  <Gender
                    iconSize={wp('14%')}
                    withOutbgIcon={'image-sharp'}
                    onPress={toggleModal}
                    // photo={photos[0] && photos[0]}
                    containerStyle={styles.photoContainer}
                  />
                )}
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
                {photos[1] ? (
                  <PhotoView photo={photos[1]} />
                ) : (
                  <Gender
                    iconSize={wp('8%')}
                    withOutbgIcon={'image-sharp'}
                    onPress={toggleModal}
                    // photo={photos[0] && photos[0]}
                    containerStyle={styles.photoContainer}
                  />
                )}
                {photos[2] ? (
                  <PhotoView photo={photos[2]} />
                ) : (
                  <Gender
                    iconSize={wp('8%')}
                    withOutbgIcon={'image-sharp'}
                    onPress={toggleModal}
                    // photo={photos[0] && photos[0]}
                    containerStyle={styles.photoContainer}
                  />
                )}
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
              {photos[3] ? (
                <PhotoView photo={photos[3]} />
              ) : (
                <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[3] && photos[3]}
                  containerStyle={styles.photoContainer}
                />
              )}
              {photos[4] ? (
                <PhotoView photo={photos[4]} />
              ) : (
                <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />
              )}
              {photos[5] ? (
                <PhotoView photo={photos[5]} />
              ) : (
                <Gender
                  iconSize={wp('8%')}
                  withOutbgIcon={'image-sharp'}
                  onPress={toggleModal}
                  // photo={photos[0] && photos[0]}
                  containerStyle={styles.photoContainer}
                />
              )}
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
                  toggleModal={toggleModal}
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
            <PopUpModal
              visible={photoPopup}
              svg={<Warning width={wp('20%')} height={hp('10%')} />}
              btn1Press={() => {
                setPhotoPopup(false);
              }}
              message="Add atleast one photo to continue"
              btn1Txt="Ok"
              btn1style={{backgroundColor: COLORS.primary1}}
              textStyle={[styles.popStyle, {marginBottom: hp(5), marginTop: hp(2)}]}
              btn2TxtStyle={{color: COLORS.primary1}}
              heading={'Add Photo'}

            />
          </View>
        )}
        {currentQuestion.type === 'slider' && (
          <View style={styles.heightContainer}>
            <View style={styles.heightBox}>
              <Text
                style={styles.heightText}>{`${height} cm (${convertToFeetInches(
                height,
              )})`}</Text>
            </View>
            <MultiSlider
            values={[height]}
            onValuesChange={setHeight}
            min={100}
            max={200}
            step={1}
            selectedStyle={{
              backgroundColor: COLORS.primary1,
            }}
            unselectedStyle={{
              backgroundColor: COLORS.white,
            }}
            trackStyle={{
              height: wp(1.5),
              borderRadius: wp(1),
            }}
            // markerStyle={{
            //   height: 14,
            //   width: 20,
            //   backgroundColor: COLORS.primary1,
            //   borderWidth: 0,
            // }}
            customMarker={props => {
              return (
                <View style={{alignItems: 'center',  paddingTop: wp(1)}} >
                   <Thumb width={wp(7)} height={wp(7)} />
                </View>
              );
            }}
            
          />
            {/* <Slider
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
              // thumbStyle={{height: 20, width: 20, borderWidth: 0}}
            /> */}
          </View>
        )} 
</View>
        {/* /////////////////////////////////////////////// Bottom Container////////////////////////////////////////////////// */}
        <View style={{flex: 1, flexGrow: 0}} >
        <View style={styles.buttonContainer}>
        <Text style={styles.heading}>
          {currentQuestion.id}
          <Text style={styles.questionNumber}>/{questions.length}</Text>
        </Text>
        <CustomButton
          icon={'chevron-right'}
          iconSize={wp('8%')}
          iconColor={COLORS.blackTxtColor}
          onPress={handleNext}
          containerStyle={[styles.button]}
          pressedRadius={wp(3)}

        />
      </View>
      <View style={styles.progressBarContainer}>
        <View
          style={[
            styles.progressBar,
            {
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
            },
          ]}
        />
      </View>
        </View>

        
        
      </ScrollView>
      <PopUpModal
        visible={locationPop}
        svg={<Location width={wp('20%')} height={hp('10%')} />}
        btn1Press={requestLocationPermission}
        icon="alert" // You can change this to any Ionicons icon name
        message="Enable location through which we can provide you with profile who are nearby and meet your preferences."
        btn1Txt="Use my current location"
        btn1style={{backgroundColor: COLORS.primary1}}
        btn2Txt={'Maybe, later'}
        btn2Press={() => {
          setLocationPop(false)
          navigation.navigate('mainStack')
        }}
        btn2style={{
          backgroundColor: COLORS.primary2,
          width: '100%',
          marginTop: wp(3),
        }}
        textStyle={styles.popStyle}
        btn2TxtStyle={{color: COLORS.primary1}}
      />

      
    </View>
  );
};

export default QA;

const styles = StyleSheet.create({
  progressBarContainer: {
    width: '100%',
    height: wp(1.4),
    backgroundColor: COLORS.white,
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: wp(1),
  },
  progressBar: {
    height: '100%',
    backgroundColor: COLORS.primary1,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('6%'),
    paddingTop: hp('4%'),
    backgroundColor: COLORS.primary2,
    paddingBottom: wp(8),
  },
  heading: {
    fontFamily: fonts.Medium,
    fontSize: wp('6%'),
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
    // textAlign: 'center',
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
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
    // justifyContent: 'center',
    // backgroundColor: 'green',
    paddingHorizontal: wp(3),
    // paddingVertical: wp(3),
    // marginBottom: wp(4),
    // width: '100%'
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
    paddingVertical: wp('2%'),
    paddingHorizontal: wp('3%'),
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
    marginTop: wp('20'),
  },
  heightText: {
    fontSize: wp('5%'),
    color: '#000000',
    textAlign: 'center',
  },
  heightContainer: {
    paddingHorizontal: wp(3),
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
  },

  title: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: COLORS.blackTxtColor,
  },
});
