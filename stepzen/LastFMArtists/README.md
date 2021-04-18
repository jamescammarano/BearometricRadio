An schema for connecting to Last.FM's REST API through StepZen's GraphQL implementation.

This schema requires a Last.fm API Key which can be obtained [here](https://www.last.fm/api/account/create). 

Add the api key to a `config.yaml` file at the root of the StepZen directory.
```
stepzen/
    ├── index.graphql
    ├── config.yaml <----HERE
    ├── stepzen.config.json
    └── LastFMArtists
        ├── tagsTopArtists.graphql
        └── README.md
```

Example REST API url: http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=YOUR_API_KEY&format=json

Example of the REST API Return for tag "disco":
```js
{
    "topartists": {
        "artist": [
            {
                "name": "Bee Gees",
                "mbid": "bf0f7e29-dfe1-416c-b5c6-f9ebc19ea810",
                "url": "https://www.last.fm/music/Bee+Gees",
                "streamable": "0",
                "image": [
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/34s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "small"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "medium"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "large"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "extralarge"
                    },
                    {
                        "#text": "https://lastfm.freetls.fastly.net/i/u/300x300/2a96cbd8b46e442fc41c2b86b821562f.png",
                        "size": "mega"
                    }
                ],
                "@attr": {
                    "rank": "1"
                }
            },
        ]
    }
}
```