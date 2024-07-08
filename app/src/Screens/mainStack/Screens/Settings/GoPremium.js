// GoPremium.js
import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomHeader from '../../../../components/CustomHeader';
import {COLORS} from '../../../../../config/COLORS';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {fonts} from '../../../../../config/Fonts';
import PagerView from 'react-native-pager-view';
import Plan from '../../../../components/Plan';
import CustomButton from '../../../../components/CustomButton';

const GoPremium = ({navigation}) => {
  const [selectedPlan, setSelectedPlan] = useState(0);

  const plans = [
    {
      id: 1,
      price: '$500',
      plan: 'Monthly Plan',
      features: [
        'Unlock premium features for one month.',
        'Access advanced matching capabilities.',
        'Send unlimited likes to increase your connections.',
        'Enjoy enhanced privacy controls for a secure and enjoyable experience.',
        "Gain insights into who's interested in your profile.",
        'Priority customer support for quick assistance.',
        'No ads for a distraction-free experience.',
        'Flexible monthly pricing for your convenience.',
        'Easily upgrade, downgrade, or cancel anytime.',
      ],
    },
    {
      id: 2,
      price: '$900',
      plan: 'Quarterly Plan',
      features: [
        'Unlock premium features for one month.',
        'Access advanced matching capabilities.',
        'Send unlimited likes to increase your connections.',
        'Enjoy enhanced privacy controls for a secure and enjoyable experience.',
        "Gain insights into who's interested in your profile.",
        'Priority customer support for quick assistance.',
        'No ads for a distraction-free experience.',
        'Flexible monthly pricing for your convenience.',
        'Easily upgrade, downgrade, or cancel anytime.',
      ],
    },
    {
      id: 3,
      price: '$1,000',
      plan: 'Yearly Plan',
      features: [
        'Commit to a full year of premium benefits.',
        'Access advanced matching features to find meaningful connections.',
        'Send unlimited likes and boost your chances of finding the perfect match.',
        'Enjoy top-tier privacy controls to ensure a safe dating experience.',
        'See who is interested in your profile with insightful analytics.',
        'Priority customer support for quick and dedicated assistance.',
        'Ad-free dating, so you can focus on what matters.',
      ],
    },
  ];

  const pagerRef = useRef();
  const handlePlanSelect = index => {
    setSelectedPlan(index);
    if (pagerRef.current) {
      pagerRef.current.setPage(index);
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        headingStyle={styles.heading}
        heading={'Go Premium'}
        left={'chevron-left'}
        leftIconColor={COLORS.blackTxtColor}
        iconSize={wp(8)}
        leftOnpress={()=> navigation.goBack()}
      />


      <View style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <TouchableOpacity
            key={plan.id}
            style={[
              styles.planContainer,
              {
                backgroundColor:
                  selectedPlan === index ? COLORS.primary1 : '#F2F2F2',
              },
            ]}
            onPress={() => {
              handlePlanSelect(index);
              console.log(selectedPlan);
            }}>
            <Text style={[styles.price , {color:  selectedPlan === index ? COLORS.blackTxtColor : COLORS.darkGrayColor }]}>{plan.price}</Text>
            <Text style={[styles.duration , {color:  selectedPlan === index ? COLORS.blackTxtColor : COLORS.darkGrayColor }]}>{plan.plan}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.planHeading} >Plan Description</Text>


      <PagerView
        ref={pagerRef}
        style={{flex: 1}}
        initialPage={selectedPlan}
        onPageSelected={e => setSelectedPlan(e.nativeEvent.position)}
        tabIndex={selectedPlan}>
        {plans.map(plan => (
          <View key={plan.id} style={styles.page}>
            <Plan plan={plan} />
          </View>
        ))}
      </PagerView>
      
          <CustomButton
        text={'Pay Now'}
        containerStyle={styles.btn}
        textStyle={styles.btnText}
        onPress={() => {}}
      />
      
    </View>
  );
};

export default GoPremium;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: hp('4%'),
    paddingHorizontal: wp('6%'),
  },
  heading: {
    fontFamily: fonts.Medium,
    color: COLORS.blackTxtColor,
  },
  planHeading:{
    fontFamily:fonts.Regular,
    color: COLORS.primary1,
    marginBottom: wp(5)
  },
  plansContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
    backgroundColor: '#F2F2F2',
    padding: wp(1),
    borderRadius: wp('3%'),
  },
  planContainer: {
    padding: wp('3%'),
    borderRadius: wp('3%'),
    alignItems: 'center',
  },
  price: {
    fontFamily: fonts.Bold,
    fontSize: wp('5%'),
    color: COLORS.blackTxtColor,
  },
  duration: {
    fontFamily: fonts.Regular,
    fontSize: wp('3.5%'),
    marginTop: hp('2%'),
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    // flex: 1,
    // alignSelf: 'flex-end',
    backgroundColor: COLORS.primary1,
    paddingVertical: wp(3),
    marginBottom: wp(20)
    // justifyContent: 'flex-end'
  },
  btnText: {
    fontSize: wp(4),
    color: COLORS.blackTxtColor,
    fontFamily: fonts.Regular,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
});
