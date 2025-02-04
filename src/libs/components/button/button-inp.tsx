import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  $mb?: boolean;
  $placeholder?: string;
  $name?: string;
  $dateIcon?: boolean;
};

export const ButtonInp: FC<Props> = props => {
  const { $name, $placeholder } = props;
  const isPlaceholder = !!$placeholder && !$name;
  const marginBottom = props.$mb ? ms(25) : 0;

  return (
    <TouchableOpacity {...props} style={[styles.btn, { marginBottom }, props.style]}>
      <View style={styles.contentView}>
        {props.$dateIcon && <AntDesign name="calendar" style={styles.dateIcon} />}
        {isPlaceholder && <MyText $v={$placeholder} $c="#999" $fs="16" />}
        {!isPlaceholder && <MyText $v={$name} $fs="16" />}
      </View>
      <Feather name="chevron-down" color="#242424" size={ms(24)} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#F5F7F8',
    borderRadius: 15,
    color: '#242424',
    flexDirection: 'row',
    fontSize: '16@ms',
    height: '50@vs',
    justifyContent: 'space-between',
    paddingHorizontal: '20@ms',
  },
  contentView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateIcon: {
    color: '#242424',
    fontSize: '16@ms',
    marginRight: '10@vs',
  },
});
