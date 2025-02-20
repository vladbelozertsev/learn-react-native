import { GET_CARS } from 'src/Ω/car-list/api';
import { gql } from 'src/libs/apollo';
import { useMutation } from '@apollo/client';

export const SEND_IMG = gql(`
  mutation AddCarImg($input: FileInput!) {
    addCarImg(input: $input) {
      id
    }
  }
`);

export const useAddImg = () => {
  const [sendImage, data] = useMutation(SEND_IMG, {
    refetchQueries: [GET_CARS],
  });
  return { sendImage, ...data };
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/46622456/custom-inputtypes-with-react-apollo
 **/
