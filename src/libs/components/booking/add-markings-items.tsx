import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, { FC } from 'react';
import { Append, Fields } from './types';
import { MyText } from 'src/libs/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { UseFieldArrayRemove } from 'react-hook-form';
import { useStateUser } from 'src/libs/state/auth';

type Props = {
  fields: Fields;
  append: Append;
  remove: UseFieldArrayRemove;
};

export const AddMarkingsItems: FC<Props> = props => {
  const { fields: markings, append, remove } = props;
  const codes = useStateUser()[0]?.Codes;

  return codes?.map(prams => {
    const index = (markings || [])?.findIndex(m => m.CodeID === prams.ID);
    const extra = { Code: prams.Name, CodeID: prams.ID };
    const emptyMarking = { Boxes: 0, FullBoxes: 0, Thermorecorder: 0 };

    const onPress = () => {
      if (index !== -1) remove(index);
      else append({ ...emptyMarking, ...extra });
    };

    return (
      <BouncyCheckbox
        key={prams.ID}
        iconImageStyle={{ width: ms(12), height: ms(12) }}
        disableBuiltInState={true}
        fillColor={CLR_APP}
        iconStyle={styles.checkboxContainer}
        isChecked={index !== -1}
        onPress={onPress}
        size={ms(30)}
        style={styles.checkbox}
        textComponent={<MyText $v={prams.Name} $ml="10" $fs="16" />}
      />
    );
  });
};

const styles = ScaledSheet.create({
  checkbox: {
    marginBottom: 25,
  },
  checkboxContainer: {
    borderColor: CLR_APP,
    borderWidth: 2,
  },
});
