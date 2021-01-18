//LocationList renders individual location objects as HTML

import { copyOfLocationObjectArray } from './LocationsDataProvider.js'
import { Locations } from "./Locations.js"

export const LocationsList = () => {

    const targetElement = document.querySelector('#locationcardcontainer')
    const locations = copyOfLocationObjectArray();

    let locationHTMLReps = '';
    for (const currentLocation of locations){
        locationHTMLReps += Locations(currentLocation)
    }




    targetElement.innerHTML += `
        <div class='locationcardcontainer'>
            ${locationHTMLReps}
        </div>
    `
}