import React, { FC, useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { BookingForm } from 'api/bookings';
import { ControllerFieldState } from 'react-hook-form';
import { Input2 } from 'src/libs/components/input';
import { useTranslation } from 'react-i18next';

type Props = {
  field: Field<BookingForm, 'params'>;
  fieldState: ControllerFieldState;
  marking: BookingForm['params'][0];
  index: number;
};

export const MarkingsFullBoxes: FC<Props> = props => {
  const fullBoxes = props.marking.FullBoxes?.toString();
  const value = fullBoxes === '0' ? '' : fullBoxes;
  const errors = (props.fieldState.error || []) as any[];
  const errText = errors[props.index]?.FullBoxes?.message;
  const t = useTranslation().t;

  const onChange = (FullBoxes: string) => {
    const id = props.marking.Code;
    const items = props.field.value;
    const markings = items.map(i => (i.Code === id ? { ...i, FullBoxes } : i));
    props.field.onChange(markings);
  };

  useEffect(() => {
    if (errText !== 'FB_MORE_THAN_BOX') return;
    const text1 = t('Fullboxes count should be less than boxes');
    Toast.show({ text1, type: 'fail', visibilityTime: 10000 });
  }, [errText, t]);

  return (
    <Input2
      $borderColor={CLR_APP}
      $isError={!!errors[props.index]?.FullBoxes?.message}
      $nosdw
      $pht="FullBoxes"
      inputMode="numeric"
      onChangeText={onChange}
      value={value}
    />
  );
};
