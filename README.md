This is a Number Classification API, build with node.js

The user enter a number for example 4 and it return json data like this
```
{
    "number": 4,
    "is_prime": false,
    "is_perfect": false,
    "properties": [
        "armstrong",
        "even"
    ],
    "digit_sum": 4,
    "fun_fact": "4 is the smallest number of colors sufficient to color all planar maps."
}
```

This is part of the intership at HNG backend track.
Libraries used are "express.js, cors (for Cross-Origin Resource Sharing) and axios for getting the fun fact about the number from http://numbersapi.com/ API.