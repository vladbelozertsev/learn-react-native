import React, { FC } from 'react';
import { BookingForm } from 'src/api/bookings';
import { ControllerFieldState } from 'react-hook-form';
import { Input2 } from 'src/components/input';

type Props = {
  field: Field<BookingForm, 'params'>;
  fieldState: ControllerFieldState;
  marking: BookingForm['params'][0];
  index: number;
};

export const MarkingsBoxes: FC<Props> = props => {
  const boxes = props.marking.Boxes?.toString();
  const value = boxes === '0' ? '' : boxes;
  const errors = (props.fieldState.error || []) as any[];

  const onChange = (Boxes: string) => {
    const id = props.marking.Code;
    const items = props.field.value;
    const markings = items.map(i => (i.Code === id ? { ...i, Boxes } : i));
    props.field.onChange(markings);
  };

  return (
    <Input2
      $borderColor={CLR_APP}
      $isError={!!errors[props.index]?.Boxes?.message}
      $nosdw
      $pht="Boxes"
      inputMode="numeric"
      onChangeText={onChange}
      value={value}
    />
  );
};
