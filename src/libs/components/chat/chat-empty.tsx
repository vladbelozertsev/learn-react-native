import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { FC } from 'react';
import { Loading } from 'src/libs/components/loading';
import { MyShadow } from 'src/libs/components/my-shadow';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';

type Props = {
  isLoading?: boolean;
  isLast?: boolean;
};

export const ChatEmpty: FC<Props> = props => {
  const { isLoading, isLast } = props;

  return (
    <MyShadow
      style={styles.rootView}
      sides={{ start: true, end: true, bottom: !!isLast, top: false }}
      corners={{ bottomEnd: !!isLast, bottomStart: !!isLast, topEnd: false, topStart: false }}>
      {isLoading && <Loading />}
      {!isLoading && <MCI style={styles.noMsgIcon} name="chat-processing-outline" />}
      {!isLoading && <MyText $t="No messages" $fs="18" $c="#BBB" $center />}
    </MyShadow>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingBottom: '15@ms',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  noMsgIcon: {
    fontSize: '36@ms',
    textAlign: 'center',
    color: '#BBB',
    marginBottom: '7@vs',
  },
});
