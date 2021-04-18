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