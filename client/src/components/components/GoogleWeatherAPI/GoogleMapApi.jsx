import React, { Component } from 'react'
// import GoogleApiWrapper from "../../../helpers/googleMapsClient"
import { Map, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={7} />
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyA6JBwT21wgMsRWqq7vmMHxk4YI21IW2xU"
  } 
) (MapContainer)
