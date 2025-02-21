import { GET_CARS } from 'src/Ω/car-list/api';
import { gql } from 'src/libs/apollo/_gen_';
import { useMutation } from '@apollo/client';

export const CREATE_CAR = gql(`
  mutation CreateCar($input: CarCreateInput!) {
    createCar(input: $input) {
      id
      createdAt
    }
  }
`);

export const useCreateCar = () => {
  const [createCar, data] = useMutation(CREATE_CAR, {
    refetchQueries: [GET_CARS],
  });
  return { createCar, ...data };
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/46622456/custom-inputtypes-with-react-apollo
 **/
