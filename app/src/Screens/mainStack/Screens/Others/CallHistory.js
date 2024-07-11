import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../../../components/CustomHeader';
import {COLORS} from '../../../../../config/COLORS';
import {fonts} from '../../../../../config/Fonts';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CallHistoryComponent from '../../../../components/CallHistoryComponent';
import {imgs} from '../../../../assets/Imgs/Img';

const CallHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomHeader
        heading={'Call History'}
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        leftOnpress={() => navigation.goBack()}
        iconSize={wp(9)}
        headingStyle={styles.heading}
      />
      <ScrollView showsVerticalScrollIndicator={false} >
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />
      <CallHistoryComponent
        name={'Sahara Ardia'}
        callType={'Voice call'}
        duration={'00:30:45'}
        phoneOnpress={() => navigation.navigate('audioCall')}
        videoOnpress={() => console.log('video')}
        img={imgs.user1}
      />

      </ScrollView>
      
    </View>
  );
};

export default CallHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('4'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
  },
});
