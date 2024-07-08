import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../../../../config/COLORS';
import CustomHeader from '../../../../components/CustomHeader';
import {fonts} from '../../../../../config/Fonts';
import PagerView from 'react-native-pager-view';
import {imgsArray} from '../../../../assets/Imgs/Img';
import Pencil from '../../../../assets/svgs/pencil.svg';
import CustomButton from '../../../../components/CustomButton';

const EditProfile = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const preferences = [
    'Looking for Relationship',
    'Occasional Exercise',
    'I’m an excellent chef',
    'Hiking and backpack',
    'I’m in bed by midnight',
    'Zero tolerance',
    'Thanks but no thanks',
    'A little bit of everything',
  ];

  const questions = [
    
  
    {
      id: 1,
      question: 'Looking for?',
      type: 'choice',
      options: ['A Relationship', 'Nothing Serious', "I'll know when i find it"],
      isSkipable: true,
    },
  
    {
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
      question: 'Your opinion on smoking',
      type: 'choice',
      isSkipable: true,
      options: ['I smoke', 'Not a fan but whatever', 'Zero tolerance'],
    },
    {
      id: 6,
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
      id: 7,
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


  const navigateToQuestion = (questionId) => {
    const question = questions.find(q => q.id === questionId);
    navigation.navigate('editQuestion', { question });
  };


  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <CustomHeader
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={navigation.goBack}
        heading={'Edit Profile'}
        headingStyle={{
          fontFamily: fonts.SemiBold,
          color: COLORS.blackTxtColor,
          fontSize: wp(6),
        }}
      />
      <PagerView
        style={{flexGrow: 1}}
        initialPage={selectedImage}
        onPageSelected={event => setSelectedImage(event.nativeEvent.position)}>
        {imgsArray.map((item, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={item} style={styles.img} resizeMode="cover" />
          </View>
        ))}
      </PagerView>
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
                  borderColor: isCurrent ? COLORS.primary1 : COLORS.lightGrayColor,
                },
              ]}
            />
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.headerText}>Profile Info</Text>

        <CustomButton
          svg={<Pencil width={wp(4)} height={hp(4)} />}
          text={'Edit'}
          textStyle={{
            fontFamily: fonts.Regular,
            color: COLORS.blackTxtColor,
            marginLeft: wp(2),
          }}
          containerStyle={[styles.btnContainer]}
          onPress={() => navigation.navigate('editProfileInfo')}
          pressedRadius={wp('2%')}
        />
      </View>
      <View style={styles.infoSection}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>First name</Text>
          <Text style={styles.infoValue}>Olivia</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email address</Text>
          <Text style={styles.infoValue}>olivia@gmail.com</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Gender</Text>
          <Text style={styles.infoValue}>Female</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Height</Text>
          <Text style={styles.infoValue}>165 (5'4")</Text>
        </View>
        {/* <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity> */}
      </View>
      {/* <Text style={styles.headerText}>Preferences</Text>
      <View style={styles.preferenceContainer}>
        <Text style={styles.preferenceText}>Looking for Relationship</Text>
        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View> */}
      <Text style={[styles.headerText, {marginTop: wp(5)}]}>Preferences</Text>
      {questions.map((question, index) => (
        <View key={index} style={styles.preferenceContainer}>
          <Text style={styles.preferenceText}>{question.question}</Text>

          <CustomButton
            svg={<Pencil width={wp(4)} height={hp(4)} />}
            containerStyle={[
              styles.btnContainer,
              {backgroundColor: COLORS.white},
            ]}
               onPress={() => navigateToQuestion(question.id)}
            pressedRadius={wp('2%')}
          />
        </View>
      ))}
      <CustomButton text={'Edit'} containerStyle={[styles.btnContainer, {paddingVertical: wp(2.5), marginVertical: wp(3)}]} textStyle={{fontSize: wp(4.5), fontFamily: fonts.Regular, color: COLORS.blackTxtColor}} />
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: wp(10),
    paddingHorizontal: wp(5),
  },
  imageContainer: {
    alignItems: 'center',
    // overflow: 'hidden',
    // backgroundColor: COLORS.blackTxtColor,
    marginBottom: wp(8),
  },
  img: {
    width: wp(85),
    height: hp(40),
    borderRadius: wp(5),
    // resizeMode: 'contain'
  },
  pagination: {
    flexDirection: 'row',
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
  infoSection: {
    paddingHorizontal: wp(5),
    // paddingTop: wp(5),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrayColor,
  },
  infoLabel: {
    fontFamily: fonts.Regular,
    fontSize: wp(4),
    fontWeight: '400',
    color: '#313131',
  },
  infoValue: {
    fontFamily: fonts.Regular,
    fontSize: wp(4),
    fontWeight: '100',
    color: '#313131',
  },
  editButton: {
    alignSelf: 'center',
    marginTop: wp(3),
    backgroundColor: COLORS.primary1,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderRadius: wp(2),
  },
  editButtonText: {
    color: COLORS.white,
    fontFamily: fonts.SemiBold,
    fontSize: wp(4),
  },
  headerText: {
    fontFamily: fonts.SemiBold,
    fontSize: wp(5),
    // marginTop: wp(10),
    marginBottom: wp(3),
    color: COLORS.primary1,
    paddingHorizontal: wp(5),
  },
  preferenceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGrayColor,
  },
  preferenceText: {
    fontFamily: fonts.Regular,
    fontSize: wp(4),
    color: COLORS.blackTxtColor,
    fontWeight: '400',
  },
  editIcon: {
    backgroundColor: COLORS.primary1,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(1),
  },
  btnContainer: {
    justifyContent: 'center',
    // padding: wp(2),
    borderRadius: wp('3%'),
    backgroundColor: COLORS.primary1,
  },
});
