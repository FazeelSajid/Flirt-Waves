import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ChatHeader from '../../../../components/ChatHeader';
import {imgs} from '../../../../assets/Imgs/Img';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {GiftedChat, Bubble, InputToolbar, Send} from 'react-native-gifted-chat';
import {COLORS} from '../../../../../config/COLORS';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TxtInput from '../../../../components/TxtInput';
import CustomButton from '../../../../components/CustomButton';
import {fonts} from '../../../../../config/Fonts';
// import EmojiModal from 'react-native-emoji-modal';

const Chat = ({navigation, route}) => {
  const [messages, setMessages] = useState([]);
  const [isEmoji, setIsEmoji] = useState(false);
  const [inputText, setInputText] = useState('');
  const img  = route.params?.img

  const handleSend = () => {
    if (inputText.trim().length > 0) {
      const newMessage = {
        _id: messages.length + 1, // Ensure the message has `_id`
        text: inputText.trim(),
        createdAt: new Date(),
        user: {
          _id: 1, // Ensure the user has `_id`
          name: 'User',
        },
        sent: true,
        received: false,
        pending: false,
      };
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, newMessage),
      );
      setInputText('');
    }
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Tester',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://robohash.org/12',
        },
        sent: true,
        received: true,
        pending: false,
      },
      {
        _id: 2,
        text: 'Hello Project Manager',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://robohash.org/12',
        },
        sent: true,
        received: true,
        pending: false,
      },
    ]);
  }, []);

  const handleEmojiSelect = (emoji) => {
    setInputText((prevInput) => prevInput + emoji.emoji);
    setIsEmoji(false); // Close the emoji picker after selecting an emoji
  };

  const renderTicks = message => {
    if (message.sent) {
      return <Icon name="check" size={12} color="gray" />;
    } else if (message.received) {
      return <Icon name="check-all" size={12} color="gray" />;
    } else if (message.pending) {
      return <Icon name="clock-outline" size={12} color="gray" />;
    }
    return null;
  };

  const renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: styles.rightBubble,
          left: styles.leftBubble,
        }}
        textStyle={{
          right: styles.rightText,
          left: styles.leftText,
        }}
        renderTicks={() => renderTicks(props.currentMessage)}
      />
    );
  };

  const renderInputToolbar = props => {
    return (
      <View style={styles.inputContainer}>
        <TxtInput
          style={{flexGrow: 1,}}
          rightIcon={isEmoji ? 'baby-face-outline' : 'keyboard'}
          rightIconSize={wp(8)}
          rightIconColor={COLORS.darkGrayColor}
          rightIconPress={() => setIsEmoji(!isEmoji)}
          placeholder={'Type a message'}
          placeholderTextColor={COLORS.darkGrayColor}
          value={inputText}
          onChangeText={txt => setInputText(txt)}
        />

        <View>
          <CustomButton
            onPress={handleSend}
            icon={'send'}
            containerStyle={styles.iconContainer}
            iconSize={wp(5)}
            iconColor={COLORS.white}
            pressedRadius={wp('2%')}
          />
        </View>
      </View>
    );
  };

  const renderSend = props => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon name={'send'} size={25} color={COLORS.white} />
        </View>
      </Send>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ChatHeader left={'chevron-left'} iconSize={35} leftIconColor={COLORS.blackTxtColor} img={img} leftOnpress={()=> navigation.goBack()} rightOnPress={()=>navigation.navigate('audioCall')} />
      <GiftedChat
        messages={messages}
        onSend={newMessages =>
          setMessages(previousMessages =>
            GiftedChat.append(previousMessages, newMessages),
          )
        }
        user={{_id: 1}} // Ensure the user has `_id`
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        renderTicks={renderTicks}
      />
      {/* {isEmoji && (
        <EmojiModal
        onEmojiSelected={(emoji)=> console.log('emoji')}
        containerStyle={{margin: 0}}
        onPressOutside={()=>setIsEmoji(false) }

      />
      )} */}
    </SafeAreaView>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    paddingHorizontal: wp(3),
    flex: 1,
    paddingBottom: wp(2),
  },
  rightBubble: {
    backgroundColor: COLORS.lightGrayColor,
    borderRadius: wp('3%'),
    marginBottom: wp('3%'),
    padding: wp('2%'),
  },
  leftBubble: {
    backgroundColor: COLORS.primary2,
    borderRadius: wp('3%'),
    marginBottom: wp('3%'),
    padding: wp('2%'),
  },
  rightText: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Regular,
  },
  leftText: {
    color: COLORS.blackTxtColor,
    fontSize: wp('4%'),
    fontFamily: fonts.Regular,
  },
  inputToolbar: {
    padding: wp('1.2%'),
    gap: 10,
  },
  inputPrimary: {
    borderRadius: wp('3%'),
    marginRight: wp('3%'),
    alignItems: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
    marginLeft: wp('3%'),
    backgroundColor: COLORS.primary1,
    borderRadius: wp('1.5%'),
    padding: wp('1%'),
  },
  iconContainer: {
    justifyContent: 'center',
    padding: wp(3),
    backgroundColor: COLORS.primary1,
    borderRadius: wp('2%'),
    marginLeft: wp(3),
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // height: wp(10)
  },
});
