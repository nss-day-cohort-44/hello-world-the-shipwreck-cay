/**
 *  CityDataList which renders individual city objects as HTML
 */

import { useCities } from "./CityDataProvider.js"


export const CityList = () => {
    const contentElement = document.querySelector(".contentContainer")
    // console.log(contentElement)
    const cities = useCities()


    //     // Add to the existing HTML in the content element
    contentElement.innerHTML += `
        <div class="cities_list_canada">
            Canada!
        </div>
    `
}
