import { gql } from '@apollo/client';

export const GET_LASTFM_CHARTS = gql`
  query lastFmCharts($tag) {
    {
      artist(tag: $tag) {
        image
        name
        url
      }
      album(tag: $tag) {
        artistName
        image
        name
        url
      }
    }
  }
`;
