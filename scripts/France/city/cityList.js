import {useCities} from './cityDataProvider.js'
import {City}      from './city.js'

export const listOfCities =()=> {
 const ContentElement = document.querySelector(".list1")
 const cityCollect =  useCities()

 let cityHTMLrepresentation =" <h3>Cities</h3>"
 for (const places of cityCollect){
    cityHTMLrepresentation += City(places)
 }
 ContentElement.innerHTML +=
 `
 <ul class="lists">
     ${cityHTMLrepresentation} 
     </ul>
    
 `
}