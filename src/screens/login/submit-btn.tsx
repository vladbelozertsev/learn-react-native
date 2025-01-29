import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { FC } from 'react';
import { Loading } from 'src/components/loading';
import { MyText } from 'src/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View, TouchableHighlight } from 'react-native';

type Props = {
  onPress: () => void;
  isLoading: boolean;
};

export const SubmitBtn: FC<Props> = props => {
  if (props.isLoading) return <Loading />;

  return (
    <TouchableHighlight style={styles.submitBtn} onPress={props.onPress}>
      <View style={styles.btnView}>
        <MyText $t="Login" style={styles.btnText} allowFontScaling={false} />
        <MCI name="truck-fast" size={30} style={styles.icon} />
      </View>
    </TouchableHighlight>
  );
};

const styles = ScaledSheet.create({
  submitBtn: {
    paddingTop: '10@ms',
    paddingBottom: '10@ms',
    paddingLeft: '38@ms',
    paddingRight: '38@ms',
    alignSelf: 'flex-end',
    backgroundColor: CLR_APP,
    borderTopLeftRadius: '25@ms',
    borderBottomLeftRadius: '25@ms',
  },
  btnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontSize: '18@ms',
    fontWeight: 'bold',
    paddingRight: '10@ms',
    color: '#FFF',
  },
  icon: {
    fontSize: '28@ms',
    color: '#FFF',
  },
});
