import Feather from 'react-native-vector-icons/Feather';
import React, { FC } from 'react';
import { MyShadow } from '../my-shadow';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';
import { View } from 'react-native';

type Props = {
  hide?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
  noArrow?: boolean;
  nocolon?: boolean;
  nosdw?: boolean;
  Text?: React.ReactNode;
  textt?: string;
  textv?: string;
  titlet?: string;
  titlev?: string;
  width35?: boolean;
  onPress?: () => void;
};

export const ArrowText: FC<Props> = props => {
  const { titlev, titlet, textv, textt, hide, isLast, isFirst } = props;
  const isText = typeof textv === 'string' || typeof textt === 'string';
  const isEmpty = isText && (textv === '' || textt === '') && !props.Text;
  const end = (isText || props.Text) && !props.nocolon ? ': ' : '';
  const styles = getStyles(props);

  return isEmpty || hide ? null : (
    <MyShadow
      disabled={props.nosdw}
      style={styles.shadow}
      sides={{ start: true, end: true, bottom: !!isLast, top: !!isFirst }}
      corners={{ bottomEnd: !!isLast, bottomStart: !!isLast, topEnd: !!isFirst, topStart: !!isFirst }}>
      <View style={styles.rootView}>
        {props.noArrow && <View style={{ width: ms(18) }} />}
        {!props.noArrow && <Feather name={'arrow-right'} size={ms(18)} color={CLR_APP} />}
        <MyText style={styles.text} $v={titlev} $t={titlet} $end={end} />
        {props.Text ? props.Text : null}
        <Text isText={isText} {...props} />
        <Button isText={isText} {...props} />
      </View>
    </MyShadow>
  );
};

const Button: FC<Props & { isText: boolean }> = props => {
  return !props.isText || !props.onPress || props.Text ? null : (
    <TouchableOpacity onPress={props.onPress}>
      <MyText $v={props.textv} $t={props.textt} $cp $bold $f1 />
    </TouchableOpacity>
  );
};

const Text: FC<Props & { isText: boolean }> = props => {
  if (!props.isText || props.onPress || props.Text) return null;
  return <MyText $v={props.textv} $t={props.textt} $c="#484848" $f1 />;
};

const getStyles = (prams: { isFirst?: boolean; isLast?: boolean; width35?: boolean }) => {
  return ScaledSheet.create({
    shadow: {
      borderBottomLeftRadius: prams.isLast ? 30 : 0,
      borderBottomRightRadius: prams.isLast ? 30 : 0,
      borderTopLeftRadius: prams.isFirst ? 30 : 0,
      borderTopRightRadius: prams.isFirst ? 30 : 0,
    },
    rootView: {
      backgroundColor: '#FFF',
      flexDirection: 'row',
      paddingHorizontal: '10@ms',
      paddingVertical: '8@ms',
      borderBottomLeftRadius: prams.isLast ? 30 : 0,
      borderBottomRightRadius: prams.isLast ? 30 : 0,
      borderTopLeftRadius: prams.isFirst ? 30 : 0,
      borderTopRightRadius: prams.isFirst ? 30 : 0,
    },
    text: {
      color: '#484848',
      marginLeft: '10@ms',
      maxWidth: '35%',
      fontWeight: 'bold',
      width: prams.width35 ? '50%' : undefined,
    },
  });
};
