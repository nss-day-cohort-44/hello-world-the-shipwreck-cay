const landmarkCollection =[
    {
        Landmark: "Eiffel Tower"
    },
    {
        Landmark: "Notre Dame cathedral"
    },
    {
        Landmark: "River Garonne"
    }
]
 
export const useLandmark =() => {
    return landmarkCollection.slice()
}