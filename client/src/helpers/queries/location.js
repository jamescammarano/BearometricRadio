import { gql } from '@apollo/client';

export const GET_LOCATION = gql`
  query geocode($address: String!) {
    geocode(address: $address) {
      lat
      lng
    }
  }
`;
