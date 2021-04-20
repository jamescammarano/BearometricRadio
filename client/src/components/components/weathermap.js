let map, infowindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.7128, lng: -74.006 },
    zoom: 7,
  });
  /*/ Generate the infowindow /*/
  infowindow = new google.maps.InfoWindow();
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
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infowindow.setPosition(pos);
          /*/ this creates the callout for the location - make the methods the same - either a callout box or marker - not both /*/
          infowindow.setContent("Location found.");
          infowindow.open(map);
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