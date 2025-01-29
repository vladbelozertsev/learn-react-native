import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { FC } from 'react';
import { ArrowText } from 'src/components/arrow-text';
import { MyShadow } from 'src/components/my-shadow';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View } from 'react-native';

export type Props = {
  v?: string;
  t?: string;
  mb?: boolean;
  icon: string;
  disabled?: boolean;
  children?: React.ReactNode;
  content?: React.ReactNode;
  open: boolean;
  toggle: () => void;
};

export const ButtonShow: FC<Props> = props => {
  const { open, toggle: onPress, icon, disabled, t, v } = props;
  const content = props.children || props.content;
  const chevron = `chevron-thin-${open ? 'down' : 'up'}`;
  const marginBottom = props.mb ? ms(35) : 0;
  const styles = getStyles(open);

  return (
    <View style={{ marginBottom }}>
      <MyShadow style={styles.shadow} $innerTO={{ style: styles.btn, onPress }}>
        <FontAwesome name={icon} size={ms(32)} color={CLR_APP} />
        <MyText $t={t} $v={v} $h="18" $c="#757575" />
        <Entypo name={chevron} size={ms(24)} color="#999" />
      </MyShadow>
      {open && disabled && <ArrowText titlet="Nothing found" isLast />}
      {open && !disabled && content}
    </View>
  );
};

const getStyles = (open: boolean) => {
  return ScaledSheet.create({
    shadow: {
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      borderBottomLeftRadius: open ? 0 : 30,
      borderBottomRightRadius: open ? 0 : 30,
    },
    btn: {
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderBottomLeftRadius: open ? 0 : 30,
      borderBottomRightRadius: open ? 0 : 30,
      borderBottomWidth: open ? 2 : 0,
      borderColor: '#F0F1F5',
      borderRadius: 30,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: '25@ms',
      paddingVertical: '25@ms',
    },
  });
};
