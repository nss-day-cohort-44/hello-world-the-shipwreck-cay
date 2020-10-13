import {useLandmark} from './landmarkDataProvider.js'
import {landmark} from './landmark.js'
export const listOfLandmark = () => {
const ContentElement = document.querySelector(".list2")
const landmarkCollect = useLandmark()
let landmarkHTMLrepresentation = " <h3>Landmarks</h3>"
for (const places of landmarkCollect){
    landmarkHTMLrepresentation += landmark(places)
}
ContentElement.innerHTML +=
`
<ul class="lists">
 ${landmarkHTMLrepresentation} 
   </ul>
`
}