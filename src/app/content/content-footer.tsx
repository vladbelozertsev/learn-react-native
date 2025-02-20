import Feather from 'react-native-vector-icons/Feather';
import React, { FC } from 'react';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View, TouchableOpacity } from 'react-native';
import { useLogout } from 'src/libs/hooks/use-logout';

type Props = {
  navigation: DrawerContentComponentProps['navigation'];
};

export const ContentFooter: FC<Props> = props => {
  const { closeDrawer } = props.navigation;
  const logout = useLogout();

  const exit = () => {
    closeDrawer();
    logout();
  };

  return (
    <View style={styles.rootView}>
      <TouchableOpacity style={styles.itemView} onPress={exit}>
        <Feather style={styles.icon} name={'log-out'} />
        <MyText style={styles.text} $t="Logout" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    borderTopColor: '#CCCBCB',
    borderTopWidth: 1,
    justifyContent: 'space-around',
  },
  itemView: {
    padding: '15@ms',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: '18@ms',
    paddingLeft: '10@ms',
    color: '#242424',
  },
  icon: {
    fontSize: '24@ms',
    color: CLR_APP,
  },
});
