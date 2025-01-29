import { gql } from '../__generated__';

export const GET_CARS = gql(`
  query GetCars {
    cars {
      id
      brand
    }
  }
`);
