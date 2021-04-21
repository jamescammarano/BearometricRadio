# Google Maps API
Displays a map on the page.

## How It Works:
Inside you are two tasks:
 - Load the Google API
 - Handle access to the API in our components

These tasks are solved with a "higher order" wrapper. 
This wrapper is provided for us in the library as 
`GoogleApiWrapper`and just needs to be configured. 

The wrapper acts similar to the `ApolloProvider` 
wrapper. It takes in the needed configuration and 
the uses [context](https://reactjs.org/docs/context.html)
 to make this config available "globally".

```
export default GoogleApiWrapper({
    apiKey: apiKey
    libraries: ['places']
})
```

 - apiKey is your API Key
 - libraries are the APIs you want to call from google

To start lets just load the places library. 
Other options to pass in can be found [here](https://github.com/fullstackreact/google-maps-react/blob/master/src/GoogleApiComponent.js)

Next we need a container for the map. 
This is essentially the 
`<div id="map">` in vanilla js and traditional 
Google Map implementations.

We call this container `MapContainer` 
and wrap it in the `GoogleApiWrapper`.


`MapContainer` is where we will put our code. 
It is a class component.

For a simple loading of the map, no markers and 
not extra info on a place, it looks like we just 
need a `<Map google={this.props.google} zoom=[Zoom As Number]></Map>`
within the `MapContainer`

`this.props.google` is available through the wrapper 
`GooogleApiWrapper`.

The loading functionality is taken care of as well 
through the `GoogleApiWrapper`. It can be changed by 
passing in a jsx component as a prop to the wrapper.

So far our code looks like 

```js
import {Map, GoogleApiWrapper} from 'google-maps-react';

<GoogleApiWrapper>
    <MapContainer>
        <Map google={this.props.google} zoom=14 >
        </Map>
    </MapContainer>
</GoogleApiWrapper>
```

This only loads a map via premade components from 
`google-maps-react` and does nothing else.

At this point we may need to fork and create our own
map component.
