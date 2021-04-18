import { gql } from '@apollo/client';

export const GET_WEATHER= gql`
    query weather($lat, $lon) {
    {
        weatherReport(latitude: $lat, longitude: $lon) {
        feelsLike
        temp
        units
        description
        }
    }
}`