import Feather from 'react-native-vector-icons/Feather';
import React, { FC } from 'react';
import { DrawerHeaderProps as Props } from '@react-navigation/drawer';
import { MyShadow } from 'src/libs/components/my-shadow';
import { ScaledSheet, ms, vs } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HeaderMenu: FC<Props> = props => {
  const insets = useSafeAreaInsets();
  const paddingLeft = ms(12) + insets.left;
  const paddingRight = ms(12) + insets.right;
  const paddingTop = vs(5) + insets.top;

  return (
    <MyShadow style={[styles.rootView, { paddingLeft, paddingRight, paddingTop }]}>
      <TouchableOpacity onPress={props.navigation.openDrawer}>
        <Feather name="menu" style={styles.iconMenu} />
      </TouchableOpacity>
    </MyShadow>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: '5@vs',
    backgroundColor: '#FFF',
  },
  iconMenu: {
    fontSize: '30@ms',
    color: CLR_APP,
  },
});
