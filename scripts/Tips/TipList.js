//LocationList renders individual location objects as HTML

import { useTips } from './TipDataProvider.js'
import { Tips } from "./Tips.js"

export const TipsList = () => {

    const tipstargetElement = document.querySelector('#tips')
    const tips = useTips();

    let tipsHTMLReps = '';
    for (const currentTip of tips){
        for (const deep of deeps){
        tipsHTMLReps += Tips(currentTip)
        }
    }

    tipstargetElement.innerHTML += `
        <div class='locationcardcontainer'>
            ${tipsHTMLReps}
        </div>
    `
}