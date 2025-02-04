import React, { FC } from 'react';
import { ButtonShow } from 'src/libs/components/button';
import { ChatInputSend } from './chat-input-send';
import { ChatProps } from '.';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';

type Props = {
  input?: ChatProps['input'];
  header?: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

export const ChatListHeader: FC<Props> = props => {
  return (
    <View style={styles.rootView} removeClippedSubviews>
      {props.header}
      <ButtonShow {...props} t="Messages" icon="commenting-o" />
      {props.open && props.input && <ChatInputSend {...props.input} />}
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    paddingTop: '20@ms',
  },
});
