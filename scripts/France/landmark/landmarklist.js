import {useLandmark} from './landmarkDataProvider'
import {landmark} from './landmark.js'
export const listOfLandmark = () => {
const ContentElement = document.querySelector(".list2")
const landmarkCollect = useLandmark()
let landmarkHTMLrepresentation = " "
for (const places of landmarkCollect){
    landmarkHTMLrepresentation += landmark(places)
}
ContentElement.innerHTML +=
`
<div class="list2">
<h3>Landmarks</h3>
<ul class="lists">
    <li class="landmarks_list"> ${landmarkHTMLrepresentation}</li>
    </div>
`
}