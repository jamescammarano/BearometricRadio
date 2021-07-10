An schema for connecting to Last.FM's REST API through StepZen's GraphQL implementation.

This schema requires a Last.fm API Key which can be obtained
[here](https://www.last.fm/api/account/create).

Add the api key to a `config.yaml` file at the root of the StepZen directory.

```
stepzen/
    ├── config.yaml <----HERE
    ├── index.graphql
    ├── stepzen.config.json
    └── HERE
        ├── geocode.graphql
        └── README.md
```

Example REST API url:
`https://geocode.search.hereapi.com/v1/geocode?q=Invalidenstr+117+Berlin&apiKey=${YOURAPIKEY}`

Example of the REST API Return for tag "disco":

```js
{
  "items": [
    {
      "title": "5 Rue Daunou, 75002 Paris, France",
      "id": "here:af:streetsection:bI4Le6cyA.1mlQyLunYpjC:CggIBCCi-9SPARABGgE1KGQ",
      "resultType": "houseNumber",
      "houseNumberType": "PA",
      "address": {
        "label": "5 Rue Daunou, 75002 Paris, France",
        "countryCode": "FRA",
        "countryName": "France",
        "stateCode": "IDF",
        "state": "Île-de-France",
        "county": "Paris",
        "city": "Paris",
        "district": "2e Arrondissement",
        "street": "Rue Daunou",
        "postalCode": "75002",
        "houseNumber": "5"
      },
      "position": {
        "lat": 48.86926,
        "lng": 2.3321
      },
      "access": [
        {
          "lat": 48.86931,
          "lng": 2.33215
        }
      ],
      "mapView": {
        "west": 2.33073,
        "south": 48.86836,
        "east": 2.33347,
        "north": 48.87016
      },
      "scoring": {
        "queryScore": 0.97,
        "fieldScore": {
          "country": 1,
          "city": 1,
          "streets": [
            1
          ],
          "houseNumber": 1,
          "postalCode": 0.82
        }
      }
    }
  ]
}

```
