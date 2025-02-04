import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { TouchableOpacity } from 'react-native';

type Props = {
  hide?: () => void;
};

export const CloseBtn: FC<Props> = props => {
  return (
    <TouchableOpacity onPress={props.hide}>
      <MyText $t="Close" style={styles.addFileBtnText} />
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  addFileBtnText: {
    backgroundColor: CLR_APP,
    borderRadius: 30,
    color: '#FFF',
    fontSize: '16@ms',
    fontWeight: 'bold',
    paddingHorizontal: '10@ms',
    paddingVertical: '22@ms',
    textAlign: 'center',
    marginBottom: '30@ms',
    marginHorizontal: '30@ms',
  },
});
