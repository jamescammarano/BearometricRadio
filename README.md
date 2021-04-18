# Bearometric Radio
A web app that recommends music to listen to based on the weather. This app is built around a StepZen implementation of GraphQL and a React frontend (with a touch of vanilla JS).

## StepZen GraphQL:

The [StepZen](stepzen.com) implementation of a GraphQL API is used to run a query to the Last.fm endpoints for `tag.getTopArtist` and `tag.getTopAlbum` as well as to OpenWeatherApp. The two Last.fm schemas were built by hand, while the OpenWeatherApp is a StepZen default schema.

**How to install and start**

1. Download and install StepZen following "[Install StepZen and Login to Your Account](stepzen.com/docs/quickstart/setup)"

2. Add your [Last.fm API Key](https://www.last.fm/api/account/create) to `config.yaml.example` and rename the file to `config.yaml`

3. run `stepzen start`


## React Client:
