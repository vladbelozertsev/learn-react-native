import { useQuery } from '@apollo/client';
import { gql } from 'src/libs/apollo';
import { GetCarInput } from 'src/libs/types/api';

export const GET_CAR = gql(`
  query GetCar($input: GetCarInput!) {
    car(input: $input) {
      brand
      color
      createdAt
      id
      model
      price
      updatedAt
    }
  }
`);

export const useGetCar = (input: GetCarInput) => {
  return useQuery(GET_CAR, { variables: { input } });
};
