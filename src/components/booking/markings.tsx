import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, { FC } from 'react';
import { BookingForm } from 'src/api/bookings';
import { ControllerFieldState, UseFieldArrayRemove } from 'react-hook-form';
import { DIRESCTIONS } from 'src/utils/constants';
import { MarkingsBoxes } from './markings-boxes';
import { MarkingsFullBoxes } from './markings-full-boxes';
import { MarkingsThermoRecorder } from './markings-thermo-recorder';
import { MyShadow } from 'src/components/my-shadow';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';
import { View } from 'react-native';

type Props = {
  cityFrom: string;
  field: Field<BookingForm, 'params'>;
  fieldState: ControllerFieldState;
  remove: UseFieldArrayRemove;
};

export const Markings: FC<Props> = props => {
  const direction = DIRESCTIONS.from.find(d => d.Value === props.cityFrom);
  const isFB = direction?.Code === 'CO' || direction?.Code === 'EC';
  const items = props.field.value || [];

  return items.map((marking, index) => {
    const remove = () => props.remove(index);
    return (
      <MyShadow key={index} style={styles.shadow}>
        <View style={styles.headerView}>
          <MyText $v={marking.Code} $end=": " $h="18" />
          <FontAwesome name="trash" size={ms(24)} color="tomato" onPress={remove} />
        </View>
        <View style={styles.boxesView}>
          <MarkingsBoxes {...props} marking={marking} index={index} />
          {isFB && <View style={styles.gapView} />}
          {isFB && <MarkingsFullBoxes {...props} marking={marking} index={index} />}
        </View>
        <MarkingsThermoRecorder {...props} marking={marking} />
      </MyShadow>
    );
  });
};

const styles = ScaledSheet.create({
  shadow: {
    backgroundColor: '#FFF',
    borderRadius: '15@ms',
    marginBottom: '25@ms',
    paddingBottom: '15@ms',
    paddingHorizontal: '15@ms',
    paddingTop: '10@ms',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10@ms',
  },
  boxesView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10@ms',
  },
  gapView: {
    width: '5%',
  },
});
