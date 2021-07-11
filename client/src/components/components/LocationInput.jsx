import React, { useEffect, useState } from 'react';
import { GET_LOCATION } from '../../helpers/queries/location';
import { useQuery } from '@apollo/client';

const LocationInput = ({ setLocation }) => {
  const [address, setAddress] = useState('Invalidenstr+117+Berlin');

  const GetLocation = (address) => {
    const { loading, error, data } = useQuery(GET_LOCATION, {
      variables: { address },
    });
    if (loading) {
      return 'Loading...';
    }
    if (error) {
      return `Error! ${error.message}`;
    }
    return data;
  };

  const data = GetLocation(address);

  useEffect(() => {
    setLocation(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onChange = async (e) => {
    setAddress(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="my-3">
      <form onSubmit={onSubmit} className="text-lg font-bold text-purple-400 ">
        <label htmlFor="location">
          Enter your location to hear the weather:{' '}
          <div>
            <input
              id="location"
              name="location"
              type="text"
              onChange={(e) => onChange(e)}
              className="p-1 px-2 text-purple-500 border-purple-500 rounded border-3"
              placeholder="City or Zipcode"
            />
          </div>
        </label>
      </form>
    </div>
  );
};

export default LocationInput;
