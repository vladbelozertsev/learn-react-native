import { GET_CARS } from 'src/Ω/car-list/api';
import { gql } from 'src/libs/apollo/_gen_';
import { useMutation } from '@apollo/client';

export const UPDATE_CAR = gql(`
  mutation UpdateCar($data: CarUpdateInput!, $where: CarWhereUniqueInput!) {
    updateCar(data: $data, where: $where) {
      id
      createdAt
    }
  }
`);

export const useUpdateCar = () => {
  const [updateCar, data] = useMutation(UPDATE_CAR, {
    refetchQueries: [GET_CARS],
  });
  return { updateCar, ...data };
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/46622456/custom-inputtypes-with-react-apollo
 **/
