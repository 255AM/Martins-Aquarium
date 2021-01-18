/**
 *  Tips which renders individual tip objects as HTML
 */
export const Tip = (tips) => {
    let stuff = ''
    
    for (let i=0; i<tips.length;i++){
    stuff += `
        <section class="tip card">
        <h1 class="tip_sub">${tips[i].subHeading}</div>
        `
        for (let j=0; j<tips[i].tips.length; j++){
            stuff += 
            `<li class="tip__listItem">${tips[i].tips[j]}</li>
            `
            stuff += `</section>`
        }
    }
    console.log('here' + stuff)
    return stuff
    //console.log(currentTip)
}

// for (i=0; i<tipsCollection.length; i++){
//     d += `<div>${tipsCollection[i].subHeading}</div>`
//     for ( j=0;j<tipsCollection[i].tips.length; j++){
//         d += `<div>${tipsCollection[i].tips[j]}`
//     }
// }