/**
 *  CityDataList which renders individual city objects as HTML
 */

import {Cities} from "./city.js"
import {useCities} from "./CityDataProvider.js"


export const CityList = () => {
    const contentElement = document.querySelector(".list__cities")
    // console.log(contentElement)
    const cities = useCities()

    let citiesHTMLRepresentations = ""
    for (const city of cities) {

    citiesHTMLRepresentations += Cities(city)
    }


    //     // Add to the existing HTML in the content element
   contentElement.innerHTML += `
        
        <h3> Cities </h3>
        ${citiesHTMLRepresentations}
        
    `
}
