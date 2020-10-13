import {useCities} from "/scripts/canada/cities/CityDataProvider.js"

const allTheCities = useCities( )
// console.log(allTheCities)

for (const cities of allTheCities) {
    console.log(cities)
    }
    