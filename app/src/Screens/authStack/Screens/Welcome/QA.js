import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
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
import DatePickerCom from '../../../../components/DatePicker';
import GenderSelection from '../../../../components/GenderSelection';
import PhotoUpload from '../../../../components/PhotoUpload';
import {fonts} from '../../../../../config/Fonts';
import BottomSheet from '../../../../components/BottomSheet';
import DatePicker from 'react-native-date-picker';
import Gender from '../../../../components/Gender';

const questions = [
  {
    id: 1,
    question: 'Tell us about yourself',
    type: 'text',
    placeholder: 'Enter Name',
  },
  {id: 2, question: 'Select Gender', type: 'gender'},
  {id: 3, question: 'Date of Birth', type: 'date'},
  {
    id: 4,
    question: 'Whom are you looking for?',
    type: 'choice',
    options: ['Men', 'Women', 'Everyone'],
  },
  {id: 5, question: 'Add your photos', type: 'photo'},
  {id: 6, question: "What's your height?", type: 'slider'},
  {
    id: 7,
    question: "What's your exercise habits?",
    type: 'choice',
    options: [
      'Occasional Exercise',
      'Enough Cardio to keep on',
      'Exercise all the time',
    ],
  },
  {
    id: 8,
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
    id: 9,
    question: 'What two words explain you?',
    type: 'choice',
    options: [
      'Introvert and Lazybones',
      'Natural born go-getter',
      'Hip and laid-back',
    ],
  },
  {
    id: 10,
    question: "What's your nightlife?",
    type: 'choice',
    options: [
      "I'm in bed by midnight",
      "I'm a night owl",
      'I party in moderation',
    ],
  },
  {
    id: 11,
    question: 'Your opinion on smoking',
    type: 'choice',
    options: ['I smoke', 'Not a fan but whatever', 'Zero tolerance'],
  },
  {
    id: 12,
    question: 'What about kids?',
    type: 'choice',
    options: [
      'I love the one i have',
      "I'd like some",
      'I have some but want more',
      'Thanks but no thanks',
    ],
  },
];

const QA = ({navigation}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [photos, setPhotos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedGender, setSelectedGender] = useState(null);


  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log('User responses:', responses);
      // Navigate to the next screen or submit the responses
      // navigation.navigate('NextScreen', { responses });
    }
  };

  const handlePrev = () => {
    console.log(currentQuestionIndex);
    if (currentQuestionIndex >= 1) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleInputChange = (questionId, value) => {
    setResponses({...responses, [questionId]: value});
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
      <Text style={styles.heading}>{currentQuestion.question}</Text>
      <ScrollView>
        {currentQuestion.type === 'text' && (
          <>
            <TxtInput
              style={{marginTop: wp('10%')}}
              value={responses[currentQuestion.id] || ''}
              onChangeText={text => handleInputChange(currentQuestion.id, text)}
              placeholder={currentQuestion.placeholder}
            />
            <Text style={styles.dob}>Date Of Birth</Text>
            <TxtInput
              // style={{marginVertical: wp('10%')}}
              value={date}
              onChangeText={text => handleInputChange(currentQuestion.id, text)}
              placeholder={'Select date of birth'}
              onPress={toggleModal}
            />

            <BottomSheet isVisible={modalVisible} onClose={toggleModal}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={styles.heading}>Date Of Birth</Text>
                <CustomButton
                  icon={'close'}
                  iconSize={20}
                  iconColor={COLORS.blackTxtColor}
                  onPress={toggleModal}
                  containerStyle={{alignSelf: 'flex-end'}}
                />
              </View>
              <View style={{alignItems: 'center'}}>
                <DatePicker
                  //  modal
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
                onPress={toggleModal}
              />
            </BottomSheet>

            <Text style={styles.dob}>Select Gender</Text>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Gender
          gender={'Male'}
          icon={'male'}
          isSelected={selectedGender === 'Male'}
          setSelectedGender={setSelectedGender}
        />
        <Gender
          gender={'Female'}
          icon={'female'}
          isSelected={selectedGender === 'Female'}
          setSelectedGender={setSelectedGender}
        />
      </View>
          </>
        )}
        {currentQuestion.type === 'date' && (
          <></>
          // <DatePicker
          //   value={selectedDate}
          //   onChange={(date) => {
          //     setSelectedDate(date);
          //     handleInputChange(currentQuestion.id, date);
          //   }}
          // />
        )}
        {currentQuestion.type === 'gender' && (
          <GenderSelection
            selectedGender={selectedGender}
            onSelectGender={gender => {
              setSelectedGender(gender);
              handleInputChange(currentQuestion.id, gender);
            }}
          />
        )}
        {currentQuestion.type === 'choice' &&
          currentQuestion.options.map(option => (
            <TouchableOpacity
              key={option}
              style={[
                styles.optionButton,
                responses[currentQuestion.id] === option &&
                  styles.selectedOptionButton,
              ]}
              onPress={() => handleInputChange(currentQuestion.id, option)}>
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        {currentQuestion.type === 'photo' && (
          <PhotoUpload
            photos={photos}
            setPhotos={newPhotos => {
              setPhotos(newPhotos);
              handleInputChange(currentQuestion.id, newPhotos);
            }}
          />
        )}
      </ScrollView>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Skip"
          onPress={handleSkip}
          containerStyle={styles.button}
        />
        <CustomButton
          text="Next"
          onPress={handleNext}
          containerStyle={styles.button}
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
    // marginVertical: hp('2%'),
  },
  dob: {
    marginTop: wp('7%'),
    color: COLORS.primary1,
    fontSize: wp('4%'),
    fontFamily: fonts.Medium,
    marginBottom: wp('4%'),
  },
  optionButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  selectedOptionButton: {
    backgroundColor: '#007bff',
  },
  optionText: {
    textAlign: 'center',
    color: '#000',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: COLORS.primary1,
    paddingVertical: wp('3%'),
    // width: wp('40%'),
  },
});
