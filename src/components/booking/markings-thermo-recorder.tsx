import BouncyCheckbox from 'react-native-bouncy-checkbox';
import React, { FC } from 'react';
import { BookingForm } from 'src/api/bookings';
import { ControllerFieldState } from 'react-hook-form';
import { MyText } from 'src/components/my-text';
import { ScaledSheet, ms } from 'react-native-size-matters';

type Props = {
  field: Field<BookingForm, 'params'>;
  fieldState: ControllerFieldState;
  marking: BookingForm['params'][0];
};

export const MarkingsThermoRecorder: FC<Props> = props => {
  const onChange = () => {
    props.field.onChange(
      props.field.value.map(m => {
        if (m.Code !== props.marking.Code) return m;
        const Thermorecorder = +!m.Thermorecorder;
        return { ...m, Thermorecorder };
      }),
    );
  };

  return (
    <BouncyCheckbox
      textComponent={<MyText $t="Thermo recorder" $ml="10" $fs="16" />}
      disableBuiltInState={true}
      fillColor={CLR_APP}
      iconImageStyle={{ width: ms(12), height: ms(12) }}
      iconStyle={styles.checkboxContainer}
      innerIconStyle={styles.innerIcon}
      isChecked={!!props.marking.Thermorecorder}
      onPress={onChange}
      size={ms(30)}
      unfillColor="#FFF"
    />
  );
};

const styles = ScaledSheet.create({
  checkboxContainer: {
    borderColor: CLR_APP,
    borderWidth: 2.5,
    borderRadius: 5,
  },
  innerIcon: {
    borderRadius: 5,
  },
});
