import { gql } from 'src/libs/apollo';
import { useMutation } from '@apollo/client';

export const CREATE_USER = gql(`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
    }
  }
`);

export const useSignup = () => {
  const [signup, ...data] = useMutation(CREATE_USER);
  return { signup, data };
};
