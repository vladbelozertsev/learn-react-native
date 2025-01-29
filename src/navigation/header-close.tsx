import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { FC } from 'react';
import { DrawerHeaderProps as Props } from '@react-navigation/drawer';
import { ScaledSheet, ms, vs } from 'react-native-size-matters';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HeaderClose: FC<Props> = props => {
  const insets = useSafeAreaInsets();
  const paddingLeft = ms(0) + insets.left;
  const paddingRight = ms(0) + insets.right;
  const paddingTop = vs(0) + insets.top;

  return (
    <View style={[styles.rootView, { paddingLeft, paddingRight, paddingTop }]}>
      <TouchableOpacity onPress={props.navigation.goBack}>
        <AntDesign style={styles.backIcon} name="close" />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: CLR_APP,
    justifyContent: 'flex-end',
  },
  backIcon: {
    fontSize: '34@ms',
    color: '#FFF',
  },
});
