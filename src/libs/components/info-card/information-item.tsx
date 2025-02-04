import React, { FC } from 'react';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet } from 'react-native-size-matters';
import { View, TouchableOpacity } from 'react-native';

type Props = {
  t?: string;
  v?: string;
  icon?: React.ReactNode;
  onPress?: () => void;
};

export const InformationItem: FC<Props> = props => {
  const { t, v, icon, onPress } = props;
  const btn = { onPress, disabled: !onPress };

  return (
    <TouchableOpacity style={styles.rowView} {...btn}>
      {icon || null}
      <View style={styles.textView}>
        <MyText $t={t} $end=": " $fs="15" $bold />
        <MyText $v={v} $fs="15" />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  rowView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  icon: {
    fontSize: '26@ms',
    color: CLR_APP,
  },
  textView: {
    marginLeft: '10@ms',
  },
});
