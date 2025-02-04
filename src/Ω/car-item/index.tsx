import React from 'react';
import { MyText } from 'src/libs/components/my-text';
import { Screen } from 'src/libs/types/screens';
import { ScreenView } from 'src/libs/components/screen';
import { useGetCar } from './api';

export const CarItem: Screen<'CarItem'> = props => {
  const { data, loading } = useGetCar(props.route.params);

  return (
    <ScreenView $loading={loading}>
      <MyText $v={`id: ${data?.car.id}`} />
      <MyText $v={`id: ${data?.car.brand}`} />
      <MyText $v={`id: ${data?.car.model}`} />
      <MyText $v={`id: ${data?.car.price}`} />
      <MyText $v={`id: ${data?.car.color}`} />
      <MyText $v={`id: ${data?.car.createdAt}`} />
      <MyText $v={`id: ${data?.car.updatedAt}`} />
    </ScreenView>
  );
};
