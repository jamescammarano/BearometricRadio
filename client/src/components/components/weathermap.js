let map, infowindow, pos;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.006 },
    zoom: 7,
  });
  /*/ Generate the infowindow /*/
  infowindow = new google.maps.InfoWindow();

  /*/ Create the search box and link it to the UI element. /*/
  const input = document.getElementById("pac-input");
  const autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo("bounds", map);

  // Specify just the place data fields that you need.
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

  /*/ Create the infowindow call box /*/
  const infowindowContent = document.getElementById("infowindow-content");
  infowindow.setContent(infowindowContent);

  /*/ autocomplete eventListener activation function /*/
  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    const place = autocomplete.getPlace();
    if (!place.geometry || !place.geometry.location) {
      return;
    }
    /*/ Find the new center of the map /*/
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(7);
      pos = {
        lat: map.getMapCenter().lat(),
        lng: map.getMapCenter().lng(),
      };
    }
  });

  /*/ Location service button /*/
  const locationButton = document.createElement("button");
  locationButton.textContent = "Get Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(locationButton);
  locationButton.addEventListener("click", () => {
    /*/ Try HTML5 geolocation - THIS IS THE COORDINATES /*/
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infowindow.setPosition(pos);
          map.setCenter(pos);
        },
        () => {
          /*/ Error when no location is found /*/
          handleLocationError(true, infowindow, map.getCenter());
        }
      );
    } else {
      /*/ Error for Browser that doesn't support Geolocation /*/
      handleLocationError(false, infowindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infowindow, pos) {
  infowindow.setPosition(pos);
  infowindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infowindow.open(map);
}
