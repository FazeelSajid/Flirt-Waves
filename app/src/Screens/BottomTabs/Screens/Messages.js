import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {COLORS} from '../../../../config/COLORS';
import {fonts} from '../../../../config/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Translate from '../../../assets/svgs/translate.svg';
import CallHistory from '../../../assets/svgs/callHistory.svg';
import Block from '../../../assets/svgs/block.svg';
import Message from '../../../assets/svgs/message.svg';
import Delete from '../../../assets/svgs/delete.svg';
import Warning from '../../../assets/svgs/Warning.svg';
import TxtInput from '../../../components/TxtInput';
import CustomButton from '../../../components/CustomButton';
import {imgsArray, imgsArray2} from '../../../assets/Imgs/Img';
import {Swipeable, RectButton} from 'react-native-gesture-handler';
import BottomSheet from '../../../components/BottomSheet';
import PopUpModal from '../../../components/PopUpModal';
import ChangeChatLanguage from '../../../components/ChangeChatLanguage';

const Messages = ({navigation}) => {
  const [deletePop, setDeletePop] = useState(false);
  const [uncrushModal, setUnCrushModal] = useState(false);
  const [languageModal, setlanguageModal] = useState(false);

  const renderRightActions = () => {
    return (
      <View style={styles.actionsContainer}>
        <RectButton
          style={styles.actionButton}
          onPress={() => navigation.navigate('report')}>
          <Block width={wp(5)} height={hp(5)} fill={COLORS.primary1} />
        </RectButton>
        <RectButton
          style={styles.actionButton}
          onPress={() => setDeletePop(true)}>
          <Message width={wp(5)} height={hp(5)} fill={COLORS.primary1} />
        </RectButton>
        <RectButton style={styles.actionButton} onPress={() => setUnCrushModal(true)}>
          <Delete width={wp(5)} height={hp(5)} fill={COLORS.primary1} />
        </RectButton>
      </View>
    );
  };

  const ListItem = ({item}) => {
    return (
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.itemContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      </Swipeable>
    );
  };

  const data = [
    {name: 'Stephanie', time: '12:24 AM', status: 'after interested'},
    // Add more items here
  ];
  return (
    <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
      <View
        style={{
          paddingHorizontal: wp('8%'),
        }}>
        <View style={styles.headerContainer}>
          <Text style={styles.Heading}>Messages</Text>
          <View style={styles.headerIconContainer}>
            <CustomButton
              svg={<Translate width={wp('8%')} height={hp('8%')} />}
              onPress={()=> setlanguageModal(true)}
            />
            <CustomButton
              svg={<CallHistory width={wp('8%')} height={hp('8%')} />}
              onPress={() => navigation.navigate('callHistory')}
            />
          </View>
        </View>

        <TxtInput
          containerStyle={styles.TxtInput}
          rightIcon={'magnify'}
          rightIconSize={wp(6)}
          rightIconFocusColor={COLORS.primary1}
          rightIconColor={COLORS.darkGrayColor}
          selectableColor={COLORS.blackTxtColor}
          placeholder={'Search here'}
          placeholderTextColor={COLORS.darkGrayColor}
        />

        <View style={styles.headerContainer}>
          <Text style={[styles.Heading, {color: COLORS.blackTxtColor}]}>
            My Flames
          </Text>
          <CustomButton text={'See All'} textStyle={{color: COLORS.primary1}} />
        </View>

        <View>
          <FlatList
            data={imgsArray2}
            // style={{backgroundColor: 'green'}}
            contentContainerStyle={styles.flatListContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View style={styles.itemContainer}>
                  <Image source={item.img} style={styles.image} />
                  <Text style={styles.itemText}>{item.name}</Text>
                </View>
              );
            }}
            keyExtractor={item => item.id}
          />
        </View>

        <Text style={[styles.Heading, {color: COLORS.blackTxtColor}]}>
          Messages
        </Text>
      </View>

      {/* {data.map((item, index) => (
        <ListItem key={index} item={item} />
      ))} */}
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
            backgroundColor: '#F5BF031F',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[1]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text
            style={{
              padding: wp(1),
              marginLeft: wp(3),
              fontSize: wp(2.5),
              color: COLORS.blackTxtColor,
              backgroundColor: COLORS.primary1,
              borderRadius: wp(1),
              paddingHorizontal: wp(2),
            }}>
            Waiting for reply
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[0]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[2]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[3]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[2]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[3]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>
      <Swipeable renderRightActions={renderRightActions}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: wp(8),
            alignItems: 'center',
            paddingRight: wp(8),
            // marginVertical: wp(1),
            paddingVertical: wp(2),
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image source={imgsArray[4]} style={styles.image} />
            <View style={{marginLeft: wp(3)}}>
              <Text style={styles.itemText}>Rossie</Text>
              <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
                Do you hae time in sunday?
              </Text>
            </View>
          </View>

          <Text style={[styles.itemText, {color: COLORS.darkGrayColor}]}>
            12:20 AM
          </Text>
        </View>
      </Swipeable>

      <PopUpModal
        svg={<Warning width={wp(20)} height={wp(20)} />}
        visible={deletePop}
        heading={'Delete Chat'}
        message={'Do you want to delete chat?'}
        textStyle={styles.popUpText}
        row={true}
        btn1Txt={'Cancel'}
        btn1style={{backgroundColor: '#F5BF0333'}}
        btn1TxtStyle={{fontSize: wp(3.5), color: COLORS.primary1}}
        btn2Txt={'Yes, Remove'}
        btnsContainer={{
          flexDirection: 'row',
          paddingHorizontal: wp(19),
          marginTop: wp(8),
        }}
        btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(4)}}
        btn2TxtStyle={{fontSize: wp(3.5)}}
        btn1Press={() => setDeletePop(false)}
        btn2Press={() => {
          setDeletePop(false);
        }}
      />
      <PopUpModal
        svg={<Warning width={wp(20)} height={wp(20)} />}
        visible={uncrushModal}
        heading={'Uncrush'}
        message={'Do you want to Uncruch User?'}
        textStyle={styles.popUpText}
        row={true}
        btn1Txt={'Cancel'}
        btn1style={{backgroundColor: '#F5BF0333'}}
        btn1TxtStyle={{fontSize: wp(3.5), color: COLORS.primary1}}
        btn2Txt={'Yes, Uncrush'}
        btnsContainer={{
          flexDirection: 'row',
          paddingHorizontal: wp(19),
          marginTop: wp(8),
        }}
        btn2style={{backgroundColor: COLORS.primary1, marginLeft: wp(4)}}
        btn2TxtStyle={{fontSize: wp(3.5)}}
        btn1Press={() => setUnCrushModal(false)}
        btn2Press={() => {
          setUnCrushModal(false);
        }}
      />

      <BottomSheet isVisible={languageModal} onClose={()=> setlanguageModal(false)}   >
        <ChangeChatLanguage/>
      </BottomSheet>
    </ScrollView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('6%'),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  popUpText: {
    fontFamily: fonts.Regular,
    color: COLORS.darkGrayColor,
    fontSize: wp(3.5),
    marginVertical: wp(3),
  },
  Heading: {
    fontFamily: fonts.Medium,
    fontSize: wp(6),
    color: COLORS.primary1,
    marginVertical: hp('3%'),
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(20),
  },
  TxtInput: {
    borderWidth: wp(0.1),
    borderColor: COLORS.lightGrayColor,
    marginTop: hp('3%'),
    // marginBottom: hp('3%'),
  },
  flatListContainer: {
    // marginTop: wp(5),
  },
  itemContainer: {
    marginRight: wp(5),
    alignItems: 'center',
  },
  image: {
    width: wp(15),
    height: wp(15),
    borderRadius: wp(10),
  },
  itemText: {
    marginTop: hp('1%'),
    fontFamily: fonts.Regular,
    fontSize: wp(3.2),
    color: COLORS.blackTxtColor,
  },
  actionsContainer: {
    flexDirection: 'row',
  },
  actionButton: {
    width: wp(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightYellow,
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
});
