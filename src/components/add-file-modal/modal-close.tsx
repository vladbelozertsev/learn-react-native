import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { FC } from 'react';
import { ScaledSheet } from 'react-native-size-matters';
import { View, TouchableOpacity } from 'react-native';

type Props = {
  hide: () => void;
};

export const ModalClose: FC<Props> = props => {
  return (
    <View style={styles.rootView}>
      <TouchableOpacity onPress={props.hide}>
        <AntDesign name="close" style={styles.closeIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  rootView: {
    alignItems: 'flex-end',
    // position: 'absolute',
    // right: 0,
    // top: 0,
    backgroundColor: 'red',
    marginBottom: 20,
  },
  closeIcon: {
    fontSize: '42@ms',
    color: CLR_APP,
  },
});
