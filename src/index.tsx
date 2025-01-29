import React, { FC } from 'react';
import { GET_CARS } from 'src/api/cars';
import { Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GetCarsQuery } from 'src/types/api';

type Item = GetCarsQuery['cars'][number];

export const App: FC = () => {
  const { data, loading, error } = useQuery(GET_CARS);

  if (loading) return <Text>Loading</Text>;

  console.log(data?.cars[0].id === 0);

  return (
    <View>
      <Text>asdasd</Text>
    </View>
  );
};
