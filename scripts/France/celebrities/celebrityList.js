import {useCelebrity} from './celebrityDataProvider.js'
import {celebrity}    from './celebrity.js'

export const listOfCelebrities =() => {
const ContentElement = document.querySelector(".list3")
const celebrityCollect =  useCelebrity()

let celebrityHTMLrepresentation =" "

for(const celebrities of celebrityCollect) {
    celebrityHTMLrepresentation += celebrity(celebrities)
}
ContentElement.innerHTML +=
` <div class="list3">
<h3>Celebrities</h3>
<ul class="lists">
    <li class="people_list">${celebrityHTMLrepresentation}(1769 – 1821)</li>
`
}

