/**
 *  CelebritiesDataList which renders individual celebrities objects as HTML
 */

import {Celebrities} from "./Celebrities.js"
import {useCelebrities} from "./CelebritiesDataProvider.js"


export const CelebritiesList = () => {
    const contentElement = document.querySelector(".list__celebrities")
    // console.log(contentElement)
    const celebrities = useCelebrities()

    let celebritiesHTMLRepresentations = ""
    for (const celebs of celebrities) {

    celebritiesHTMLRepresentations += Celebrities(celebs)
    }


    //     // Add to the existing HTML in the content element
   contentElement.innerHTML += `

        <h3> Celebrities </h3>
        ${celebritiesHTMLRepresentations}
        
    `
}
