import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import { Button1 } from 'src/libs/components/button';
import { Input2 } from 'src/libs/components/input';
import { Screen } from 'src/libs/types/screens';
import { ScreenView } from 'src/libs/components/screen';
import { useUpdateCar } from './api';
import { wset } from 'src/libs/utils/helpers';

export const CarCreate: Screen<'CarCreate'> = () => {
  const { updateCar, loading } = useUpdateCar();
  const [brand, setBrand] = useState('');
  const [color, setColor] = useState('');
  const [model, setModel] = useState('');
  const [price, setPrice] = useState('');

  const submit = () => {
    const data = wset({ brand, color, model, price });

    updateCar({
      variables: { data, where: { id: 33 } },
      onCompleted: res => {
        console.log(res);
        Toast.show({ text1: 'Success!' });
      },
      onError: () => Toast.show({ text1: 'Error!' }),
    });
  };

  return (
    <ScreenView>
      <Input2 $ph="brand" value={brand} onChangeText={setBrand} $mb />
      <Input2 $ph="color" value={color} onChangeText={setColor} $mb />
      <Input2 $ph="model" value={model} onChangeText={setModel} $mb />
      <Input2 $ph="price" value={price} onChangeText={setPrice} $mb />
      <Button1 $t="Submit" onPress={submit} $isLoading={loading} />
    </ScreenView>
  );
};
