import GoogleApiWrapper from "google-maps-react"

const apiKey = "AIzaSyA6JBwT21wgMsRWqq7vmMHxk4YI21IW2xU"

export default GoogleApiWrapper({
  apiKey: apiKey,
  libraries: ['places']
})