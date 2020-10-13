const landmarkCollection =[
    {
        Landmark1: "Eiffel Tower",
        Landmark2: "Notre Dame cathedral",
        Landmark3: "River Garonne"
    }
]
 
export const useLandmark =() => {
    return landmarkCollection.slice()
}