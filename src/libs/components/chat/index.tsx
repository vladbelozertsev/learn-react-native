import React from 'react';
import { AddFileModalProps } from 'src/libs/components/add-file-modal';
import { ChatEmpty } from './chat-empty';
import { ChatListHeader } from './chat-list-header';
import { FlatList, RefreshControl, TextInput, TouchableOpacityProps } from 'react-native';
import { Message } from './utils';
import { ScaledSheet } from 'react-native-size-matters';
import { ScreenList } from 'src/libs/components/screen';
import { renderItem } from './render-item';
import { withOpen } from 'src/libs/hocs/with-open';

export type ChatProps = {
  list?: Omit<FlatList['props'], 'data' | 'renderItem'>;
  userId: string | number;
  systemId?: string | number;
  msgs: Message[];
  msgsIsLoading?: boolean;
  header?: React.ReactNode;
  refresh?: RefreshControl['props'];
  input?: {
    addFile?: Omit<AddFileModalProps<any>, 'open' | 'hide'>;
    disabled?: boolean;
    isLoading?: boolean;
    msg: TextInput['props']['value'];
    msgsIsLoading?: boolean;
    onPress: TouchableOpacityProps['onPress'];
    setMsg: TextInput['props']['onChangeText'];
  };
};

export const Chat = withOpen<ChatProps>(props => {
  const { msgs, list, open, userId, systemId } = props;
  const last = msgs.length || undefined;

  return (
    <ScreenList
      {...list}
      $bg="#F0F1F5"
      $dontShowLEC={!props.open}
      $refresh={props.refresh}
      ListEmptyComponent={open ? <ChatEmpty isLoading={props.input?.msgsIsLoading} isLast /> : null}
      ListHeaderComponent={props.list?.ListHeaderComponent || <ChatListHeader {...props} />}
      contentContainerStyle={styles.container}
      data={props.open ? props.msgs : null}
      removeClippedSubviews={false}
      renderItem={renderItem({ userId, systemId, last })}
    />
  );
});

const styles = ScaledSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingTop: '15@ms',
  },
});
