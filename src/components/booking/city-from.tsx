import React, { useState, useEffect, FC } from 'react';
import { BookingForm } from 'src/api/bookings';
import { ButtonPick } from 'src/components/button';
import { ControllerFieldState } from 'react-hook-form';
import { DIRESCTIONS } from 'src/utils/constants';
import { Picker, PickerItem } from 'src/components/picker';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';
import { withOpen } from 'src/hocs/with-open';

type Props = {
  field: Field<BookingForm, 'CityFrom'>;
  fieldState: ControllerFieldState;
};

export const CityFrom: FC<Props> = withOpen(props => {
  const [items, setItems] = useState<PickerItem[]>([]);
  const erasePicker = () => props.field.onChange('');
  const onSelect = (id: string) => props.field.onChange(id);

  useEffect(() => {
    const arr = DIRESCTIONS.from;
    const select = (value: string) => ({ selected: props.field?.value === value });
    const data = arr.map(dir => ({ id: dir.Value, value: dir.Value, t: true, ...select(dir.Value) }));
    setItems(data);
  }, [props.field?.value]);

  return (
    <View style={styles.rootView}>
      <ButtonPick
        $pht="City From"
        $t={props.field?.value}
        $onPress={props.show}
        $onErase={erasePicker}
        $isError={!!props.fieldState.error}
      />
      <Picker {...props} onSelect={onSelect} items={items} />
    </View>
  );
});

const styles = ScaledSheet.create({
  rootView: {
    flex: 1,
  },
});
