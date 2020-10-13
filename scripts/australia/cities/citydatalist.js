import { useCities } from "./citydataprovider.js"
import { citiesHTML } from "./cities.js"


export const populateCityList = () => {
    const cityContainer = document.querySelector(".list__cities")
    let buildCityHTML = ""
    const arrayOfCities = useCities()

    for (const city of arrayOfCities) {
        buildCityHTML += citiesHTML(city)
    }
    cityContainer.innerHTML += buildCityHTML
}