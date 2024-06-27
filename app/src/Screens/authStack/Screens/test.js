import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import { COLORS } from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../../../../components/CustomHeader';
import CustomButton from '../../../../components/CustomButton';
import TxtInput from '../../../../components/TxtInput';
import BottomSheet from '../../../../components/BottomSheet';
import DatePicker from 'react-native-date-picker';
import Gender from '../../../../components/Gender';
import { fonts } from '../../../../../config/Fonts';
import PhotoUpload from '../../../../components/PhotoUpload';
import ContinueWith from '../../../../components/ContinueWith';

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
    question: "What's your height?",
    type: 'slider',
  },
  {
    id: 5,
    question: "What's your exercise habits?",
    type: 'choice',
    options: [
      'Occasional Exercise',
      'Enough Cardio to keep on',
      'Exercise all the time',
    ],
  },
  {
    id: 6,
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
    id: 7,
    question: 'What two words explain you?',
    type: 'choice',
    options: [
      'Introvert and Lazybones',
      'Natural born go-getter',
      'Hip and laid-back',
    ],
  },
  {
    id: 8,
    question: "What's your nightlife?",
    type: 'choice',
    options: [
      "I'm in bed by midnight",
      "I'm a night owl",
      'I party in moderation',
    ],
  },
  {
    id: 9,
    question: 'Your opinion on smoking',
    type: 'choice',
    options: ['I smoke', 'Not a fan but whatever', 'Zero tolerance'],
  },
  {
    id: 10,
    question: 'What about kids?',
    type: 'choice',
    options: [
      'I love the one I have',
      "I'd like some",
      'I have some but want more',
      'Thanks but no thanks',
    ],
  },
];

const QA = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [photoModal, setPhotoModal] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);
  const [photos, setPhotos] = useState([]);

  // Toggle modal visibility
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  // Handle the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('User responses:', responses);
      // Navigate to the next screen or submit the responses
      // navigation.navigate('NextScreen', { responses });
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
    setResponses({ ...responses, [questionId]: value });
  };

  const date = selectedDate.toLocaleDateString();

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        iconSize={wp('6%')}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={handlePrev}
      />
      <Text
        style={[
          styles.heading,
          currentQuestion.type === 'choice' || ('photo' && { marginTop: hp('3%') }),
        ]}
      >
        {currentQuestion.question}
      </Text>
      <ScrollView
        style={currentQuestion.type === 'choice' ? { marginTop: hp('13%') } : ''}
      >
        {currentQuestion.type === 'multi' && (
          <>
            <TxtInput
              style={styles.TxtInput}
              value={responses['name'] || ''}
              onChangeText={text => handleInputChange('name', text)}
              placeholder="Enter Name"
            />
            <Text style={styles.dob}>Date Of Birth</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.dateText}>{date}</Text>
            </TouchableOpacity>
            <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
              <View style={styles.bottomSheetMainContainer}>
                <Text style={styles.heading}>Date Of Birth</Text>
                <CustomButton
                  icon={'close'}
                  iconSize={20}
                  iconColor={COLORS.blackTxtColor}
                  onPress={toggleModal}
                  containerStyle={styles.bottomSheetBtn}
                />
              </View>
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
                  style={{
                    padding: 0,
                    margin: 0,
                    width: wp('65%'),
                    justifyContent: 'space-between',
                  }}
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

        {/* PHOTOS */}
        {currentQuestion.type === 'photo' && (
          <View>
            <Text style={styles.photoDes}>
              Add minimum 1 photo to continue. One of these images should be a
              picture of yourself.
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: wp('3%'),
                height: hp('28%'),
                padding: wp('2%'),
              }}
            >
              <View
                style={{
                  flex: 1,
                  marginRight: wp('2%'),
                }}
              >
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.photoContainer}>
                    {photos[0] ? (
                      <Image
                        source={{ uri: photos[0] }}
                        style={styles.photo}
                      />
                    ) : (
                      <Gender
                        iconSize={wp('14%')}
                        withOutbgIcon={'camera'}
                        containerStyle={{ marginTop: hp('0.8%') }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.photoContainer}>
                    {photos[1] ? (
                      <Image
                        source={{ uri: photos[1] }}
                        style={styles.photo}
                      />
                    ) : (
                      <Gender
                        iconSize={wp('14%')}
                        withOutbgIcon={'camera'}
                        containerStyle={{ marginTop: hp('0.8%') }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 1 }}>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.photoContainer}>
                    {photos[2] ? (
                      <Image
                        source={{ uri: photos[2] }}
                        style={styles.photo}
                      />
                    ) : (
                      <Gender
                        iconSize={wp('14%')}
                        withOutbgIcon={'camera'}
                        containerStyle={{ marginTop: hp('0.8%') }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.photoContainer}>
                    {photos[3] ? (
                      <Image
                        source={{ uri: photos[3] }}
                        style={styles.photo}
                      />
                    ) : (
                      <Gender
                        iconSize={wp('14%')}
                        withOutbgIcon={'camera'}
                        containerStyle={{ marginTop: hp('0.8%') }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <BottomSheet
              isVisible={photoModal}
              onClose={() => setPhotoModal(false)}
            >
              <PhotoUpload
                onPhotoSelect={uri => {
                  setPhotos([...photos, uri]);
                  setPhotoModal(false);
                }}
              />
            </BottomSheet>
          </View>
        )}

        {currentQuestion.type === 'slider' && (
          <Text style={styles.text}>Slider placeholder</Text>
        )}
      </ScrollView>
      <View style={styles.footer}>
        <CustomButton
          containerStyle={styles.button}
          text={'Next'}
          onPress={handleNext}
        />
        <TouchableOpacity onPress={handleSkip}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QA;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: wp('4%'),
  },
  heading: {
    fontFamily: fonts.Bold,
    fontSize: wp('6%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
    marginVertical: hp('1%'),
  },
  text: {
    fontFamily: fonts.Medium,
    fontSize: wp('4%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
    marginVertical: hp('2%'),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp('3%'),
  },
  button: {
    flex: 1,
    marginRight: wp('2%'),
    paddingVertical: wp('4%'),
  },
  skip: {
    fontFamily: fonts.Medium,
    fontSize: wp('4%'),
    color: COLORS.primary1,
    textDecorationLine: 'underline',
  },
  photoDes: {
    fontFamily: fonts.Medium,
    fontSize: wp('3.7%'),
    color: COLORS.blackTxtColor,
    marginVertical: hp('1.5%'),
    textAlign: 'center',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
  },
  optionButton: {
    backgroundColor: COLORS.white,
    borderRadius: wp('5%'),
    paddingVertical: wp('3%'),
    paddingHorizontal: wp('5%'),
    marginVertical: hp('1%'),
    borderColor: COLORS.primary1,
    borderWidth: 1,
  },
  selectedOptionButton: {
    backgroundColor: COLORS.primary1,
  },
  optionText: {
    fontFamily: fonts.Medium,
    fontSize: wp('4%'),
    color: COLORS.blackTxtColor,
    textAlign: 'center',
  },
  photoContainer: {
    borderColor: COLORS.primary1,
    borderWidth: 1,
    borderRadius: wp('2%'),
    height: hp('13%'),
    marginVertical: hp('0.8%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: wp('2%'),
  },
});
