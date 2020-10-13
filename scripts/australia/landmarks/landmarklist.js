import { useLandmarks } from "./landmarkDataProvider.js"
import { landmarkHTML } from "./landmark.js"


export const populateLandmarkList = () => {
    const landmarkContainer = document.querySelector(".list__landmarks")
    let buildLandmarkHTML = ""
    const arrayofLandmarks = useLandmarks()

    for (const landmark of arrayofLandmarks) {
        buildLandmarkHTML += landmarkHTML(landmark)
    }
    landmarkContainer.innerHTML += buildLandmarkHTML
}