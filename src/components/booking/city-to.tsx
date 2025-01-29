import React, { useState, useEffect, FC } from 'react';
import { AddBookingForm } from 'src/api/bookings';
import { ButtonPick } from 'src/components/button';
import { ControllerFieldState } from 'react-hook-form';
import { DIRESCTIONS } from 'src/utils/constants';
import { Picker, PickerItem } from 'src/components/picker';
import { ScaledSheet } from 'react-native-size-matters';
import { View } from 'react-native';
import { withOpen } from 'src/hocs/with-open';

type Props = {
  field: Field<AddBookingForm, 'CityTo'>;
  fieldState: ControllerFieldState;
};

export const CityTo: FC<Props> = withOpen(props => {
  const [items, setItems] = useState<PickerItem[]>([]);
  const erasePicker = () => props.field.onChange('');
  const onSelect = (id: string) => props.field.onChange(id);

  useEffect(() => {
    const arr = DIRESCTIONS.to;
    const select = (value: string) => ({ selected: props.field?.value === value });
    const data = arr.map(dir => ({ id: dir.Value, value: dir.Value, t: true, ...select(dir.Value) }));
    setItems(data);
  }, [props.field?.value]);

  return (
    <View style={styles.rootView}>
      <ButtonPick
        $pht="City To"
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
