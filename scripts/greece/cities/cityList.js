import { RenderCity } from "./city.js"
import { useCities } from "./cityDataProvider.js"

export const populateCities = () => {
    const contentContainer = document.querySelector(".list--cities")
    const cityArr = useCities()
    let citiesHtml = "<h3>Cities</h3>"

    for (const city of cityArr) {
        citiesHtml += RenderCity(city)
    }
    contentContainer.innerHTML += `<ul class="lists">${citiesHtml}</ul>`
}