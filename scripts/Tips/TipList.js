/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useTips } from './TipDataProvider.js'
import { Tip } from "./Tips.js"

export const tipList = () => {

    // Get a reference to the `<article class="content">` element
    const tipContentElement = document.querySelector("#tips")
    const tips = useTips()

    // Generate all of the HTML for all of the fish
    let tipHTMLRepresentations = "";
    for (const tip of tips) {
        console.log('here' + tips)
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        tipHTMLRepresentations += Tip(tips);
    }

    // Add to the existing HTML in the content element
    tipContentElement.innerHTML += `
        <article class="tip">
            ${tipHTMLRepresentations}
        </article>
    `
}