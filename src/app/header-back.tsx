import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { FC } from 'react';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { MyShadow } from 'src/libs/components/my-shadow';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet, ms, vs } from 'react-native-size-matters';
import { View, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = DrawerHeaderProps & {
  white?: boolean;
};

export const HeaderBack: FC<Props> = props => {
  const colorChevron = props.white ? CLR_APP : '#FFF';
  const colorTitle = props.white ? '#242424' : '#FFF';
  const insets = useSafeAreaInsets();

  const extraRootViewStyles = {
    paddingLeft: ms(15) + insets.left,
    paddingRight: ms(15) + insets.right,
    paddingTop: vs(8) + insets.top,
    backgroundColor: props.white ? '#FFF' : CLR_APP,
  };

  return (
    <MyShadow style={[styles.rootView, extraRootViewStyles]} disabled={!props.white}>
      <TouchableOpacity onPress={props.navigation.goBack}>
        <Ionicons style={[styles.backIcon, { color: colorChevron }]} name="chevron-back" />
      </TouchableOpacity>
      <MyText $fs="16" $c={colorTitle} $v={props.options.title} />
      <View />
    </MyShadow>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: CLR_APP,
    paddingBottom: '8@vs',
  },
  backIcon: {
    fontSize: '26@ms',
    color: '#FFF',
  },
});
