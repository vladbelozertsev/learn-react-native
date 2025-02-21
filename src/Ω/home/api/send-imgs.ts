import { GET_CARS } from 'src/Ω/car-list/api';
import { gql } from 'src/libs/apollo';
import { useMutation } from '@apollo/client';

export const SEND_IMGS = gql(`
  mutation AddCarImgs($input: FilesInput!) {
    addCarImgs(input: $input) {
      id
    }
  }
`);

export const useAddImgs = () => {
  const [sendImage, data] = useMutation(SEND_IMGS, {
    refetchQueries: [GET_CARS],
  });
  return { sendImage, ...data };
};

/**
 * Useful links:
 * https://stackoverflow.com/questions/46622456/custom-inputtypes-with-react-apollo
 **/
