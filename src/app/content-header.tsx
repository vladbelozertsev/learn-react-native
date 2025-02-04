import React, { FC } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';
import { userAtom } from 'src/libs/state/auth';

export const ContentHeader: FC = () => {
  const user = useAtom(userAtom)[0];

  return (
    <View style={styles.rootView}>
      <SimpleLineIcons name="user" style={styles.userIcon} />
      <MyText $v={user?.FirstName} $fs="20" $f1 />
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#CCCBCB',
    borderBottomWidth: 1,
    paddingTop: '10@vs',
    paddingBottom: '20@vs',
    paddingHorizontal: '10@ms',
  },
  userIcon: {
    fontSize: '46@ms',
    color: CLR_APP,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '10@ms',
  },
});
