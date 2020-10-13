import {useCities} from './cityDataProvider.js'
import {City}      from './city.js'

export const listOfCities =()=> {
 const ContentElement = document.querySelector(".list1")
 const cityCollect =  useCities()

 let cityHTMLrepresentation =" "
 for (const places of cityCollect){
    cityHTMLrepresentation += City(places)
 }
 ContentElement.innerHTML +=
 `
 <div class="list1">
 <h3>Cities</h3>
 <ul class="lists">
     <li class="cities_list">${cityHTMLrepresentation} </li>
     </div>
 `
}