import { useQuery } from '@apollo/client';
import { gql } from 'src/libs/apollo';
import { CarWhereUniqueInput } from 'src/libs/types/api';

export const GET_CAR = gql(`
  query GetCar($where: CarWhereUniqueInput!) {
    car(where: $where) {
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

export const useGetCar = (where: CarWhereUniqueInput) => {
  return useQuery(GET_CAR, { variables: { where } });
};
