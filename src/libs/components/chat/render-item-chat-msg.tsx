import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { Message, getMsgType } from './utils';
import { MyShadow } from '../my-shadow';
import { MyText } from 'src/libs/components/my-text';
import { RenderItemChatMsgFiles } from './render-item-chat-msg-files';
import { RenderItemChatMsgImages } from './render-item-chat-msg-images';
import { ScaledSheet } from 'react-native-size-matters';

type Props = {
  userId: string | number;
  systemId?: string | number;
  msg: Message;
  isLast?: boolean;
};

export const RenderItemChatMsg: FC<Props> = props => {
  const msgType = getMsgType({ ...props, senderId: props.msg.senderId });
  const styles = getStyles(msgType === 'USER', props.isLast);
  const logo = require('../../assets/images/logo.png');
  const icon = props.msg.icon ? { uri: props.msg.icon } : logo;

  return (
    <MyShadow
      style={styles.contentView}
      sides={{ start: true, end: true, bottom: !!props.isLast, top: false }}
      corners={{ bottomEnd: !!props.isLast, bottomStart: !!props.isLast, topEnd: false, topStart: false }}>
      <View style={styles.dateTimeView}>
        {msgType !== 'USER' && <Image style={styles.icon} source={icon} />}
        <MyText style={styles.dateTime} $v={props.msg.senderName} $hide={msgType === 'USER'} />
        <MyText style={styles.dateTime} $v={' ' + props.msg.date} />
      </View>
      <View style={styles.msgView}>
        <MyText style={styles.msgText} $v={props.msg.text} $hide={!props.msg.text} />
        <RenderItemChatMsgFiles {...props.msg} msgType={msgType} />
        <RenderItemChatMsgImages {...props.msg} />
      </View>
    </MyShadow>
  );
};

const getStyles = (isUser: boolean, isLast?: boolean) => {
  return ScaledSheet.create({
    contentView: {
      paddingBottom: `${isLast ? 17 : 7}@ms`,
      backgroundColor: '#FFF',
      borderBottomLeftRadius: isLast ? 30 : 0,
      borderBottomRightRadius: isLast ? 30 : 0,
      paddingLeft: isUser ? '10%' : 0,
      paddingRight: !isUser ? '10%' : 0,
      alignItems: isUser ? 'flex-end' : 'flex-start',
    },
    msgView: {
      borderRadius: '10@ms',
      paddingHorizontal: '12@ms',
      paddingVertical: '7@ms',
      borderTopStartRadius: `${isUser ? 10 : 0}@ms`,
      borderTopRightRadius: `${isUser ? 0 : 10}@ms`,
      backgroundColor: isUser ? CLR_APP : '#FFF4E3',
      marginRight: `${isUser ? 7 : 0}@ms`,
      marginLeft: `${!isUser ? 46 : 0}@ms`,
    },
    msgText: {
      color: isUser ? '#FFF' : CLR_APP,
      fontSize: '16@ms',
    },
    nameText: {
      color: CLR_APP,
      borderRadius: 20,
      fontSize: '14@ms',
      fontStyle: 'italic',
    },
    signatureView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontStyle: 'italic',
    },
    dateTimeView: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: '7@ms',
      marginBottom: 0,
    },
    dateTime: {
      textAlign: isUser ? 'right' : 'left',
      color: '#999',
      fontSize: '14@ms',
    },
    icon: {
      width: '32@ms',
      height: '32@ms',
      marginRight: '7@ms',
      resizeMode: 'stretch',
      borderRadius: 999,
    },
  });
};
