import { useQuery } from '@apollo/client';
import { gql } from 'src/libs/apollo';
import { GetCarsInput } from 'src/libs/types/api';

export const GET_CARS = gql(`
  query GetCars($input: GetCarsInput) {
    cars(input: $input) {
      id
      brand
    }
  }
`);

export const useGetCars = (input?: GetCarsInput) => {
  return useQuery(GET_CARS, {
    variables: { input },
    notifyOnNetworkStatusChange: true,
  });
};
