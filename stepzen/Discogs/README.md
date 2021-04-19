An schema for connecting to Discogs's REST API through StepZen's GraphQL implementation.

This schema requires a Discogs API Key which can be obtained [here](hhttps://www.discogs.com/settings/developers). 

Add the api key to a `config.yaml` file at the root of the StepZen directory.
```
stepzen/
    ├── config.yaml <----HERE
    ├── index.graphql
    ├── stepzen.config.json
    └── Discogs
        ├── albumEndpoint.graphql
        ├── artistEndpoint.graphql
        └── README.md
```

example endpoint:
https://api.discogs.com/masters/25893

Example return for Donna Summer - Bad Girls, masterID = 25893:
```js
{
    "id": 25893,
    "main_release": 2632942,
    "most_recent_release": 18122479,
    "resource_url": "https://api.discogs.com/masters/25893",
    "uri": "https://www.discogs.com/Donna-Summer-Bad-Girls/master/25893",
    "versions_url": "https://api.discogs.com/masters/25893/versions",
    "main_release_url": "https://api.discogs.com/releases/2632942",
    "most_recent_release_url": "https://api.discogs.com/releases/18122479",
    "num_for_sale": 1189,
    "lowest_price": 1.06,
    "images": [13 items],
    "genres": [
        "Electronic",
        "Funk / Soul"
        ],
    "styles": [2 items],
    "year": 1979,
    "tracklist": [15 items],
    "artists": [1 item],
    "title": "Bad Girls",
    "data_quality": "Correct",
    "videos": [7 items]
}
```