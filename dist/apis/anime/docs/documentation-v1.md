## Endpoint
> https://anime.api.sonyma.net

# Get random animes
> **Try it out** - [/v1/random](/v1/random)
| Parameter 	| Required 	| Default 	| Type           	| Description                     	|
|-----------	|----------	|---------	|----------------	|---------------------------------	|
| count     	| false    	| 20      	| Integer 1 - 20 	| The limit of results            	|
| genre     	| false    	| []      	| IntArray       	| Filter by given TMDB genre id's 	|

# Get trending animes
> **Try it out** - [/v1/trending](/v1/trending)
| Parameter 	| Required 	| Default 	| Type           	| Description                     	|
|-----------	|----------	|---------	|----------------	|---------------------------------	|
| count     	| false    	| 20      	| Integer 1 - 20 	| The limit of results            	|

# Get anime by search query
> **Try it out** - [/v1/search](/v1/search)
| Parameter 	| Required 	| Default 	| Type           	| Description                     	|
|-----------	|----------	|---------	|----------------	|---------------------------------	|
| query     	| true     	| 0       	| String         	| Filter by search term           	|
| count     	| false    	| 20      	| Integer 1 - 20 	| The limit of results            	|
| genre     	| false    	| []      	| IntArray       	| Filter by given TMDB genre id's 	|