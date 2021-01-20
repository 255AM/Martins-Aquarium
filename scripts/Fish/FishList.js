/**
 *  FishList which renders individual fish objects as HTML
 */

// TODO: Import `useFish` from the data provider module

import { useFish3, useFish5, useFishOther } from './FishDataProvider.js'
import { htmlFish } from "./Fish.js"

export const FishList3 = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement3 = document.querySelector("#fishTarget3")
    const copyOfFishArray = useFish3()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const currentfish of copyOfFishArray) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        fishHTMLRepresentations += htmlFish(currentfish);
    }

    // Add to the existing HTML in the content element
    contentElement3.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}

export const FishList5 = () => {

    // Get a reference to the `<article class="content">` element
    
    const contentElement5 = document.querySelector("#fishTarget5")
    
    const copyOfFishArray = useFish5()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const currentfish of copyOfFishArray) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        fishHTMLRepresentations += htmlFish(currentfish);
    }

    // Add to the existing HTML in the content element
    contentElement5.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}

export const FishListOther = () => {

    // Get a reference to the `<article class="content">` element
    
    const contentElementOther = document.querySelector("#fishTargetOther")
    const copyOfFishArray = useFishOther()

    // Generate all of the HTML for all of the fish
    let fishHTMLRepresentations = ""
    for (const currentfish of copyOfFishArray) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
        fishHTMLRepresentations += htmlFish(currentfish);
    }

    // Add to the existing HTML in the content element
    contentElementOther.innerHTML += `
        <article class="fishList">
            ${fishHTMLRepresentations}
        </article>
    `
}
