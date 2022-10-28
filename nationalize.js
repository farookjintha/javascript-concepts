const data = {
    "country":
        [
            {
                "country_id": "AT",
                "probability": 0.064
            },
            {
                "country_id": "DE",
                "probability": 0.059
            },
            {
                "country_id": "DK",
                "probability": 0.058
            },
            {
                "country_id": "IE",
                "probability": 0.051
            },
            {
                "country_id": "AU",
                "probability": 0.047
            }
        ],
    "name": "michael"
}

const output = data.country.slice(0, 2);

console.log('Top 2 Values: ', output)

const finalResult = {countries: output, name: data.name}

console.log('final Result: ', finalResult)
{/* <p>{output[0].country_id}</p>
<p>{output[0].probability}</p>

<p>{output[1].country_id}</p>
<p>{output[1].probability}</p> */}