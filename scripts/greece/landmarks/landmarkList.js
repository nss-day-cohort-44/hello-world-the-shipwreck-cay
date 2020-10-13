import { RenderLandmark } from "./landmark.js"
import { useLandmarks } from "./landmarkDataProvider.js"

export const PopulateLandmarks = () => {
    const contentContainer = document.querySelector(".list--landmarks")
    const landmarkArr = useLandmarks()

    let landmarkHtml = "<h3>Landmarks</h3>"
    for (const landmark of landmarkArr) {
        landmarkHtml += RenderLandmark(landmark)
    }
    contentContainer.innerHTML += `<ul class="lists">${landmarkHtml}</ul>`
}