import { RenderCeleb } from "./celebrity.js"
import { useCelebs } from "./celebrityDataProvider.js"

export const populateCelebrities = () => {
    const contentContainer = document.querySelector(".list--celebs")
    const celebArr = useCelebs()

    let celebHtml = "<h3>Celebrities</h3>"

    for (const celeb of celebArr) {
        celebHtml += RenderCeleb(celeb)
    }
    contentContainer.innerHTML += `<ul class="lists">${celebHtml}</ul>`
}