import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { FC } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

type Props = {
  close: () => void;
  hide?: boolean;
};

export const Close: FC<Props> = props => {
  return props.hide ? null : (
    <TouchableOpacity style={styles.closeBtn} onPress={props.close}>
      <AntDesign name="close" style={styles.closeIcon} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  closeBtn: {
    alignItems: 'flex-end',
  },
  closeIcon: {
    fontSize: '32@ms',
    color: '#FFF',
  },
});
