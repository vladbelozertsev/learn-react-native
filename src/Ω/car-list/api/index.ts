import { useQuery } from '@apollo/client';
import { gql } from 'src/libs/apollo';

export const GET_CARS = gql(`
  query GetCars($take: Int $skip: Int) {
    cars(skip: $skip take: $take) {
      id
      brand
    }
  }
`);

export const useGetCars = ({ skip, take }: { skip?: number; take?: number }) => {
  return useQuery(GET_CARS, {
    variables: { skip, take },
    notifyOnNetworkStatusChange: true,
  });
};
