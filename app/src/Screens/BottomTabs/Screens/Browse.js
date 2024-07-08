import {SectionList, StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import LoaderKit from 'react-native-loader-kit';
import {COLORS} from '../../../../config/COLORS';
import {fonts} from '../../../../config/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../../../components/CustomHeader';
import Search from '../../../assets/svgs/search.svg';
import Likes from '../../../assets/svgs/likes.svg';
import Verified from '../../../assets/svgs/verifiedProfiles.svg';
import NewUsers from '../../../assets/svgs/newUsers.svg';
import Online from '../../../assets/svgs/online.svg';
import Love from '../../../assets/svgs/love.svg';
import Fitness from '../../../assets/svgs/fitness.svg';
import Chef from '../../../assets/svgs/chef.svg';
import Mountain from '../../../assets/svgs/mountain.svg';
import Moon from '../../../assets/svgs/moon.svg';
import Smoking from '../../../assets/svgs/smoking.svg';
import Kid from '../../../assets/svgs/kid.svg';
import Eating from '../../../assets/svgs/eating.svg';
import CustomButton from '../../../components/CustomButton';
import { FlatList } from 'react-native-gesture-handler';
import { imgs } from '../../../assets/img/imgs';

const Browse = ({navigation}) => {
  const handlePress = () =>{
    navigation.navigate('details')
  }

const data = [
    {
      id: 1,
      label: 'A partner for you',
      svg: <Love width={wp(8)} height={wp(8)} />,
      options: [{img: imgs.obj1.img1 , txt: 'A Relationship'}, {img: imgs.obj1.img2, txt:'Nothing Serious'}, {img: imgs.obj1.img3 , txt:"I'll know when i find it"}],
    },
    {
      id: 2,
      label: "Exercise Habits",
      svg: <Fitness width={wp(7)} height={wp(7)} />,
      options: [
        {img: imgs.obj2.img1, txt :'Occasional Exercise'},
        {img: imgs.obj2.img2, txt:'Enough Cardio to keep on'},
        {img: imgs.obj2.img3, txt:'Exercise all the time'},
      ],
    },
    {
      id: 3,
      label: "Cooking Skills",
      svg: <Chef width={wp(8)} height={wp(8)} />,
      options: [
       { img: imgs.obj3.img1,txt: "I'm a microwave master"},
        {img: imgs.obj3.img2, txt: "I'm a delivery expert"},
        {img: imgs.obj3.img3, txt:'I know a few good recipes'},
        {img: imgs.obj3.img4, txt: "I'm a master chef"},
      ],
    },
    {
      id: 4,
      label: 'Travel Buddy',
      svg: <Mountain width={wp(8)} height={wp(8)} />,
      options: [
        {img: imgs.obj4.img1,txt:'Hiking & Backpack'},
        {img: imgs.obj4.img2, txt:'Museum & Postcards'},
        {img: imgs.obj4.img3, txt:'Deckchair & Sunscreen'},
      ],
    },
    {
      id: 5,
      label: "Night Life",
      svg: <Moon width={wp(8)} height={wp(8)} />,
      options: [
        {img: imgs.obj6.img1, txt:"I'm in bed by midnight"},
        {img: imgs.obj6.img2,txt:"I'm a night owl"},
        {img: imgs.obj6.img3,txt:'I party in moderation'},
      ],
    },
    {
      id: 6,
      label: 'Smoking',
      svg: <Smoking width={wp(8)} height={wp(8)} />,
      options: [{img: imgs.obj5.img1,txt:'I smoke'}, {img: imgs.obj5.img2,txt:'Not a fan but whatever'}, {img: imgs.obj5.img3,txt:'Zero tolerance'}],
    },
    {
      id: 7,
      label: 'About Kids',
      svg: <Kid width={wp(8)} height={wp(8)} />,
      options: [
        {img: imgs.obj7.img1,txt:'I love the one I have'},
        {img: imgs.obj7.img2, txt: "I'd like some"},
        {img: imgs.obj7.img3,txt:'I have some but want more'},
        {img: imgs.obj7.img4,txt: 'Thanks but no thanks'},
      ],
    },
    {
      id: 8,
      label: 'Eating Habits',
      svg: <Eating width={wp(8)} height={wp(8)} />,
      options: [
        {img: imgs.obj8.img1, txt: 'A little of everything'},
        {img: imgs.obj8.img2, txt:'Vegon'},
        {img: imgs.obj8.img3, txt:'Flexitarian'},
        {img: imgs.obj8.img4, txt:'Vegetarian'},
        {img: imgs.obj8.img5, txt:'Junk food forever'},
        {img: imgs.obj8.img6, txt:'halal'},
      ],
    },
  ];
  
  const buttons = [
    { icon: <Likes width={wp(8)} height={wp(8)} />, label: 'Likes Received' },
    { icon: <Verified width={wp(8)} height={wp(8)} />, label: 'Verified Profiles' },
    { icon: <NewUsers width={wp(8)} height={wp(8)} />, label: 'New Users' },
    { icon: <Online width={wp(8)} height={wp(8)} />, label: 'Online' }
  ];

  return (
    <ScrollView style={styles.container}>
      <CustomHeader
        heading={'Browse'}
        headingStyle={styles.heading}
        rightSvg={<Search width={wp(6)} height={wp(6)} />}
        iconSize={wp(8)}
        rightIconColor={COLORS.primary1}
        rightOnPress={() => navigation.navigate('search')}
      />
      <View style={styles.btnsContainer}>
        {buttons.map((item, index) => (
          <TouchableOpacity key={index} style={styles.btnWrapper} onPress={handlePress} >
            <CustomButton svg={item.icon} containerStyle={styles.btnContainer} pressedRadius={wp(3)} onPress={handlePress}/>
            <Text style={styles.btnLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={data.map(section => ({ title: section.label, svg: section.svg, data: [section.options] }))}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <FlatList
            horizontal
            data={item}
            // style={{marginBottom: wp(10)}}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.7} style={styles.optionContainer} onPress={handlePress} >
                <Image source={item.img} style={styles.optionImage} />
                <Text style={styles.optionText}>{item.txt}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => item.txt + index}
            showsHorizontalScrollIndicator={false}
          />
        )}
        renderSectionHeader={({ section: { title, svg } }) => (
          <View style={styles.sectionHeaderContainer}>
            {svg}
            <Text style={styles.label}>{title}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('5%'),
    // marginBottom: hp('5%'),
    paddingBottom: hp('15%'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    // fontSize: wp(7),
    fontFamily: fonts.Medium,
    color: COLORS.primary1,
  },
  btnContainer: {
    backgroundColor: '#F5BF0317',
    padding: wp(5),
    borderWidth: wp(0.3),
    borderColor: COLORS.primary1,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('4%'),
  },
  label: {
    fontSize: wp(4.5),
    fontFamily: fonts.SemiBold,
    color: COLORS.blackTxtColor,
    marginLeft: wp('2')
  },
  sectionHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('2%'),
  },
  sectionHeader: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.primary1,
    marginLeft: wp('2%'),
  },
  optionContainer: {
    alignItems: 'center',
    marginRight: wp('3%'),
    flexWrap: 'wrap'
  },
  optionImage: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: wp('2%'),
    marginBottom: hp('1%'),
  },
  optionText: {
    fontSize: wp(3.3),
    textAlign: 'left',
    color: COLORS.blackTxtColor,
    width: wp(28),
    // height: hp(5),
    fontFamily:fonts.Regular

  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    marginBottom: wp('4%'),
    marginTop: wp(3)
    // backgroundColor: 'green'
  },
  btnWrapper: {
    alignItems: 'center',
  },
  btnLabel: {
    fontSize: wp(3),
    fontFamily: fonts.Regular,
    textAlign: 'center',
    color: COLORS.blackTxtColor,
    width: wp(20)
  },
});
