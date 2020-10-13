/**
 *  LandmarkDataList which renders individual landmark objects as HTML
 */

import {Landmarks} from "./Landmarks.js"
import {useLandmarks} from "./LandmarksDataProvider.js"


export const LandmarksList = () => {
    const contentElement = document.querySelector(".list__landmark")
    // console.log(contentElement)
    const landmarks = useLandmarks()

    let landmarksHTMLRepresentations = ""
    for (const landmark of landmarks) {

   landmarksHTMLRepresentations += Landmarks(landmark)
    }


    //     // Add to the existing HTML in the content element
   contentElement.innerHTML += `
   <h3>Landmarks</h3>
   ${landmarksHTMLRepresentations}
    `    
    
}
