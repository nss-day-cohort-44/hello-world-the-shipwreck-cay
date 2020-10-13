import {useCelebrity} from './celebrityDataProvider.js'
import {celebrity}    from './celebrity.js'

export const listOfCelebrities =() => {
const ContentElement = document.querySelector(".list3")
const celebrityCollect =  useCelebrity()

let celebrityHTMLrepresentation =" <h3>Celebrities</h3>"

for(const celebrities of celebrityCollect) {
    celebrityHTMLrepresentation += celebrity(celebrities)
}
ContentElement.innerHTML +=
` <div class="list3">
${celebrityHTMLrepresentation}
</div>
`
}

