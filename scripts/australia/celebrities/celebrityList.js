import { useCelebrities } from "./celebrityDataProvider.js"
import { celebrityHTML } from "./celebrity.js"


export const populateCelebrityList = () => {
    const celebrityContainer = document.querySelector(".list__celebrities")
    let buildCelebrityHTML = ""
    const arrayOfCelebrities = useCelebrities()
    for (const celeb of arrayOfCelebrities) {
        buildCelebrityHTML += celebrityHTML(celeb)
    }
    celebrityContainer.innerHTML += buildCelebrityHTML

}