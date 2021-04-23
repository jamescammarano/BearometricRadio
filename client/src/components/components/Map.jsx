import React from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "../../assets/css/mapStyling.css"
import {mapStyles} from "../../assets/css/mapStyles";
import locateme from "../../assets/img/locateme.png"

const libraries = ["places"];
const mapContainerStyle = {
  height: "50vh",
  width: "100%",
};
const options = {
  styles: mapStyles, //go to snazzymaps to change the colors
  disableDefaultUI: true, // removes all the ui elements on the map
  rotateControl:true,
  zoomControl: true, // adds zoom control back in
};
const center = {
  lat: 43.6532,
  lng: -79.3832,
};
// move inside map
export default function Map({ setLocation }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // use useState - when you want a rerender
  // use useRef - when you want to retain state without causing a rerender
  const mapRef = React.useRef();
  //callback function to recieve map and save it in useRef allows access to map elesewhere in the code and will not cause a rerender
  const onMapLoad = React.useCallback(async (map) => {
    mapRef.current = map;
    console.log("This is the map")
    console.log(map)
    console.log("This is center")
    console.log(map.center)
  }, []);

  const panTo = React.useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(14);
    console.log(`panTo lat: ${lat} -- panTo lng: ${lng}`)
    setLocation({lat, lng})
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <Locate panTo={panTo} />
      <Search panTo={panTo} />

      <GoogleMap
        id="map"
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center} 
        options={options}
        onLoad={onMapLoad}
      ></GoogleMap>
    </>
  );
}
/* can i use center to generate lat and long and pass up rather than passing the function down then trigger a useEffect when that changes rather than passing the function down to maps                                      *****************************************  */
function Locate({ panTo }) {
  return (
    <button
      className="locate"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    ><img src={locateme} alt="Locate me"  />
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete();

  //  https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]); // this is the way to get the lat and lng *************************************************************
      panTo({ lat, lng });
    } catch (error) {
      console.log("😱 Error: ", error);
    }
  };

  return (
    <div className="search">
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Search your location"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ id, description }) => (
                <ComboboxOption key={id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  );
}

/*

notes:

onCloseClick allows you to close the info window and then open it later.  without it you can open the first and open other but when you close no others will open

formatRelative formats a comparison between a start and end date to a helpful string

usePlacesAutocomplete can limit the area returned like in the above.  That way it returns location close to the given location higher on the list

panTo function and <Search/> allow the search function to be used to reposition the map 

*/
